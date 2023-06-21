import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [editeMode, setEditeMode] = useState(false);
  const [editInput, setEditInput] = useState("");

  const editHandler = () => {
    setEditeMode(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "EDIT_BUDGET",
        payload: editInput,
      });
      setEditeMode(false);
    }

    if (event.key === "Escape") {
      setEditeMode(false);
    }
  };

  return (
    <div className="alert alert-secondary p-3">
      <div className="row">
        {!editeMode && (
          <div className="col-sm ">
            <span>Budget: ${budget}</span>
          </div>
        )}
        {!editeMode && (
          <div className="col-sm d-flex flex-row-reverse">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={editHandler}
            >
              Edit
            </button>
          </div>
        )}
        {editeMode && (
          <div className="col-sm">
            <form>
              <div className="col-sm">
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => {
                    setEditInput(e.target.value);
                  }}
                  onKeyDown={handleKeyDown}
                  onBlur={() => setEditeMode(false)}
                  autoFocus
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Budget;
