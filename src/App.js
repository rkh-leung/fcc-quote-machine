import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Random Quote Machine</h1>
            </header>
            <section id='quote-box'>
                <p id='text'>Quote goes here</p>
                <p id='author'>Author</p>
                <button id='new-quote'>New quote</button>
            </section>
        </div>
    );
}

export default App;
