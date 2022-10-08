import { FormWrapper } from "./FormWrapper";

type UserFromData = {
  firstName: string;
  lastName: string;
  age: string;
};

export function UserForm({ firstName, lastName, age }: UserFromData) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type={"text"} />
      <label>Last Name</label>
      <input autoFocus required type={"text"} />
      <label>Age</label>
      <input min={1} required type={"number"} />
    </FormWrapper>
  );
}
