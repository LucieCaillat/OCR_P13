import Account from "../../components/Account";
import { falseData } from "../../components/Account";
import UpdateComponent from "./UpdateComponent";

export default function UpdatePage() {
  return (
    <main className="main bg-light">
      <div className="header color-dark">
        <h1>Welcome back</h1>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <UpdateComponent/>
      {falseData.map((account) => (
        <Account
          key={account.title}
          title={account.title}
          amount={account.amount}
          amountDescription={account.amountDescription}
          light={true}
        />
      ))}
    </main>
  );
}
