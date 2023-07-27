import "./user-list.css";
import { IComponent, User } from "../../types";

export class UserListComponent implements IComponent {
  el: HTMLDivElement;
  data: User[];
  constructor(public onDetailClick: (selectedUser: User) => void) {}
  render(data: User[] = [], selector: string = "#user-list-container") {
    this.data = data;
    const userListStr = data
      .map(
        (user) => `
      <div class="card">
          <h2>${user.name}</h2>
          <p>Age: ${user.age}</p>
          <figure>
            <img src="${user.avatar}" />
          </figure>
          <button data-user-id="${user.id}" class="btn-view-details">View Details</button>
      </div>
    `
      )
      .join("");

    const htmlStr = `
        <div class="list-container">
          ${userListStr ? userListStr : "No User found"}
        </div>
    `;

    this.el = document.querySelector(selector) as HTMLDivElement;
    this.el.innerHTML = htmlStr;
    this.addEvents();
  }

  addEvents(): void {
    this.el.addEventListener("click", (e: MouseEvent) => {
      const userId = (e.target as HTMLElement).getAttribute("data-user-id");
      if (userId) {
        //button is clicked
        const currentUser = this.data.find((user) => user.id === userId);
        if (currentUser) {
          this.onDetailClick(currentUser);
        }
      }
    });
  }
}
