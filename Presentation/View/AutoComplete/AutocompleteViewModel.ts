import { makeAutoObservable, runInAction } from "mobx";
import { getCountryByName } from "../../../Domain/UseCase/Country/GetCountryByName";

class AutocompleteViewModel {
  suggestions: string[] = [];
  query: string = "";
  selected: string = "";
  maxSuggestions: number;

  constructor(maxSuggestions: number = 5) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  setQuery(query: string) {
    this.query = query;
    this.fetchSuggestions();
  }

  async fetchSuggestions() {
    const result = await getCountryByName(this.query);
    runInAction(() => {
      const uniqueResults = Array.from(
        new Set(result.map((item) => item.name))
      );
      this.suggestions = uniqueResults.slice(0, this.maxSuggestions);
    });
  }

  selectSuggestion(suggestion: string) {
    this.selected = suggestion;
    this.query = suggestion;
    this.suggestions = [];
  }
}

export default AutocompleteViewModel;
