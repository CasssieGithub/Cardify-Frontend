import React, { useState } from "react";

function CardList() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCardClick = () => {
    setIsTransitioning((prev) => !prev);
  };

  return (
    <>
      <ul
        className={`cards-split${isTransitioning ? " transition" : ""}`}
        onClick={handleCardClick}
      >
        {/* Split card list content */}
      </ul>
    </>
  );
}
