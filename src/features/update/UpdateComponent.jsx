import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as updateAction from "./updateSlice";

export default function UpdateComponent() {
  const userData = useSelector((state) => state.user.data);
  const [firstNameValue, setFirstNameValue] = useState(
    userData === null ? "" : userData.firstName
  );
  const [lastNameValue, setLastNameValue] = useState(
    userData === null ? "" : userData.lastName
  );
  const dispatch = useDispatch();

  return (
    <form>
      <div className="update-input">
        <input
          type="text"
          id="username"
          value={firstNameValue}
          onChange={(e) => setFirstNameValue(e.target.value)}
          placeholder={userData === null ? "" : userData.firstName}
        />
        <input
          type="text"
          id="username"
          value={lastNameValue}
          onChange={(e) => setLastNameValue(e.target.value)}
          placeholder={userData === null ? "" : userData.lastName}
        />
      </div>
      <div className="update-button">
        <Link to="/user">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(firstNameValue, lastNameValue);
              dispatch(updateAction.update(firstNameValue, lastNameValue));
            }}
          >
            Save
          </button>
        </Link>

        <Link to="/user">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
}
