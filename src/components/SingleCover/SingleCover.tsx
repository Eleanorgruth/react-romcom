import React from "react";
import '../SavedCovers/SavedCovers.css'

interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
  id: string
}

export const SingleCover = ({ cover, deleteCover }: {cover: coverCombo, deleteCover: (id: string) => void }) => {
  return (
      <div className="mini-cover" onDoubleClick={() => deleteCover(cover.id)}>
        <img className="mini-cover" src={cover.cover} />
        <h2 className="cover-title">{cover.title}</h2>
        <h3 className="tagline">A tale of <span className="tagline-1">{cover.desc1}</span> and <span className="tagline-2">{cover.desc2}</span></h3>
      </div>
  );
};
