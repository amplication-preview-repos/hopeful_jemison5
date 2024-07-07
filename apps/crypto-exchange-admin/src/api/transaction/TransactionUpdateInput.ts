import { CryptoWalletWhereUniqueInput } from "../cryptoWallet/CryptoWalletWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  transactionType?: string | null;
  status?: string | null;
  cryptoWallet?: CryptoWalletWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
