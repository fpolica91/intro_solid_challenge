import { v4 as uuidV4 } from "uuid";

class User {
  public name: string;
  public email: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;
  public id: string;
  constructor() {
    this.id = uuidV4();
    this.admin = false;
  }
  public set turnAdmin(admin: boolean) {
    this.admin = admin;
  }
}

export { User };
