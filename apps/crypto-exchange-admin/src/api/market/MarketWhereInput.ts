import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type MarketWhereInput = {
  id?: StringFilter;
  baseCurrency?: StringNullableFilter;
  quoteCurrency?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
