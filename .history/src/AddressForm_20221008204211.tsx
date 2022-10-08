import { FormWrapper } from "./FormWrapper";

type UserFromData = {
  street: string;
  city: string;
  state: string;
  zip: string;
  updateFields: (fields: any) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: UserFromData) {
  return (
    <FormWrapper title="Address Details">
      <label>Street</label>
      <input
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        type={"text"}
      />
      <label>City</label>
      <input
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        type={"text"}
      />
      <label>State</label>
      <input required type={"text"} />
      <label>Zip</label>
      <input required type={"text"} />
    </FormWrapper>
  );
}
