import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import { CreateCover } from "./components/CreateCover/CreateCover";
import { SavedCovers } from "./components/SavedCovers/SavedCovers";
import { Random } from "./components/Random/Random";
import { useState } from "react";

interface coverCombo {
  title: string;
  cover: string;
  desc1: string;
  desc2: string;
  id: string
}

function App() {
  const [savedCovers, setSavedCovers] = useState<any[]>([])
  const [createdCover, setCreatedCover] = useState<coverCombo | undefined>(undefined)

  const saveCover = (title: string, cover: string, desc1: string, desc2: string, id: string) => {
    setSavedCovers((prevState: any) => [...prevState, {title: title, cover: cover, desc1: desc1, desc2: desc2, id: id}])
  }

  const submitCreatedCover = (cover: coverCombo) => {
    setCreatedCover(cover)
  }

  const deleteCover = (id: string) => {
    console.log(savedCovers)
    const filteredCovers = savedCovers.filter(cover => {
      console.log('COVER ID', cover.id)
      return cover.id !== id
    })
    console.log(filteredCovers)
    setSavedCovers(filteredCovers)
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Random saveCover={saveCover} createdCover={createdCover}/>}></Route>
        <Route path="/saved-covers" element={<SavedCovers savedCovers={savedCovers} deleteCover={deleteCover}/>}></Route>
        <Route path="/create" element={<CreateCover submitCreatedCover={submitCreatedCover}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
