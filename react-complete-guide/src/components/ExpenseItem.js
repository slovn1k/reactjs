// Here we import the css component
import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        // Here we use className to add CSS classes to the html code
        <div className="expense-item">
            <div>Date</div>
            <div className="expense-item__description">
                <h2>Title</h2>
                <div className="expense-item__price">Amount</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
