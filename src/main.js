import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Ohai!</h1>
        <p>
          The phrase is an intentionally misspelled “Oh hi”
        and is usually used as a title on cutesy pictures of animals like on lolcats.
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))