import React from "react";
import ButtonControlViewModel from "./Presentation/View/Button/ButtonControlViewModel";
import ButtonControl from "./Presentation/View/Button/ButtonControl";
import AutocompleteViewModel from "./Presentation/View/AutoComplete/AutocompleteViewModel";
import AutocompleteControl from "./Presentation/View/AutoComplete/AutocompleteControl";
import "./App.css";

const App: React.FC = () => {
  const viewModel1 = new ButtonControlViewModel();
  const viewModel2 = new ButtonControlViewModel();
  const autoCompleteVM1 = new AutocompleteViewModel(3);
  const autoCompleteVM2 = new AutocompleteViewModel(10);

  const buttons1 = [
    { text: "Clear", onClick: () => viewModel1.clearText() },
    {
      text: 'Set "Hello world!"',
      onClick: () => viewModel1.setText("Hello world!"),
    },
  ];

  const buttons2Left = [
    {
      text: "Check Number",
      onClick: () => {
        if (viewModel2.isNumber) {
          alert(`Number: ${viewModel2.text}`);
        } else {
          alert("Not a number");
        }
      },
    },
  ];

  const buttons2Right = [
    { text: "Show Text", onClick: () => alert(viewModel2.text) },
  ];

  return (
    <div>
      <ButtonControl viewModel={viewModel1} buttonsRight={buttons1} />
      <ButtonControl
        viewModel={viewModel2}
        buttonsLeft={buttons2Left}
        buttonsRight={buttons2Right}
      />
      <h2>Autocomplete with max 3 suggestions</h2>
      <AutocompleteControl viewModel={autoCompleteVM1} />

      <h2>Autocomplete with max 10 suggestions</h2>
      <AutocompleteControl viewModel={autoCompleteVM2} />
    </div>
  );
};

export default App;
