export interface User {
  id?: string;
  name: string;
  email?: string;
  emailVerified?: boolean;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
  phone?: string;
  role: "ADMIN" | "USER";
  banned?: null;
  banReason?: null;
  banExpires?: null;
}
