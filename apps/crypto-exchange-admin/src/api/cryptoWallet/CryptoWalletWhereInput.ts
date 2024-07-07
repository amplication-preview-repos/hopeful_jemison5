import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CryptoWalletWhereInput = {
  id?: StringFilter;
  walletAddress?: StringNullableFilter;
  balance?: FloatNullableFilter;
  currency?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
};
