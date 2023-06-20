import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as updateAction from "./updateSlice";
import { Navigate } from "react-router-dom";

export default function UpdateComponent() {
  const redirector = useNavigate();
  const userData = useSelector((state) => state.user.data);
  const isConnected = useSelector((state) => state.user.status === "resolved");
  const [firstNameValue, setFirstNameValue] = useState(
    userData === null ? "" : userData.firstName
  );
  const [lastNameValue, setLastNameValue] = useState(
    userData === null ? "" : userData.lastName
  );

  const dispatch = useDispatch();

  // yes !
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
            dispatch(
              updateAction.update(firstNameValue, lastNameValue, redirector)
            );
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
