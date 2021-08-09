import React, { useReducer } from "react";

const Calculator = () => {
  let initialState = "";
  let reducer = (state, action) => {
    let pushed = action.type;
    if (pushed === "AC") {
      return (state = "");
    }
    if (pushed === "C") {
      let input = state;
      let edited = input.toString();
      let newInput = edited.slice(0, -1);
      return (state = newInput);
    }
    if (pushed === "=") {
      return (state = eval(state));
    } else {
      if (state === "0") {
        return (state = pushed);
      } else {
        return (state += pushed);
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <h5 className="text-center text-white">Calculator</h5>
      <div
        className="container p-2 bg-light border border-dark shadow rounded"
        style={{ width: "fit-content", height: "auto" }}
      >
        <input
          type="text"
          value={state}
          className="form-control border border-dark"
          readOnly
        />
        <table className="mt-2">
          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "AC" })}
                >
                  AC
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "C" })}
                >
                  C
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "%" })}
                >
                  %
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "*" })}
                >
                  *
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "7" })}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "8" })}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "9" })}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "/" })}
                >
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "4" })}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "5" })}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "6" })}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "-" })}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "1" })}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "2" })}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "3" })}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "+" })}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "0" })}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "." })}
                >
                  .
                </button>
              </td>
              <td colSpan="2">
                <button
                  className="btn btn-dark bg-gradient"
                  onClick={() => dispatch({ type: "=" })}
                >
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calculator;
