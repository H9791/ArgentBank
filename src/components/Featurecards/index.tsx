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
        </section>
    );
}
