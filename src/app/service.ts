import { User } from "./types";

export class AppService {
  url = "https://64c0e627fa35860bae9f99a4.mockapi.io/api/users";

  async getUsers(): Promise<User[]> {
    const res = await fetch(this.url);
    return res.json();
  }
}
