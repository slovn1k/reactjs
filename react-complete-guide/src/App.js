import logo from "./logo.svg";
import "./App.css";
// Here we import the component to use it in this route component
import Expenses from "./components/Expenses/Expenses";

function App() {
    // here we create some objects with data
    const expenses = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 345.67,
            date: new Date(2024, 2, 30),
        },
        {
            id: "e2",
            title: "Car Insurance 2",
            amount: 380.67,
            date: new Date(2024, 2, 30),
        },
        {
            id: "e3",
            title: "Car Insurance 3",
            amount: 350.67,
            date: new Date(2024, 2, 30),
        },
        {
            id: "e4",
            title: "Car Insurance 4",
            amount: 360.67,
            date: new Date(2024, 2, 30),
        },
    ];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <Expenses items={expenses} />
            </header>
        </div>
    );
}

export default App;
