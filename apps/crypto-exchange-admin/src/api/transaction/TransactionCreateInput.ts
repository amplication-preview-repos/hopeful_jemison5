import { CryptoWalletWhereUniqueInput } from "../cryptoWallet/CryptoWalletWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  transactionType?: string | null;
  status?: string | null;
  cryptoWallet?: CryptoWalletWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
