export default function Account({ title, amount, amountDescription }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank {title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">
          {amountDescription} Balance
        </p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export const falseData = [
  {
    title: "Checking (x8349)",
    amount: "2,082.79",
    amountDescription: "Available",
  },
  {
    title: "Savings (x6712)",
    amount: "10,928.42",
    amountDescription: "Available",
  },
  {
    title: "Credit Card (x8349)",
    amount: "184.30",
    amountDescription: "Current",
  },
];
