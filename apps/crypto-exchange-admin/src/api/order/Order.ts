import { Market } from "../market/Market";
import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderType: string | null;
  amount: number | null;
  price: number | null;
  status: string | null;
  market?: Market | null;
  user?: User | null;
};
