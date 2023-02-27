import React from "react";
interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
  id: string
}

export const SingleCover = ({ cover, deleteCover }: {cover: coverCombo, deleteCover: (id: string) => void }) => {
  return (
      <div>
        <img src={cover.cover} />
        <p>{cover.title}</p>
        <p>
          A {cover.desc1} of {cover.desc2}
        </p>
        <button onClick={() => deleteCover(cover.id)}>Delete</button>
      </div>
  );
};
