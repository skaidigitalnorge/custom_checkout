export const Grid = ({ className, children }) => {
  return (
    <div
      className={`${className} grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-8 gap-y-8 auto-rows-auto `}
    >
      {children}
    </div>
  );
};
