"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error: ", error);
  return (
    <>
      <span className="loading loading-spinner loading-md"></span>
      <button className="btn btn-link" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
