import { FormWrapper } from "./FormWrapper";

type UserFromData = {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateFields: (fields: any) => void;
};

export function AddressForm({ street, city, state, zip }) {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input autoFocus required type={"text"} />
      <label>City</label>
      <input required type={"text"} />
      <label>State</label>
      <input required type={"text"} />
      <label>Zip</label>
      <input required type={"text"} />
    </FormWrapper>
  );
}
