import { useSelector } from "react-redux";
import Account from "../../components/Account";
import { falseData } from "../../components/Account";

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
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {falseData.map((account) => (
        <Account
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
        />
      ))}      
    </main>
  );
}
