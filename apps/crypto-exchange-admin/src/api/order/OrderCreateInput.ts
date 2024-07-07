import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderType?: string | null;
  amount?: number | null;
  price?: number | null;
  status?: string | null;
  market?: MarketWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
