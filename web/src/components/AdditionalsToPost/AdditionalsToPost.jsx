import { Button, IconButton, Typography } from "@mui/material";
import CustomIconButton from "../CustomIconButton/CustomIconButton";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import PollIcon from "@mui/icons-material/Poll";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CloseIcon from "@mui/icons-material/Close";

import "./AdditionalsToPost.css";


const AdditionalsToPost = ({ backToNewPost, closeModal }) => {

  const handleCloseModal = () =>{
    console.log("sfsdfsdf")
    closeModal()
  }
  return (
    <div className="addPost">
      <div className="addPost__header">
        <Typography variant="h6">Add to your post</Typography>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="addPost__body">
        <div className="addPost__body-list">
          <CustomIconButton Icon={InsertPhotoIcon} size="small" />
          <p>Add a photo</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton Icon={YouTubeIcon} size="small" />
          <p>Add a video</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton Icon={AssignmentIcon} size="small" />
          <p>Add a document</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton
            Icon={BusinessCenterIcon}
            size="small"
            tooltip="Share that you're hiring"
          />
          <p>Share that you're hiring</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton
            Icon={CelebrationIcon}
            size="small"
            tooltip="Celebrate an occasion"
          />
          <p>Celebrate an occassion</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton
            Icon={PollIcon}
            size="small"
            tooltip="Create a pool"
          />
          <p>Create a poll</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton Icon={AssignmentIndIcon} size="small" />
          <p>Find an expert</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton Icon={MedicalServicesIcon} size="small" />
          <p>Offer help</p>
        </div>
        <div className="addPost__body-list">
          <CustomIconButton Icon={DateRangeIcon} size="small" />
          <p>Create an event</p>
        </div>
      </div>
      <div className="addPost__footer">
        <Button
          className="addPost__footer-btn"
          variant="outlined"
          onClick={backToNewPost}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default AdditionalsToPost;
