import React, { PropTypes } from 'react'

const Message = ({actions, id, text, onClick, onDelete}) => {
  return (
    <div>
      <span onClick={onClick}>{text}</span>
      <input type="button" value='削除' onClick={onDelete} />
    </div>
  )
}

export default Message
