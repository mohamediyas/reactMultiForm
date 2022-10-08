import { FormWrapper } from "./FormWrapper";

type UserFromData = {
  firstName: string;
  lastName: string;
  age: string;
  updateFields: (fields: any) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFromData) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        autoFocus
        required
        type={"text"}
      />
      <label>Last Name</label>
      <input value={lastName} autoFocus required type={"text"} />
      <label>Age</label>
      <input min={1} required value={age} type={"number"} />
    </FormWrapper>
  );
}
