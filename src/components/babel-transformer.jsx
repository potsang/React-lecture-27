import React from "react";
import * as Babel from "babel-standalone";

export default class BabelTransformer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputJSX: "/* write some awesome JSX! */",
      outputJS: "",
      error: ""
    }
    this.transformJSX = this.transformJSX.bind(this);
  }
  transformJSX(event) {
    console.log(event);
  }
  render() {
    return (
      <div>
        <div className="container">
          <textarea id="input" onChange={this.transformJSX} defaultValue={this.state.inputJSX}></textarea>
          <div id="output">{this.state.outputJS}</div>
        </div>
        <footer>{this.state.error}</footer>
      </div>
    )
  }
}
