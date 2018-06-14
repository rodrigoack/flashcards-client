import React, { Component } from 'react';
import hljs from 'highlightjs';
import './CodeBlock.css';

class CodeBlock extends Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.code);
  }

  render(){
    return(
      <pre className="CodeBlock">
        <code>
          CodeBlock
        </code>
      </pre>
    );
  }
}

export default CodeBlock;
