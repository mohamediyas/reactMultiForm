import { FormWrapper } from "./FormWrapper";

type AccountFormData = {
  email: string;
  password: string;
  updateFields: (fields: any) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormData) {
  return (
    <FormWrapper title="Account Details">
      <label>Email</label>
      <input
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
        type={"email"}
      />
      <label>Password</label>
      <input required type={"password"} />
    </FormWrapper>
  );
}
