const React = require('react')

const TodoItem = (props) => (
  <li className='item'>{props.item}</li>
)

TodoItem.propTypes = {
  item: React.PropTypes.string.isRequired
}

module.exports = TodoItem
