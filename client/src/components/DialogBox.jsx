import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Circle, CircleRounded, Close, Label } from "@mui/icons-material";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import FlexBetween from "./FlexBetween";
import { ReactComponent as UploadIcon } from "assets/SidebarIcon/Upload.svg";
// {
//   open, onClose, onSubmit;
// }
const DialogBox = ({ handleClose, open }) => {
  const [transcriptionLanguage, setTranscriptionLanguage] = useState("english");
  const [audioFile, setAudioFile] = useState(null);
  const [importLink, setImportLink] = useState("");
  const [speakerIdentification, setSpeakerIdentification] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setFormValues] = useState("");

  const setFieldValue = (field, value) => {
    if (field === "mp3") {
      // get the csv file name and their data and conver that data into array of object with total no of rows
      // open the
      setFormValues(value.name);
      setAudioFile(value);
    }
  };

  const isOnMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  console.log(isOnMobile);
  const handleSubmit = async () => {
    // const formData = {
    //   transcriptionLanguage,
    //   audioFile,
    //   importLink,
    //   speakerIdentification,
    // };

    const formData = new FormData();
    setLoading(true);
    formData.append("language", transcriptionLanguage);
    formData.append("audio", audioFile);
    formData.append("file_name", values);
    formData.append("file_url", importLink);
    formData.append("speaker_identification", speakerIdentification);
    formData.append("username", "sandeep1101");
    try {
      const uploadFile = await fetch(
        "https://transcribifyserver.futuregeek.tech/audio/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((res) => res.json());
      toast.success("File Uploaded Successfully");
    } catch (err) {
      toast.error("Something went wrong");
    }

    console.log(formData, "dela");
    setAudioFile(null);
    setImportLink("");
    setSpeakerIdentification(false);
    setTranscriptionLanguage("english");
    setFormValues("");
    setLoading(false);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      maxWidth={isOnMobile ? "xs" : "md"}
      fullWidth={true}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "34px",
              color: "#00000",
            }}
          >
            Transcribe File
          </Typography>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            <Close />
          </Button>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          padding: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <FormControl fullWidth>
            <label
              style={{
                fontWeight: "500",
                fontSize: "14px",
                marginBottom: "8px",
              }}
              htmlFor="transcription-language"
            >
              Transcription Language
            </label>
            <Select
              value={transcriptionLanguage}
              onChange={(e) => setTranscriptionLanguage(e.target.value)}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="hindi">Hindi</MenuItem>
            </Select>
          </FormControl>

          <Dropzone
            acceptedFiles={[".mp3"]}
            multiple={false}
            onDrop={(acceptedFiles) => {
              console.log(acceptedFiles);
              if (acceptedFiles[0].type.includes("audio")) {
                setFieldValue("mp3", acceptedFiles[0]);
              } else {
                acceptedFiles = [];
                toast.error("Currently it supports only mp3");
              }
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                width="100%"
                padding="10px"
                sx={{
                  "&:hover": { cursor: "pointer" },
                  border: "1px solid #D0D5DD",
                  borderRadius: "8px",
                  padding: "40px, 16px, 40px, 16px",
                }}
              >
                <input {...getInputProps()} />
                {!values ? (
                  <Box
                    sx={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      gap: "50px",
                    }}
                  >
                    {/* <Close /> */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <FlexBetween width="100%">
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",

                            gap: "10px",
                          }}
                        >
                          <UploadIcon />
                          <Typography>
                            <span
                              style={{
                                color: "#0048AD",
                                fontWeight: "600",
                                fontSize: "14px",
                              }}
                            >
                              Click to Upload
                            </span>
                            <span
                              style={{
                                color: "#475367",
                                fontWeight: "400",
                                fontSize: "14px",
                              }}
                            >
                              {" "}
                              or drag and drop
                            </span>
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "400",
                              fontSize: "12px",
                              lineHeight: "18px",
                              textAlign: "center",
                              padding: "0px 100px",
                            }}
                          >
                            The maximum file size is 1GB for audio and 10GB for
                            videos. Supported formats: mp3, mp4, wav, caf, aiff,
                            avi, rmvb, flv, m4a, mov, wmv, wma
                          </Typography>
                        </Box>
                      </FlexBetween>
                    </Box>
                  </Box>
                ) : (
                  <FlexBetween>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        padding: "10px",
                        fontSize: "14px",
                      }}
                    >
                      {values}
                    </Typography>
                  </FlexBetween>
                )}
              </Box>
            )}
          </Dropzone>

          <FormControl>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "21px",
                marginBottom: "8px",
              }}
              htmlFor=""
            >
              Import from Link
            </label>
            <TextField
              placeholder="Pase a Dropbox, Google Drive, or Youtube URL here"
              fullWidth
              value={importLink}
              onChange={(e) => setImportLink(e.target.value)}
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "24px",
            }}
          >
            <input
              type="checkbox"
              style={{
                transform: "scale(1.5)",
              }}
              checked={speakerIdentification}
              onChange={() => setSpeakerIdentification(!speakerIdentification)}
            />
            <InputLabel>Speaker Identification</InputLabel>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          padding: "2rem",
        }}
      >
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#0048AD",
            color: "#ffff",
            textTransform: "none",
            height: "55px",
            fontSize: "16px",
            borderRadius: "6px",
            fontWeight: "600",
            padding: "16px, 24px, 16px, 24px",
            "&:hover": {
              backgroundColor: "#0048AD",
            },
          }}
          onClick={handleSubmit}
        >
          {loading ? (
            <CircularProgress
              sx={{
                color: "black",
              }}
            />
          ) : (
            "Submit"
          )}
          {/* loaing icon */}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
