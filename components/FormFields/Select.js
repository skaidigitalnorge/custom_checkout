export const Select = ({ name, labelText, children }) => {
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <select name={name} id={name}>
        {children}
      </select>
    </>
  );
};
