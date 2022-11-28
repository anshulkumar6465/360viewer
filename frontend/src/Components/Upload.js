import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <Container >
      <div >
        <form onSubmit={handleSubmit}>
          <h1>Upload File Here</h1>
          <input type="file" onChange={handleChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    </Container>
  );
};
export default Upload;
