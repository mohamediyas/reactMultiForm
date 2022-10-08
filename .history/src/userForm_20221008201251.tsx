import { FormWrapper } from "./FormWrapper";

export function UserForm() {
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
