import React, { useState } from "react";
/*
#### Stretch Goal 2 (Tic-Tac-Toe)

Build another component inside this project with a game of Tic Tac Toe. The positions of the 'Xs' and the 'Os' over time need to be maintained in a slice of state, so that the JSX may display the contents of the 3 x 3 grid accurately. Only empty squares may be selected by the human player, and the event handler that deals with these clicks will have to include quite a bit of logic:

  1. Does the latest move by the human player mean **the game is over**? (Game over, then!)
  2. Is the game **immediately winnable by the computer** by making a certain move? (Make that move!)
  3. Can the computer **block the human from winning on their next move** by making certain move? (Prevent defeat!)
*/

export default function Tic_Tac_Toe(props) {
  const initial_board = [
    { id: 1, state: "empty" },
    { id: 2, state: "empty" },
    { id: 3, state: "empty" },
    { id: 4, state: "empty" },
    { id: 5, state: "empty" },
    { id: 6, state: "empty" },
    { id: 7, state: "empty" },
    { id: 8, state: "empty" },
    { id: 9, state: "empty" },
  ];
  const [stateBoard, set_stateBoard] = useState(initial_board);
  const [changedCell, set_changedCell] = useState(null);
  const [stateCircle, set_stateCircle] = useState([]);
  const [stateXray, set_stateXray] = useState([]);
  const [statePlayerTurn, set_statePlayerTurn] = useState(true);

  if (changedCell) {
    const temp_board_state = stateBoard;
    const index = changedCell.id - 1;
    console.log("index = ", index);
    if (statePlayerTurn) {
      temp_board_state[index].state = "Circle";
    } else {
      temp_board_state[index].state = "X-ray";
    }

    //store new sateBoard
    set_stateBoard(temp_board_state);
    //reset changedCell to null
    set_changedCell(null);
    //flip statePlayerTurn to negate current state
    set_statePlayerTurn(!statePlayerTurn);
  }

  return (
    <div className="widget-programmers container">
      <div>Whose Turn - {statePlayerTurn ? "Circle" : "Xray"}</div>
      <div>
        <Button
          input_object={stateBoard[0]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[1]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[2]}
          input_cb_set_changedCell={set_changedCell}
        />
      </div>
      <div>
        <Button
          input_object={stateBoard[3]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[4]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[5]}
          input_cb_set_changedCell={set_changedCell}
        />
      </div>
      <div>
        <Button
          input_object={stateBoard[6]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[7]}
          input_cb_set_changedCell={set_changedCell}
        />
        <Button
          input_object={stateBoard[8]}
          input_cb_set_changedCell={set_changedCell}
        />
      </div>
    </div>
  );
}

function Button(props) {
  const cb_onClick = (event) => {
    if (event.target.innerText === "empty") {
      // console.log("event.target.innerText = ", event.target.innerText);
      // console.log(event.target.id, " clicked");
      props.input_cb_set_changedCell({ id: event.target.id, state: "clicked" });
    }
  };

  return (
    <>
      <button type="button" id={props.input_object.id} onClick={cb_onClick}>
        {props.input_object.state}
      </button>
    </>
  );
}
