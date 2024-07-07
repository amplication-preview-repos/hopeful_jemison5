import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  transactionType?: SortOrder;
  status?: SortOrder;
  cryptoWalletId?: SortOrder;
  userId?: SortOrder;
};
