import { CryptoWalletWhereInput } from "./CryptoWalletWhereInput";
import { CryptoWalletOrderByInput } from "./CryptoWalletOrderByInput";

export type CryptoWalletFindManyArgs = {
  where?: CryptoWalletWhereInput;
  orderBy?: Array<CryptoWalletOrderByInput>;
  skip?: number;
  take?: number;
};
