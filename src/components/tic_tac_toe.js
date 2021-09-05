import React, { useState } from "react";
/*
#### Stretch Goal 2 (Tic-Tac-Toe)

Build another component inside this project with a game of Tic Tac Toe. The positions of the 'Xs' and the 'Os' over time need to be maintained in a slice of state, so that the JSX may display the contents of the 3 x 3 grid accurately. Only empty squares may be selected by the human player, and the event handler that deals with these clicks will have to include quite a bit of logic:

  1. Does the latest move by the human player mean **the game is over**? (Game over, then!)
  2. Is the game **immediately winnable by the computer** by making a certain move? (Make that move!)
  3. Can the computer **block the human from winning on their next move** by making certain move? (Prevent defeat!)
*/

export default function Tic_Tac_Toe(props) {
  const [stateCell, set_stateCell] = useState(null);

  return (
    <div className="widget-programmers container">
      <div>
        <Button input_object={{ id: 1, state: "empty" }} />
        <Button input_object={{ id: 2, state: "empty" }} />
        <Button input_object={{ id: 3, state: "empty" }} />
      </div>
      <div>
        <Button input_object={{ id: 4, state: "empty" }} />
        <Button input_object={{ id: 5, state: "empty" }} />
        <Button input_object={{ id: 6, state: "empty" }} />
      </div>
      <div>
        <Button input_object={{ id: 7, state: "empty" }} />
        <Button input_object={{ id: 8, state: "empty" }} />
        <Button input_object={{ id: 9, state: "empty" }} />
      </div>
    </div>
  );
}

function Button(props) {
  const cb_onClick = (event) => {
    console.log(event.target.id, " clicked");
    props.set_stateCell({ id: event.target.id, state: "clicked" });
  };

  return (
    <>
      <button type="button" id={props.input_object.id} onClick={cb_onClick}>
        {props.input_object.state}
      </button>
    </>
  );
}
