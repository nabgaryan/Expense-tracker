import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { dispatch } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };
    dispatch({ type: "ADD_EXPENSE", payload: expense });
    setCost('');
    setName('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            id="name"
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            id="cost"
            type="text"
            className="form-control"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          ></input>
        </div>
        <div className="d-md-block mt-3">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
