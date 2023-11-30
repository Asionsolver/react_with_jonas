import React from "react";

function ShowCount({ count, title }) {
  console.log(`rendering ${title}`);
  return (
    <div>
      <h2>{title} is increment by {count}</h2>
    </div>
  );
}

export default React.memo(ShowCount);
