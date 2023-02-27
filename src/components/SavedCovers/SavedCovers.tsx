import React from "react";
import { SingleCover } from "../SingleCover/SingleCover";
import './SavedCovers'
import { coverCombo } from "../../interfaces";

export const SavedCovers = ({ savedCovers, deleteCover }: { savedCovers: coverCombo[], deleteCover: (id: string) => void }) => {
  const coverElements = savedCovers.map((cover, index) => {
    return <SingleCover cover={cover} deleteCover={deleteCover}/>;
  });

  return <div className="saved-covers-section">{coverElements}</div>;
};
