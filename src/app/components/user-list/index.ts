import "./user-list.css";
import { IComponent, User } from "../../types";

export class UserListComponent implements IComponent {
  render(data: User[] = [], selector: string = "#user-list-container") {
    const userListStr = data
      .map(
        (user) => `
      <div class="card">
          <h2>${user.name}</h2>
          <p>Age: ${user.age}</p>
          <figure>
            <img src="${user.avatar}" />
          </figure>
          <button class="btn-view-details">View Details</button>
      </div>
    `
      )
      .join("");

    const htmlStr = `
        <div class="list-container">
          ${userListStr ? userListStr : "No User found"}
        </div>
    `;

    (document.querySelector(selector) as HTMLDivElement).innerHTML = htmlStr;
    this.addEvents();
  }

  addEvents(): void {}
}
