import { FormWrapper } from "./FormWrapper";

type AccountFormData = {
  email: string;
  password: string;
  updateFields: (fields: any) => void;
};

export function AccountForm({ email, password }: AccountFormData) {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input autoFocus required type={"email"} />
      <label>Password</label>
      <input required type={"password"} />
    </FormWrapper>
  );
}
