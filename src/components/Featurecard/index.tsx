import "./styles.css";

type Props = {
    source: string;
    heading: string;
    paragraph: string;
};

export default function Featurecard({ source, heading, paragraph }: Props) {
    return (
        <article className="f-card">
            <div className="f-card-border">
                <img src={source} />
            </div>
            <h3>{heading}</h3>
            <p>{paragraph} </p>
        </article>
    );
}
