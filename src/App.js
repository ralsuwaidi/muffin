import "./App.css";
import React from 'react'
import DetailModal from "./detailModal/DetailModal";

export default function App() {

  const [showModal, setShowModal] = React.useState(false);
  const [meal, setMeal] = React.useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const openDessert = () => {
    setMeal("Dessert")
    setShowModal(true);
  };

  const openBreakfast = () => {
    setMeal("Breakfast")
    setShowModal(true);
  };

  const openLunch = () => {
    setMeal("Lunch")
    setShowModal(true);
  };

  return (
    <div className="App container mx-auto ">
      <img className="App-background" />


      <div className="absolute inset-x-6 top-10">
        <p className="font-bold text-3xl">Muffin Discovery</p>
        <p className="text-slate-400 text-sm">
          Sometimes the world should decide what you should eat
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-1 mx-3 absolute inset-x-0 bottom-5">
        <SelectionCard
          text="Breakfast"
          onClick={openBreakfast}
          image="https://img.icons8.com/cotton/2x/sunny-side-up-eggs--v1.png"
        />
        <SelectionCard
          text="Lunch"
          onClick={openLunch}
          image="https://img.icons8.com/cotton/2x/cheeseburger.png"
        />
        <SelectionCard
          text="Dessert"
          onClick={openDessert}
          image="https://img.icons8.com/cotton/2x/piece-of-lemon-cake.png"
        />
      </div>

      {showModal ? (
        <DetailModal handleClose={handleClose} meal={meal} />
      ) : null}

    </div>
  );
}



function SelectionCard(props) {
  return (
    <div className="mx-2">
      <a href="#" onClick={props.onClick} className="block text-center py-2 max-w-sm bg-transparent rounded-lg border border-gray-100 hover:bg-gray-100">
        <img src={props.image} className="w-12 mx-auto"></img>
        <p className="mb-1 mt-2 text-xs font-bold tracking-tight dark:text-white">
          {props.text}
        </p>
      </a>
    </div>
  )
}