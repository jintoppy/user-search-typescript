import "./main.css";
import { UserListComponent } from "./components/user-list";
import { SearchComponent } from "./components/search";
import { AppService } from "./service";
import { AppData } from "./types";

const containerEl = <HTMLDivElement>document.querySelector(".container");

const userListComponent = new UserListComponent();
const appService = new AppService();

let appData: AppData = {
  users: [],
  filteredUsers: [],
  selectedUser: null,
};

const handleSearch = async (searchText: string) => {
  const filteredUsers = appData.users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  appData.filteredUsers = filteredUsers;
  render();
};

const searchComponent = new SearchComponent(handleSearch);

const render = () => {
  searchComponent.render();
  userListComponent.render(appData.filteredUsers);
};

const init = async () => {
  const users = await appService.getUsers();
  appData.users = users;
  appData.filteredUsers = users;
  render();
};

init();
