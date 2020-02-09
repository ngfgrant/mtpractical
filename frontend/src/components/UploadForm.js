import React from "react";

class UploadForm extends React.Component {
  state = { file: null };

  formSubmit = async event => {
    event.preventDefault();
    await this.props.onSubmit(this.state.file);
  };

  render() {
    return (
      <div className="ui segment">
        <h2>File Upload</h2>
        <form className="ui form" onSubmit={this.formSubmit}>
          <div className="field">
            <label className="">Upload File</label>
            <input
              type="file"
              onChange={e => {
                this.setState({ file: e.target.files[0] });
              }}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default UploadForm;
