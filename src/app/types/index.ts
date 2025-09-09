export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

export interface ICourse {
  title: string;
  description: string;
  price: number;
  instructor: string;
}
