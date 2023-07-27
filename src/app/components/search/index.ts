import { IComponent } from "../../types";
import "./search.css";

export class SearchComponent implements IComponent {
  constructor(public onSearch: (searchText: string) => void) {}

  render(selector: string = "#search-container") {
    const htmlStr = `
            <div id="search-container">
                <input id="search-input" />
                <button id="search-btn">Search</button>
            </div>
        `;
    (document.querySelector(selector) as HTMLDivElement).innerHTML = htmlStr;
    this.addEvents();
  }

  addEvents() {
    const searchInput = <HTMLInputElement>(
      document.querySelector("#search-input")
    );

    searchInput.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        this.onSearch(searchInput.value);
      }
    });

    const searchButton = <HTMLButtonElement>(
      document.querySelector("#search-btn")
    );
    searchButton.addEventListener("click", () => {
      this.onSearch(searchInput.value);
    });
  }
}
