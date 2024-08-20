import React from "react";
import { observer } from "mobx-react-lite";
import ButtonControlViewModel from "./ButtonControlViewModel";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

interface ButtonControlProps {
  viewModel: ButtonControlViewModel;
  buttonsLeft?: ButtonProps[];
  buttonsRight?: ButtonProps[];
}

const ButtonControl: React.FC<ButtonControlProps> = observer(
  ({ viewModel, buttonsLeft = [], buttonsRight = [] }) => {
    return (
      <div className="buttonGroup">
        {buttonsLeft.map((btn, index) => (
          <button key={index} onClick={btn.onClick}>
            {btn.text}
          </button>
        ))}
        <input
          type="text"
          value={viewModel.text}
          onChange={(e) => viewModel.setText(e.target.value)}
        />
        {buttonsRight.map((btn, index) => (
          <button key={index} onClick={btn.onClick}>
            {btn.text}
          </button>
        ))}
      </div>
    );
  }
);

export default ButtonControl;
