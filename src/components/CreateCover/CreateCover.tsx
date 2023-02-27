import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "nanoid";
import './CreateCover.css'
import { coverCombo } from "../../interfaces";

export const CreateCover = ({
  submitCreatedCover,
}: {
  submitCreatedCover: (cover: coverCombo) => void;
}) => {
  const [coverInput, setCoverInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [descriptor1Input, setDescriptor1Input] = useState("");
  const [descriptor2Input, setDescriptor2Input] = useState("");

  return (
    <form>
      <label htmlFor="cover">Cover Img:</label>
      <input
        type="text"
        id="cover"
        value={coverInput}
        onChange={(event) => setCoverInput(event.target.value)}
      ></input>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={titleInput}
        onChange={(event) => setTitleInput(event.target.value)}
      ></input>
      <label htmlFor="descriptor1">Descriptor 1:</label>
      <input
        type="text"
        id="descriptor1"
        value={descriptor1Input}
        onChange={(event) => setDescriptor1Input(event.target.value)}
      ></input>
      <label htmlFor="descriptor2">Descriptor 2:</label>
      <input
        type="text"
        id="descriptor2"
        value={descriptor2Input}
        onChange={(event) => setDescriptor2Input(event.target.value)}
      ></input>
      <NavLink to="/">
        <button
          onClick={(e) =>
            submitCreatedCover({
              cover: coverInput,
              title: titleInput,
              desc1: descriptor1Input,
              desc2: descriptor2Input,
              id: nanoid()
            })
          }
        >
          Submit
        </button>
      </NavLink>
    </form>
  );
};
