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

import { CRYPTOWALLET_TITLE_FIELD } from "./CryptoWalletTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CryptoWalletShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="walletAddress" source="walletAddress" />
        <TextField label="balance" source="balance" />
        <TextField label="currency" source="currency" />
        <ReferenceManyField
          reference="Transaction"
          target="cryptoWalletId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="amount" source="amount" />
            <TextField label="transactionType" source="transactionType" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="CryptoWallet"
              source="cryptowallet.id"
              reference="CryptoWallet"
            >
              <TextField source={CRYPTOWALLET_TITLE_FIELD} />
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
