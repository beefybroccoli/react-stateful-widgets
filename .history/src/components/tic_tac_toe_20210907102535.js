import React, { useState, useEffect } from "react";
import styled from "react-styled";
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
  const [stateWinner, set_stateWinner] = useState(null);



  /**
   * check_for_win_with_points function
   * check if one of the win pattern contains within an array
   * .....if so return true
   * .....otherwise return false
   * @param {*} input_array
   * @returns
   */
  const helper_check_for_winner = (input_array) => {
    let result = false;
    const win_patterns = [
      "123",
      "456",
      "789",
      "147",
      "258",
      "369",
      "357",
      "159",
    ];

    input_array.length > 2 &&
      win_patterns.forEach((eachPattern) => {
        // console.log("eachPattern = ", eachPattern);
        if (
          input_array.includes(eachPattern.charAt(0) + "") &&
          input_array.includes(eachPattern.charAt(1) + "") &&
          input_array.includes(eachPattern.charAt(2) + "")
        ) {
          // console.log("line 88, match pattern ", eachPattern);
          // console.log("line 89, input_array = ", input_array);
          result = true;
        } //end if block
      });

    //return false by default
    return result;
  }; //end helper_check_for_winner function
  /**
   * cb_check_for_winner function
   * check if there is winner after every click
   * @param {*} stateCircle
   * @param {*} stateXray
   */

  const cb_onClick_Reset = () =>{
    /*
      const [stateBoard, set_stateBoard] = useState(initial_board);
      const [changedCell, set_changedCell] = useState(null);
      const [stateCircle, set_stateCircle] = useState([]);
      const [stateXray, set_stateXray] = useState([]);
      const [statePlayerTurn, set_statePlayerTurn] = useState(true);
      const [stateWinner, set_stateWinner] = useState(null);
    */
      set_stateBoard(initial_board)

  }
  const cb_check_for_winner = () => {
    //length greater than 2
    if (Array.from(stateCircle).length > 2) {
      const win_boolean = helper_check_for_winner(stateCircle);
      // console.log("line 101 - win_boolean = ", win_boolean);
      win_boolean && set_stateWinner("Circle");
    }
    //length greater than 2
    if (Array.from(stateXray).length > 2) {
      const win_boolean = helper_check_for_winner(stateXray);
      // console.log("line 107 - win_boolean = ", win_boolean);
      win_boolean && set_stateWinner("Xray");
    }
  }; //end cb_check_for_winner function

  useEffect(() => {
    //----------------------------------------------------------------
    //---------when a click happen update the gameboard state
    //----------------------------------------------------------------

    if (changedCell) {
      const temp_board_state = stateBoard;
      const index = changedCell.id - 1;
      // console.log("index = ", index);
      if (statePlayerTurn) {
        temp_board_state[index].state = "Circle";
        const temp_array = stateCircle;
        temp_array.push(changedCell.id);
        set_stateCircle(temp_array);
        // set_stateCircle([...stateCircle, changedCell.id]);
      } else {
        temp_board_state[index].state = "X-ray";
        const temp_array = stateXray;
        temp_array.push(changedCell.id);
        set_stateXray(temp_array);
        // set_stateXray([...stateXray, changedCell.id]);
      }

      //store new sateBoard
      set_stateBoard(temp_board_state);

      //????????????????????????????????????????????????????????????????
      //???????? Why there was a dealy executing cb_check_for_winner ???
      //check for winner                            //??????????????????
      cb_check_for_winner(); //??????????????????
      //????????????????????????????????????????????????????????????????

      //reset changedCell to null
      set_changedCell(null);

      //flip statePlayerTurn to negate current state
      set_statePlayerTurn(!statePlayerTurn);
    } //end if block
  }, [changedCell]);

  const DIV_SHOW_HIDE = styled.div`
    display: ${stateWinner? "block": "none"};
  `;

  //-------------------------------------------------------------------
  //-------------------render the Tic Tac Toe component--------------
  //-------------------------------------------------------------------
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
      <p>{stateWinner ? `The winner is ${stateWinner}` : "no winner yet"}</p>
      <DIV_SHOW_HIDE>
        <button onClick={cb_onClick_Reset}></button>
      </DIV_SHOW_HIDE>
    </div>
  ); //end return statement
} //end Tic_Tac_Toe Component

//----------------------------------------------------------------------------
//--------------------------------Button component----------------------------
//----------------------------------------------------------------------------
function Button(props) {
  const cb_onClick = (event) => {
    if (event.target.innerText === "empty") {
      // console.log("event.target.innerText = ", event.target.innerText);
      // console.log(event.target.id, " clicked");
      props.input_cb_set_changedCell({ id: event.target.id, state: "clicked" });
    }
  }; //end cb_onClick

  return (
    <>
      <button type="button" id={props.input_object.id} onClick={cb_onClick}>
        {props.input_object.state}
      </button>
    </>
  ); //end return block
} //end Button component
