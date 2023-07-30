import "./styles.css";
import Cards from "../../assets/featurecards/featureCards.json";
import Featurecard from "../Featurecard";

export default function Featurecards() {
    return (
        <section className="feature-cards">
            {Cards.map((card, key) => {
                return (
                    <Featurecard
                        key={key}
                        source={card.source}
                        heading={card.heading}
                        paragraph={card.paragraph}
                    />
                );
            })}

            {/*         <article className="card">
            <div className="card-border">
                <img src="src/assets/img/icon-chat.png" />
            </div>
            <h3>You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
        </article>

        <article className="card">
            <div className="card-border">
                <img src="src/assets/img/icon-money.png" />
            </div>
            <h3>More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
        </article>

        <article className="card">
            <div className="card-border">
                <img src="src/assets/img/icon-security.png" />
            </div>
            <h3>Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe.</p>
        </article> */}
        </section>
    );
}
