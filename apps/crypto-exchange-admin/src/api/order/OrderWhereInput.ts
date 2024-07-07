import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MarketWhereUniqueInput } from "../market/MarketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderType?: StringNullableFilter;
  amount?: FloatNullableFilter;
  price?: FloatNullableFilter;
  status?: StringNullableFilter;
  market?: MarketWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
