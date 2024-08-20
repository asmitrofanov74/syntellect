import { makeAutoObservable } from "mobx";

class ButtonControlViewModel {
  text: string;

  constructor(initialText: string = "") {
    this.text = initialText;
    makeAutoObservable(this);
  }

  setText(newText: string) {
    this.text = newText;
  }

  clearText() {
    this.text = "";
  }

  get isNumber(): boolean {
    return !isNaN(Number(this.text)) && this.text !== "";
  }
}

export default ButtonControlViewModel;
