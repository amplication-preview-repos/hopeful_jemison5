import { Transaction } from "../transaction/Transaction";

export type CryptoWallet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  walletAddress: string | null;
  balance: number | null;
  currency: string | null;
  transactions?: Array<Transaction>;
};
