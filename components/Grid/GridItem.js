export const GridItem = ({ id, children, size, className }) => {
  switch (size) {
    case "four-eight-four":
      return (
        <div
          key={id}
          className={`${className} col-span-4 md:col-span-8 lg:col-span-4`}
        >
          {children}
        </div>
      );
    case "four-eight-twelve":
      return (
        <div
          key={id}
          className={`${className} col-span-4 md:col-span-8 lg:col-span-12`}
        >
          {children}
        </div>
      );
  }
};
