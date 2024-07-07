import { SortOrder } from "../../util/SortOrder";

export type CryptoWalletOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  walletAddress?: SortOrder;
  balance?: SortOrder;
  currency?: SortOrder;
};
