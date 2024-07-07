import { OrderCreateNestedManyWithoutMarketsInput } from "./OrderCreateNestedManyWithoutMarketsInput";

export type MarketCreateInput = {
  baseCurrency?: string | null;
  quoteCurrency?: string | null;
  orders?: OrderCreateNestedManyWithoutMarketsInput;
};
