import React from "react";
import illustration from "../../../../assets/illustration-thank-you.svg";

interface ThanksViewProps {
  selectedUsersRating: string;
}

const ThanksView = ({ selectedUsersRating }: ThanksViewProps) => {
  return (
    <>
      <img src={illustration} alt="Rating sent illustration" />
      <p className="bg-neutral-dark-blue text-primary-orange rounded-full w-56 p-2 text-center">
        You selected {selectedUsersRating} out of 5
      </p>
      <div>
        <h2 className="text-white text-[1.875rem] text-center">Thank you!</h2>
        <p className="text-paragraph text-neutral-light-gray mt-2 text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
};

export default ThanksView;
