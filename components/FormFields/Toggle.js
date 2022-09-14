export const Toggle = ({ children, name }) => {
  return (
    <label
      for={name}
      className="inline-flex relative items-center cursor-pointer"
    >
      <input
        type="checkbox"
        value={name}
        id={name}
        checked
        className="sr-only peer"
      />
      <div className="w-36 h-20 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-circle peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-circle after:h-16 after:w-16 after:transition-all dark:border-neutral-600 peer-checked:bg-primary-600" />

      <span className="ml-12 text-paragraph-small font-medium text-neutral-900 dark:text-neutral-300">
        {children}
      </span>
    </label>
  );
};
