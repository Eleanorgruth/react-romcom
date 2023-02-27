import React from "react";
import { SingleCover } from "../SingleCover/SingleCover";

interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
  id: string
}

export const SavedCovers = ({ savedCovers, deleteCover }: { savedCovers: coverCombo[], deleteCover: (id: string) => void }) => {
  const coverElements = savedCovers.map((cover, index) => {
    console.log('saved', index)
    return <SingleCover cover={cover} deleteCover={deleteCover}/>;
  });

  return <div>{coverElements}</div>;
};
