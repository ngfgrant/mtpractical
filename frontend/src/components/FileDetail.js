import React from "react";

const FileDetail = props => {
  const { file } = props.file;
  return (
    <li>
      <a href={props.baseUrl + file}>{props.baseUrl + file}</a>
    </li>
  );
};

export default FileDetail;
