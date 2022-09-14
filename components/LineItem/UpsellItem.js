export const UpsellItem = ({}) => {
  return (
    <div className="flex">
      <div className="flex grow">
        <div className="bg-black mr-12 w-48 h-48 rounded-project">image</div>

        <div className="flex justify-between grow">
          <div className="flex flex-col">
            <span className="text-paragraph-small font-semibold text-neutral-700">
              The premium pure set
            </span>
            <span className="text-paragraph-xsmall text-neutral-500">
              kr 249
            </span>
          </div>

          <button className="text-paragraph-medium text-neutral-700 font-semibold">
            legg til +
          </button>
        </div>
      </div>
    </div>
  );
};
