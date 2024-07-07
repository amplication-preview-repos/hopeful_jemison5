import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";
import { Order } from "../order/Order";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  role: string | null;
  transactions?: Array<Transaction>;
  orders?: Array<Order>;
};
