import React from "react";
import { render } from "react-dom";

import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods from "./components/Moods";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import Programmers from "./components/Programmers";
import Tic_Tac_Toe from "./components/tic_tac_toe";

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
    <Tic_Tac_Toe />
  </>,
  document.querySelector("#root")
);
