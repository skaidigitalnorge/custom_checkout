export const AddFieldButton = ({ onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className="text-paragraph-xsmall text-neutral-500 hover:text-neutral-600 hover:underline focus:text-neutral-500 focus:underline  flex items-center shrink-0"
      onClick={handleClick}
    >
      {children}{" "}
      <span className="text-neutral-500 ml-4">{plus_circle_icon}</span>
    </button>
  );
};

const plus_circle_icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-plus-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="8" y1="12" x2="16" y2="12"></line>
  </svg>
);
