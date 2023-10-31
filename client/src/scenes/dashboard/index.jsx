import React from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Select,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as FileIcon } from "assets/SidebarIcon/file.svg";
import { ReactComponent as SaveIcon } from "assets/SidebarIcon/saved.svg";
import { ReactComponent as TextIcon } from "assets/SidebarIcon/text.svg";
import BoxInfo from "components/BoxInfo";
import DataGridCustomToolbar from "components/DataGridCustomToolbarD";
import { ReactComponent as CheckBoxIcon } from "assets/SidebarIcon/Checkbox.svg";

import { DataGrid } from "@mui/x-data-grid";
import { MenuItem } from "react-pro-sidebar";
import { Close } from "@mui/icons-material";
import DialogBox from "components/DialogBox";

const DashBoardStatus = [
  {
    title: "Uploaded Files",
    icon: (
      <FileIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          border: "1px solid #E4E7EC",
          // padding: "10px",
          borderRadius: "20px",
        }}
      />
    ),
    amount: 100,
  },
  {
    title: "Transcribed",
    icon: (
      <TextIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          border: "1px solid #E4E7EC",
          // padding: "10px",
          borderRadius: "20px",
        }}
      />
    ),
    amount: 50,
  },
  {
    title: "Saved",
    icon: (
      <SaveIcon
        style={{
          width: "40px",
          height: "40px",
          padding: "10px",
          border: "1px solid #E4E7EC",
          // padding: "10px",
          borderRadius: "20px",
        }}
      />
    ),
    amount: 20,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isOnDashBoard = useMediaQuery(theme.breakpoints.down("lg"));
  const isOnMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        padding: "24px",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* welcome header */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "28.8px",
            }}
          >
            Welcome Sandeep
          </Typography>
          <Typography
            sx={{ color: "#475367", fontWeight: "400", fontSize: "16px" }}
            variant="body1"
          >
            Upload your audio and Video to convert to text
          </Typography>
        </Box>
        <Button
          sx={{
            width: "163px",
            height: "48px",
            borderRadius: "6px",
            padding: "16px, 24px, 16px, 24px",
            textTransform: "none",
            backgroundColor: "#0048AD",
            color: "#ffff",
            fontWeight: "600",
            fontSize: "16px",
            "&:hover": {
              backgroundColor: "#0048AD",
            },
          }}
          onClick={() => {
            handleClickOpen();
          }}
        >
          Transcribe File
        </Button>
      </Box>

      {/* info boxes compnent */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "14px",
          flexWrap: "wrap",
        }}
      >
        {/* DashBoard Info */}
        {DashBoardStatus.map((item) => {
          return (
            <BoxInfo
              key={item.title}
              title={item.title}
              icon={item.icon}
              amount={item.amount}
            />
          );
        })}
      </Box>
      {/* dialog box */}
      <DialogBox
        handleClose={() => {
          handleClose();
        }}
        open={open}
      />
      {/* table  */}
      <Box
        sx={{
          borderRadius: "12px",
          border: "1px solid #e4e7ec",
          padding: "24px",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          backgroundColor: "#fff",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Recent Files
        </Typography>
        <Divider />
        <DataGrid
          sx={{
            border: "0px",
          }}
          width="inherit"
          getRowId={(row) => row.id}
          rows={data?.data || []}
          columns={isOnMobile ? columnSmall : columns}
          pageSize={12}
          // components={{ Toolbar: DataGridCustomToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
};

export default Dashboard;

const data = {
  _id: "63d0cfb7e23d655481db51ca",
  data: [
    {
      id: "1",
      is_checked: 0,
      name: "Sandeep Kumar",
      type: "Audio",
      duration: 20,
      created_at: "12/12/2021",
      updated_at: "12/12/2021",
      action: "Transcribed",
    },
    {
      id: "2",
      is_checked: 1,
      name: "Sandeep Kumar",
      type: "Audio",
      duration: 20,
      created_at: "12/12/2021",
      updated_at: "12/12/2021",
      action: "Processing",
    },
    {
      id: "3",
      name: "Sandeep Kumar",
      type: "Audio",
      duration: 20,
      is_checked: 1,
      created_at: "12/12/2021",
      updated_at: "12/12/2021",
      action: "Proccessing",
    },
  ],
  created_at: "2023-01-25T06:44:07.820Z",
  indexid: "123",
  length: 1,
};

const columnSmall = [
  {
    headerName: (
      <CheckBoxIcon
        style={{
          width: "15px",
          height: "15px",
        }}
      />
    ),
    field: "is_checked",
    flex: 0.5,
    renderCell: (params) => {
      return (
        <input
          type="checkbox"
          onChange={() => {}}
          checked={params.row.is_checked}
        />
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "duration",
    headerName: "Duration",
    flex: 1,
  },
  {
    field: "created_at",
    headerName: "Date Created",
    flex: 1,
  },
  {
    field: "updated_at",
    headerName: "Last Updated",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
  },
];
const columns = [
  {
    headerName: (
      <CheckBoxIcon
        style={{
          width: "15px",
          height: "15px",
        }}
      />
    ),
    field: "is_checked",
    flex: 0.8,
    renderCell: (params) => {
      return <input type="checkbox" checked={params.row.is_checked} />;
    },
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
  },
  {
    field: "duration",
    headerName: "Duration",
    flex: 1,
  },
  {
    field: "created_at",
    headerName: "Date Created",
    flex: 1,
  },
  {
    field: "updated_at",
    headerName: "Last Updated",
    flex: 1,
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
  },
];
