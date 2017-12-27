import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    <ol>
      {props.options.length === 0 && <p>Go ahead, add an option</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            option={option}
            handleDeleteOption={props.handleDeleteOption}
          />
      ))
    }
    </ol>
  </div>
);

export default Options;
