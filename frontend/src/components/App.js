import React from "react";
import UploadArea from "./UploadArea";

class App extends React.Component {
  state = { files: [] };

  render() {
    return (
      <div className="ui container">
        <h1>Share Files</h1>
        <UploadArea onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
