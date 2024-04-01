import "./Card.css";

function Card(props) {
    // Here we use react className to pas CSS classes to the custom component
    const classes = "card " + props.className;

    // Here we are using react children props to content that is used inside Card component
    return <div className={classes}>{props.children}</div>;
}

export default Card;
