import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CryptoWalletWhereUniqueInput } from "../cryptoWallet/CryptoWalletWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  transactionType?: StringNullableFilter;
  status?: StringNullableFilter;
  cryptoWallet?: CryptoWalletWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
