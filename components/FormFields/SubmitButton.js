export const SubmitButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="py-12 font-extrabold text-paragraph-large uppercase flex justify-center w-100% text-white rounded-project bg-primary-500"
    >
      {children}
    </button>
  );
};
