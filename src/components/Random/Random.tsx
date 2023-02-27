import React, { useState, useEffect } from "react";
import { covers, titles, descriptors } from "../../data";
import pic from "../../assets/bluebrocade.jpg";
import { nanoid } from "nanoid";
import './Random.css'

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
    desc2: string,
    id: string
  ) => void,
  createdCover: coverCombo | undefined
}) => {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [descriptor1, setDescriptor1] = useState("");
  const [descriptor2, setDescriptor2] = useState("");
  const [id, setId] = useState("")

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
    setId(nanoid())
  };

  useEffect(() => {
    if (!createdCover) {
      randomize();
    } else {
      setTitle(createdCover.title);
      setCover(createdCover.cover);
      setDescriptor1(createdCover.desc1);
      setDescriptor2(createdCover.desc2);
      setId(nanoid())
    }
  }, []);

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button onClick={() => randomize()}>Randomize</button>
        <button
          onClick={() => saveCover(title, cover, descriptor1, descriptor2, id)}
        >
          Save Cover
        </button>
      </div>
      <div className="main-cover">
        {cover && <img className='cover-image' src={cover}/>}
        <h2 className='cover-title'>{title}</h2>
        <h3 className='tagline'>A tale of 
          <span className='tagline-1'> {descriptor1}</span> and <span className='tagline-2'>{descriptor2}</span>
        </h3>
        <img className="price-tag" src="./assets/price.png"/>
        {/* <img className="overlay" src="./assets/overlay.png"/> */}
      </div>
    </div>
  );
};
