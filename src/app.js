import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// old syntax
class OldSyntax {
  constructor() {
    this.name = 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);


// New Syntax

class NewSyntax {
  name = 'New';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
