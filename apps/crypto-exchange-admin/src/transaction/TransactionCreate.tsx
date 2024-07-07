import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CryptoWalletTitle } from "../cryptoWallet/CryptoWalletTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="transactionType" source="transactionType" />
        <TextInput label="status" source="status" />
        <ReferenceInput
          source="cryptoWallet.id"
          reference="CryptoWallet"
          label="CryptoWallet"
        >
          <SelectInput optionText={CryptoWalletTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
