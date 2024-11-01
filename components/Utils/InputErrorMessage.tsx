import React from "react";

type props = {
  touched: boolean | undefined;
  error: string | undefined;
};

const InputErrorMessage = ({ touched, error }: props) => {
  if (touched && error) {
    return (
      <p className="flex items-center justify-start gap-x-1 pt-0.5">
        <span className="text-red-500 text-sm">
        </span>
        <small className="text-red-500 font-medium tracking-tight">
          {error}
        </small>
      </p>
    );
  }

  return <></>;
};

export default InputErrorMessage;
