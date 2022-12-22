import { RadioInput } from "../../form";
import iconstar from "../../../../assets/icon-star.svg";

interface TRatingViewProps {
  rating: string;
  changeRating: (selectedRating: string) => void;
  finishRating: () => void;
}

const RatingView = ({
  rating,
  changeRating,
  finishRating,
}: TRatingViewProps) => {
  return (
    <>
      <span className="w-full">
        <img
          className="bg-neutral-dark-blue p-4 rounded-full"
          src={iconstar}
          alt="Orange Star for Rating"
        />
      </span>
      <div>
        <h2 className="text-white text-[1.875rem]">How did we do?</h2>
        <p className="text-paragraph text-neutral-light-gray">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <form className="flex flex-col gap-10 mt-5  w-full">
        <div className="flex flex-1 justify-between">
          {Array.from(["1", "2", "3", "4", "5"]).map((number, index) => {
            return (
              <RadioInput
                key={index}
                value={number}
                label={number}
                handleCheckRating={changeRating}
              />
            );
          })}
        </div>
        <button
          type="submit"
          className="flex-1 w-full cursor-pointer p-3 bg-primary-orange text-white rounded-full tracking-wider hover:bg-white hover:text-primary-orange"
          onClick={finishRating}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RatingView;
