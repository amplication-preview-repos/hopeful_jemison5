import { TransactionCreateNestedManyWithoutCryptoWalletsInput } from "./TransactionCreateNestedManyWithoutCryptoWalletsInput";

export type CryptoWalletCreateInput = {
  walletAddress?: string | null;
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCryptoWalletsInput;
};
