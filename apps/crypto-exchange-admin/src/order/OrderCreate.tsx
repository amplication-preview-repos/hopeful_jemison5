import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MarketTitle } from "../market/MarketTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="orderType" source="orderType" />
        <NumberInput label="amount" source="amount" />
        <NumberInput label="price" source="price" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="market.id" reference="Market" label="Market">
          <SelectInput optionText={MarketTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
