import React, { Component } from "react";

import JSONEditorReact from "./JSONEditorReact";
import { Flex, Box } from "react-system";
import { blue } from "@material-ui/core/colors";

const modes = ["tree", "form", "view", "code", "text"];
const style = {
  headingDiv: {
    backgroundColor: blue["A400"],
    color: "white",
    margin: 0,
  },
};
class App extends Component {
  state = {
    text: JSON.stringify({ json: "value" }, null, 2),
    mode: "tree",
  };

  render() {
    return (
      <>
        <Flex pl={"25%"} style={style.headingDiv}>
          <Box>
            <h1>Levi's Metadata Driven Ingestion Framework</h1>
          </Box>
        </Flex>
        <Flex p={"50px"}>
          <JSONEditorReact
            text={this.state.text}
            mode={this.state.mode}
            modes={modes}
            indentation={4}
            onChangeText={this.onChangeText}
            onModeChange={this.onModeChange}
          />
        </Flex>
        <Flex width={1}>
          <Box width={1 / 2}>{this.state.text}</Box>
        </Flex>
      </>
    );
  }

  onChangeText = (text) => {
    this.setState({ text });
  };

  onModeChange = (mode) => {
    this.setState({ mode });
  };
}

export default App;
