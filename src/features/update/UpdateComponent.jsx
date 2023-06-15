import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as updateAction from "./updateSlice";
import { Navigate } from "react-router-dom";

export default function UpdateComponent() {
  const userData = useSelector((state) => state.user.data);
  const isSuccessUpdate = useSelector(
    (state) => state.update.status === "success"
  );
  const isConnected = useSelector((state) => state.user.status === "resolved");
  const [firstNameValue, setFirstNameValue] = useState(
    userData === null ? "" : userData.firstName
  );
  const [lastNameValue, setLastNameValue] = useState(
    userData === null ? "" : userData.lastName
  );
  const dispatch = useDispatch();

  if (isSuccessUpdate) {
    return <Navigate to="/user" replace={true} />;
  }
  if (!isConnected) {
    return <Navigate to="/sign-in" replace={true} />;
  }

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
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(updateAction.update(firstNameValue, lastNameValue));
          }}
        >
          Save
        </button>

        <Link to="/user">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  );
}
