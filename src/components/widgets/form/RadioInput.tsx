import React, { ChangeEventHandler } from "react";

interface TRadioInputProps {
  label: number | string;
  value: string;
  handleCheckRating: (selectedRating: string) => void;
}

const RadioInput = ({ label, handleCheckRating, value }: TRadioInputProps) => {
  return (
    <label htmlFor={`radio-${label}`}>
      <input
        className="hidden peer"
        type="radio"
        id={`radio-${label}`}
        name="rating-radio-buttons"
        value={`${value}`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleCheckRating(e.target.value);
        }}
      />
      <span className="cursor-pointer hover:bg-primary-orange hover:text-white peer-checked:bg-neutral-medium-gray peer-checked:text-white px-[1.4rem] py-4 id place-content-center text-light-grey bg-neutral-dark-blue rounded-full">
        {label}
      </span>
    </label>
  );
};

export default RadioInput;
