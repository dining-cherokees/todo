const React = require('react')
const ReactDOM = require('react-dom')

const App =  () => (
  <div className='app-container'>
    <h1>Hello World</h1>
  </div>
)


ReactDOM.render(<App />, document.getElementById('app'))
