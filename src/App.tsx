import { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dados, setDados] = useState(getRandomNumbers());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allDicesHolded = dados.every((value) => value.isHeld === true);
    const selectedNumber = dados[0].value;
    const allSameNumbers = dados.every(
      (value) => value.value === selectedNumber
    );

    if (allDicesHolded && allSameNumbers) {
      setTenzies(true);
    }
  }, [dados]);

  function getNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function rollDice() {
    if (!tenzies) {
      setDados((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : getNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDados(getRandomNumbers());
    }
  }

  function getRandomNumbers() {
    const conjuntoDeDatos = [];
    for (let i = 0; i < 10; i++) {
      conjuntoDeDatos.push(getNewDie());
    }
    return conjuntoDeDatos;
  }

  const numeritos = dados.map((el) => (
    <Item
      key={el.id}
      value={el.value}
      isHeld={el.isHeld}
      holdDice={() => holdDice(el.id)}
    />
  ));

  function holdDice(id: string) {
    setDados((prevNumbers) =>
      prevNumbers.map((dado) => {
        return dado.id === id ? { ...dado, isHeld: !dado.isHeld } : dado;
      })
    );
  }

  return (
    <main className='bg-tenzies w-[360px] h-[379px] flex items-center  justify-center'>
      {tenzies && <Confetti />}
      <div className='bg-tenziesWhite size-[320px] rounded-md text-tenzies flex flex-col  justify-center items-center'>
        <h1 className='text-3xl mt-4 font-medium'>Tenzies</h1>
        <h2 className='  text-pretty  text-sm mx-7 mb-5 '>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h2>
        <div className='grid grid-cols-5 gap-5 mx-2 '>{numeritos}</div>

        <button
          className=' bg-tenziesRoll  font-medium my-6 w-[92px] text-white'
          onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </main>
  );
}

export default App;
