import React from 'react';

const Option = (props) => {
  return (
    <li key={props.option}>
      Option: {props.option}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.option)
        }}
      >
        Remove
      </button>
    </li>
  )
}

export default Option;
