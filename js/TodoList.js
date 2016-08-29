const React = require('react')
const TodoItem = require('./todoItem.js')

const TodoList = React.createClass({

  getInitialState () {
    return {
      items: ['go to gym', 'eat', 'buy groceries']
    }
  },

  handleSubmit (event) {
    const enterKey = 13

    if (event.which === enterKey) {
      console.log('you hit enter! and your string is ' + event.target.value)
    }
  },

  render () {
    return (
      <div>

        <input type='text' onKeyDown={this.handleSubmit} />

        {this.state.items.map((item, index) => {
          return <TodoItem item={item} key={index} />
        })}
      </div>
    )
  }
})

module.exports = TodoList
