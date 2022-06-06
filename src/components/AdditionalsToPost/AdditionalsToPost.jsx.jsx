import { Button, Typography } from "@mui/material";

const AdditionalsToPost = ({onChangeComponent}) => {
  return (
    <div className="add__post">
      <div className="add__post-header">
        <Typography variant="h6">Add to your post</Typography>
      </div>
      <div className="add__post-body"></div>
      <div className="add__post-footer">
        <Button onClick={onChangeComponent}>Back</Button>
      </div>
    </div>
  );
};

export default AdditionalsToPost;
