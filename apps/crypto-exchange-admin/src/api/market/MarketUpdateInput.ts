import { OrderUpdateManyWithoutMarketsInput } from "./OrderUpdateManyWithoutMarketsInput";

export type MarketUpdateInput = {
  baseCurrency?: string | null;
  quoteCurrency?: string | null;
  orders?: OrderUpdateManyWithoutMarketsInput;
};
