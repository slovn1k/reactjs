import ExpenseDate from "./ExpenseDate";

// Here we import react hook to call useState
import { useState } from "react";

// Here we import the css component
import "./ExpenseItem.css";
import Card from "../UI/Card";

// here we use props parameter to use parameters inside the function
function ExpenseItem(props) {
    // Here we use react state to set title
    // We register a constant that contains the returning value and the updating function of the state function
    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle("Updated!");
    };

    return (
        // Here we use className to add CSS classes to the html code
        // Here we use the props parameter to get data sent
        // Here we use Card component to wrap some content
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* Arrow function used to fire click event */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

// Here we export the component to use it
export default ExpenseItem;
