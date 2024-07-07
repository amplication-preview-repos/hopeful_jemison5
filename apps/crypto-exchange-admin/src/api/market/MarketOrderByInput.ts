import { SortOrder } from "../../util/SortOrder";

export type MarketOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  baseCurrency?: SortOrder;
  quoteCurrency?: SortOrder;
};
