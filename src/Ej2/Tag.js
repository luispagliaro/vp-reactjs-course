import React from 'react';
import ReactDOM from 'react-dom';

export default class Tag extends React.Component {
  constructor() {
    super();
  }

  render() {
    let tag = this.props.tag,
      el = React.createElement(tag, {className:"tag"}, 'Hello, World!');
    return (
      <div>
        {el}
        <p className="info">&lt;{tag}&gt; tag created</p>
      </div>
    );
  }
}