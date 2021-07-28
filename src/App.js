import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Random Quote Machine</h1>
      </header>
      <section id='quote-box'>
        <p id='text'>Quote goes here</p>
        <p id='author'>Author</p>
        <div className='div'>
          <a id='tweet-quote' target='_top'>
            <i className='fab fa-twitter'></i>
          </a>
          <button id='new-quote'>New quote</button>
        </div>
      </section>
    </div>
  )
}

export default App
