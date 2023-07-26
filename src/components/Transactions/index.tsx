import "./styles.css";

export default function Transactions() {
    return (
        <>
            <article className="trans">
                <h3 className="trans-heading">Argent Bank Checking (x8349)</h3>
                <div className="amount-view-container">
                    <p className="amount">$2,082.79</p>
                    <button className="view">View transactions</button>
                </div>
                <p>Available Balance</p>
            </article>
            <article className="trans">
                <h3 className="trans-heading">Argent Bank Savings (x6712)</h3>
                <div className="amount-view-container">
                    <p className="amount">$10,928.42</p>
                    <button className="view">View transactions</button>
                </div>
                <p>Available Balance</p>
            </article>
            <article className="trans">
                <h3 className="trans-heading">
                    Argent Bank Credit Card (x8349)
                </h3>
                <div className="amount-view-container">
                    <p className="amount">$184.30</p>
                    <button className="view">View transactions</button>
                </div>
                <p>Available Balance</p>
            </article>
        </>
    );
}
