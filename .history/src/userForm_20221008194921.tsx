export function UserForm() {
  return (
    <>
      <label>First Name</label>
      <input autoFocus required type={"text"} />
      <label>Last Name</label>
      <input autoFocus required type={"text"} />
      <label>Age</label>
      <input min={1} required type={"number"} />
    </>
  );
}
