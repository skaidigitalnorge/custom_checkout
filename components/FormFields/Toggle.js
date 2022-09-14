export const Toggle = ({ label, name, onChange, onBlur, defaultChecked }) => {
  return (
    <label
      htmlFor={name}
      className="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        value={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        className="sr-only peer"
      />
      <div className="w-36 h-20 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-circle peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-circle after:h-16 after:w-16 after:transition-all  peer-checked:bg-primary-600" />

      <span className="ml-12 text-paragraph-small font-medium text-neutral-900">
        {label}
      </span>
    </label>
  );
};
