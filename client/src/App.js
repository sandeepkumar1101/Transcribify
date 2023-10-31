import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Dashboard from "scenes/dashboard";
import Layout from "scenes/layout";
import AllFiles from "scenes/allfiles";
import Saved from "scenes/saved";
import Integrations from "scenes/integrations";
import Trash from "scenes/trash";
import Settings from "scenes/settings";
import HelpAndSupport from "scenes/helpandsupport";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/all files" element={<AllFiles />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help and support" element={<HelpAndSupport />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
