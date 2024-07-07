import { CryptoWallet } from "../cryptoWallet/CryptoWallet";
import { User } from "../user/User";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  transactionType: string | null;
  status: string | null;
  cryptoWallet?: CryptoWallet | null;
  user?: User | null;
};
