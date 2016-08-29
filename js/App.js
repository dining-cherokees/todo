const React = require('react')
const ReactDOM = require('react-dom')
const TodoList = require('./TodoList.js')

const App = () => (
  <div className='app-container'>
    <h1>Todo List</h1>
    <TodoList />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
