import './styles.css'

export default function Transactions(){
    return (<>
        <article className="trans">
            <p>Argent Bank Checking (x8349)</p>
            <div className="amount-view-container">
                <div className="amount">$2082</div>
                <button className="view">View transactions</button>
            </div>
            <p>Available Balance</p>
        </article>
    </>)

}