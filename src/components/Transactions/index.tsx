import Accounts from "../../assets/transactions/transactions.json";
import Transaction from "../Transaction";
export default function Transactions() {
    return Accounts.map((acc, key) => {
        return (
            <>
                <Transaction
                    key={acc.accountName + acc.accountBalanceType}
                    accountName={acc.accountName}
                    accountNumber={acc.accountNumber}
                    accountBalanceType={acc.accountBalanceType}
                    accountBalance={acc.accountBalance}
                />
            </>
        );
    });
}
