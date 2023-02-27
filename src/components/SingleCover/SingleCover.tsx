import React from "react";
interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
}

export const SingleCover = ({ id, cover, deleteCover }: {id: number, cover: coverCombo, deleteCover: (id: number) => void }) => {
  console.log('single id', id)
  return (
      <div>
        <img src={cover.cover} />
        <p>{cover.title}</p>
        <p>
          A {cover.desc1} of {cover.desc2}
        </p>
        <button onClick={() => deleteCover(id)}>Delete</button>
      </div>
  );
};
