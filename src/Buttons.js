import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, switchPage, isLoading } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={(page === 0 ? true : false) || (isLoading && true)}
        onClick={() => switchPage("prev")}
      >
        prev
      </button>
      <p>
        {page} of {nbPages}
      </p>
      <button
        disabled={(page === nbPages ? true : false) || (isLoading && true)}
        onClick={() => switchPage("next")}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
