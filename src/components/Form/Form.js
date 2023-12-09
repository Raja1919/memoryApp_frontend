// Form.js

import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../Redux/Reducers/postReducer";
import "./Form.css";

const Form = () => {
  const initialFormData = {
    title: "",
    message: "",
    creator: "",
    tags: "",
    selectedFile: "",
  };
  const dispatch = useDispatch();

  const [postData, setPostData] = useState(initialFormData);

  const handleFileSelect = (file) => {
    setPostData({ ...postData, selectedFile: file.base64 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch the createPost action to add a new post
    await dispatch(createPost(postData));

    // Clear the form data
    handleClear();
  };

  const handleClear = () => {
    setPostData(initialFormData);
  };

  return (
    <div className="form_wrapper">
      <Paper className="Paper">
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a memory</Typography>

          <TextField
            className="TextField"
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />

          <TextField
            className="TextField"
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />

          <TextField
            className="TextField"
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />

          <TextField
            className="TextField"
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          />

          <div className="FileBase">
            <FileBase type="file" multiple={false} onDone={handleFileSelect} />
          </div>

          <Button
            className="submit_Button"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>

          <Button
            className="clear_Button"
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleClear}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Form;
