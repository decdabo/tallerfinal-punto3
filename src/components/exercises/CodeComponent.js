import React, { useState } from "react";

export const CodeComponent = ({ code }) => {
  const [ preState, setPreState ] = useState(false);

  return (
    <>
      <pre className="animate__animated animate__fadeIn" style={{ maxHeight: preState ? "250vh" : "10vh" }}>{code}</pre>
      <div>
        <button onClick={() => setPreState(!preState)}>
          {preState 
            ? (<i className="fa-solid fa-angle-up"></i>) 
            : (<i className="fa-solid fa-angle-down"></i>)
          }
        </button>
      </div>
    </>
  );
};
