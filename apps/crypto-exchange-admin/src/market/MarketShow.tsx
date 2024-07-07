import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MARKET_TITLE_FIELD } from "./MarketTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MarketShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="baseCurrency" source="baseCurrency" />
        <TextField label="quoteCurrency" source="quoteCurrency" />
        <ReferenceManyField reference="Order" target="marketId" label="Orders">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="orderType" source="orderType" />
            <TextField label="amount" source="amount" />
            <TextField label="price" source="price" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Market"
              source="market.id"
              reference="Market"
            >
              <TextField source={MARKET_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
