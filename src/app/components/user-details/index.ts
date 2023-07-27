import { IComponent, User } from "../../types";
import "./user-details.css";

export class UserDetailsComponent implements IComponent {
  constructor() {}
  render(user?: User | null, selector: string = "#user-details-container") {
    const htmlStr = user
      ? `
        <h1>Selected User: ${user.name}</h1>
        <figure>
          <img src="${user.avatar}" alt="${user.name}" />
        </figure>
    `
      : `<h1>No User Selected</h1>`;

    (document.querySelector(selector) as HTMLDivElement).innerHTML = htmlStr;
    this.addEvents();
  }
  addEvents(): void {}
}
