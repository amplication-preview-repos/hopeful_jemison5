import { TransactionUpdateManyWithoutCryptoWalletsInput } from "./TransactionUpdateManyWithoutCryptoWalletsInput";

export type CryptoWalletUpdateInput = {
  walletAddress?: string | null;
  balance?: number | null;
  currency?: string | null;
  transactions?: TransactionUpdateManyWithoutCryptoWalletsInput;
};
