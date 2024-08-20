import React from "react";
import { observer } from "mobx-react-lite";
import AutocompleteViewModel from "./AutocompleteViewModel";

interface AutocompleteControlProps {
  viewModel: AutocompleteViewModel;
}

const AutocompleteControl: React.FC<AutocompleteControlProps> = observer(
  ({ viewModel }) => {
    return (
      <div>
        <input
          type="text"
          value={viewModel.query}
          onChange={(e) => viewModel.setQuery(e.target.value)}
        />
        {viewModel.suggestions.length > 0 && (
          <ul>
            {viewModel.suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => viewModel.selectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default AutocompleteControl;
