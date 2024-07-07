import { Market as TMarket } from "../api/market/Market";

export const MARKET_TITLE_FIELD = "baseCurrency";

export const MarketTitle = (record: TMarket): string => {
  return record.baseCurrency?.toString() || String(record.id);
};
