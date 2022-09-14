export const LineItem = ({}) => {
  return (
    <div className="flex">
      <div className="flex grow">
        <div className="bg-black mr-12 w-48 h-48 rounded-project">image</div>

        <div className="flex justify-between grow">
          <div className="flex flex-col">
            <span className="text-paragraph-small font-semibold text-neutral-700">
              The premium pure set
            </span>
            <div className="flex">
              <span className="text-paragraph-xsmall text-neutral-500">
                Ant. 2 ^
              </span>
              <span className="text-paragraph-xsmall text-neutral-500">
                Skin care products
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-paragraph-small font-semibold text-neutral-700 text-right">
              kr 490
            </span>
            <span className="text-paragraph-xsmall text-neutral-500">
              kr 245 per stk.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
