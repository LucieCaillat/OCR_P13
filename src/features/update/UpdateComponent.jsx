import { useState } from "react";

export default function UpdateComponent() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  return (
    <form>
      <div className="update-input">
        <input
          type="text"
          id="username"
          value={firstNameValue}
          onChange={(e) => setFirstNameValue(e.target.value)}
        />
        <input
          type="text"
          id="username"
          value={lastNameValue}
          onChange={(e) => setLastNameValue(e.target.value)}
        />
      </div>
      <div className="update-button">
        <button>Save</button>
        <button>Cancel</button>
      </div>
    </form>
  );
}
