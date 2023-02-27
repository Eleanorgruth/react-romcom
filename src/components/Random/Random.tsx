import React, { useState, useEffect } from "react";
import { covers, titles, descriptors } from "../../data";
import pic from "../../assets/bluebrocade.jpg";
interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
}

export const Random = ({
  saveCover,
  createdCover,
}: {
  saveCover: (
    title: string,
    cover: string,
    desc1: string,
    desc2: string
  ) => void,
  createdCover: coverCombo | undefined
}) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [descriptor1, setDescriptor1] = useState("");
  const [descriptor2, setDescriptor2] = useState("");

  const randomize = () => {
    let randomTitle = titles[Math.floor(Math.random() * titles.length)];
    let randomCover = covers[Math.floor(Math.random() * covers.length)];
    let randomDescriptor1 =
      descriptors[Math.floor(Math.random() * descriptors.length)];
    let randomDescriptor2 =
      descriptors[Math.floor(Math.random() * descriptors.length)];
    console.log(randomCover);
    setTitle(randomTitle);
    setCover(randomCover);
    setDescriptor1(randomDescriptor1);
    setDescriptor2(randomDescriptor2);
  };

  useEffect(() => {
    if (!createdCover) {
      randomize();
    } else {
      setTitle(createdCover.title);
      setCover(createdCover.cover);
      setDescriptor1(createdCover.desc1);
      setDescriptor2(createdCover.desc2);
    }
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => randomize()}>Randomize</button>
        <button
          onClick={() => saveCover(title, cover, descriptor1, descriptor2)}
        >
          Save Cover
        </button>
      </div>
      <div>
        <img src={pic} />
        <p>{title}</p>
        <p>
          A {descriptor1} of {descriptor2}
        </p>
      </div>
    </div>
  );
};
