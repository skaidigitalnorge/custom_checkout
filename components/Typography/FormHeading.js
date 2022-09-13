export const FormHeading = ({ children, className }) => {
  return (
    <h2
      className={`${className} text-h3-mobile lg:text-h3-desktop font-extrabold text-black`}
    >
      {children}
    </h2>
  );
};
