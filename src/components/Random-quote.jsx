import React, { Component } from 'react'

export class RandomQuote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      author: '',
    }

    this.getQuote()
  }

  async getQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const { content, author } = await response.json()
    this.setState({
      content,
      author,
    })
  }

  render() {
    return (
      <section id='quote-box'>
        <p id='text'>{this.state.content}</p>
        <p id='author'>{this.state.author}</p>
        <div className='div'>
          <a
            id={'tweet-quote'}
            target={'_top'}
            href={'twitter.com/intent/tweet'}
          >
            <i className='fab fa-twitter' />
          </a>
          <button id='new-quote' onClick={this.getQuote.bind(this)}>New quote</button>
        </div>
      </section>
    )
  }
}
