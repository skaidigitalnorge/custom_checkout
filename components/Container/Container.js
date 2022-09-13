export const Container = ({ children, c, type }) => {
  switch (type) {
    case "grid":
      return (
        <div className={`${c}`}>
          <div className="align-center mx-auto max-w-[95vw]">{children}</div>
        </div>
      );

    case "slider":
      return (
        <div
          className={`max-w md:max-w lg:max-w xl:max-w container mx-auto w-screen ${c}`}
        >
          <div className="align-center mx-auto max-w-[95vw]">{children}</div>
        </div>
      );

    default:
      return (
        <div className={`${c}`}>
          <div className="align-center mx-auto max-w-[95vw]">{children}</div>
        </div>
      );
  }
};
