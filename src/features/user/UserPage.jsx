import { useSelector } from "react-redux";
import Account from "../../components/Account";
import { falseData } from "../../components/Account";
import { Link } from "react-router-dom";

export default function UserPage() {
  const userData = useSelector((state) => state.user.data);
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userData === null
            ? ""
            : userData.firstName + " " + userData.lastName}
          !
        </h1>
        <Link to="/update">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {falseData.map((account) => (
        <Account
          key={account.title}
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}
    </main>
  );
}
