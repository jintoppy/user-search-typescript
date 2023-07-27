import "./main.css";
import { UserListComponent } from "./components/user-list";
import { SearchComponent } from "./components/search";
import { UserDetailsComponent } from "./components/user-details";
import { AppService } from "./service";
import { AppData, User } from "./types";

const containerEl = <HTMLDivElement>document.querySelector(".container");

const userDetailsComponent = new UserDetailsComponent();
const appService = new AppService();

let appData: AppData = {
  users: [],
  filteredUsers: [],
  selectedUser: null,
};

const handleSearch = (searchText: string) => {
  const filteredUsers = appData.users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  appData.filteredUsers = filteredUsers;
  render();
};

const handleUserDetailClick = (selectedUser: User) => {
  appData.selectedUser = selectedUser;
  render();
};

const abc = "1lkj";

const searchComponent = new SearchComponent(handleSearch);
searchComponent.name = abc;
const userListComponent = new UserListComponent(handleUserDetailClick);

const render = () => {
  searchComponent.render();
  userDetailsComponent.render(appData.selectedUser);
  userListComponent.render(appData.filteredUsers);
};

const init = async () => {
  const users = await appService.getUsers();
  appData.users = users;
  appData.filteredUsers = users;
  render();
};

init();
