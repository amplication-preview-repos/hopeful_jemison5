import { CryptoWallet as TCryptoWallet } from "../api/cryptoWallet/CryptoWallet";

export const CRYPTOWALLET_TITLE_FIELD = "walletAddress";

export const CryptoWalletTitle = (record: TCryptoWallet): string => {
  return record.walletAddress?.toString() || String(record.id);
};
