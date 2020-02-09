import React from "react";
import FileDetail from "./FileDetail";

const FileList = props => {
  const files = props.files.map(file => {
    return <FileDetail key={file.id} file={file} baseUrl={props.baseUrl} />;
  });
  return (
    <div className="ui segment">
      <h2>Files</h2>
      {files.length === 0 && (
        <div className="ui ignored info message">
          There are no files uploaded.
        </div>
      )}
      <ul>{files}</ul>
    </div>
  );
};

export default FileList;
