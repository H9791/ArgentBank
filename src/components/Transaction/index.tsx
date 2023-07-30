import "./styles.css";

type Props = {
    accountName: string;
    accountNumber: string;
    accountBalanceType: string;
    accountBalance: string;
};

export default function Transaction({
    accountName,
    accountNumber,
    accountBalanceType,
    accountBalance,
}: Props) {
    return (
        <>
            <article className="trans-container">
                <div className="trans">
                    <h3 className="trans-heading">
                        {accountName} (x{accountNumber})
                    </h3>
                    <div className="amount-view-container">
                        <p className="amount">${accountBalance}</p>
                    </div>
                    <p>{accountBalanceType}</p>
                </div>
                <div>
                    <button className="view">View transactions</button>
                </div>
            </article>
        </>
    );
}
