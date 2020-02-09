import React from "react";
import axios from "axios";
import UploadForm from "./UploadForm";
import FileList from "./FileList.js";

class UploadArea extends React.Component {
  state = { files: [] };
  BASE_URL = "http://127.0.0.1:8000";

  uploadFile = async file => {
    const formData = new FormData();
    formData.append("file", file);
    let response = await axios.post(this.BASE_URL + "/upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    let new_files = [response.data];
    new_files.push(...this.state.files);
    this.setState({ files: new_files });
    localStorage.setItem("files", JSON.stringify(this.state.files));
  };

  render() {
    return (
      <div className="ui vertically divided grid">
        <div className="two column row">
          <div className="column">
            <div className="ui segment">
              <UploadForm onSubmit={this.uploadFile} />
            </div>
          </div>

          <div className="column">
            <div className="ui segment">
              <FileList files={this.state.files} baseUrl={this.BASE_URL} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadArea;
