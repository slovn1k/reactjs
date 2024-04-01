import ExpenseDate from "./ExpenseDate";
// Here we import the css component
import "./ExpenseItem.css";

// here we use props parameter to use parameters inside the function
function ExpenseItem(props) {
    return (
        // Here we use className to add CSS classes to the html code
        // Here we use the props parameter to get data sent
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

// Here we export the component to use it
export default ExpenseItem;
