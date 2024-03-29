// Here we import the css component
import "./ExpenseItem.css";

// here we use props parameter to use parameters inside the function
function ExpenseItem(props) {
    // here we add some javascript to constants
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        // Here we use className to add CSS classes to the html code
        // Here we use the props parameter to get data sent
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    );
}

// Here we export the component to use it
export default ExpenseItem;
