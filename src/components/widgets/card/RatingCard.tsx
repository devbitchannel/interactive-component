import React, { useState } from "react";
import RatingView from "./views/RatingView";
import ThanksView from "./views/ThanksView";

const RatingCard = () => {
  const [rating, setRating] = useState<string>("0");
  const [finishedRating, setFinishedRating] = useState<boolean>(false);

  const handleChangeRating = (selectedRating: string) => {
    setRating(selectedRating);
  };

  const handleFinishRating = () => {
    setFinishedRating(true);
  };

  console.log(rating);

  return (
    <section className="bg-gradient-to-b from-[#212832] to-[#171e28] text-light-grey rounded-2xl py-7 px-9 md:w-[400px] sm:w-96 mx-4 grid gap-4 place-items-center">
      {!finishedRating ? (
        <RatingView
          rating={rating}
          changeRating={handleChangeRating}
          finishRating={handleFinishRating}
        />
      ) : (
        <ThanksView selectedUsersRating={rating} />
      )}
    </section>
  );
};

export default RatingCard;
