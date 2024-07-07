import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderType?: SortOrder;
  amount?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  marketId?: SortOrder;
  userId?: SortOrder;
};
