import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CryptoWalletTitle } from "../cryptoWallet/CryptoWalletTitle";
import { UserTitle } from "../user/UserTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
