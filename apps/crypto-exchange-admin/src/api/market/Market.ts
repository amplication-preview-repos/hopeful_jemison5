import { Order } from "../order/Order";

export type Market = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  baseCurrency: string | null;
  quoteCurrency: string | null;
  orders?: Array<Order>;
};
