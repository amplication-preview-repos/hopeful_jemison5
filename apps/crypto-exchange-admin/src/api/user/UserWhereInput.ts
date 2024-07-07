import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  role?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  orders?: OrderListRelationFilter;
};
