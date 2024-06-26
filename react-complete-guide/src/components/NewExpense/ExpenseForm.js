import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [eneteredAmount, setEnteredAmount] = useState("");
    const [eneteredDate, setEnteredDate] = useState("");

    // Here we use object state to not write big code
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     eneteredAmount: "",
    //     eneteredDate: "",
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     // Here we copy current values of object elements
        //     ...userInput,
        //     // Here we rewrite enteredTitle
        //     enteredTitle: event.target.value,
        // });

        // This method is better to use when using previuos state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     eneteredAmount: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, eneteredAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     eneteredDate: event.target.value,
        // });

        // setUserInput((prevState) => {
        //     return { ...prevState, eneteredDate: event.target.value };
        // });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2024-01-01"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
