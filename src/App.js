import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/Topbar";
import Sidebar from "./scenes/Sidebar";
import Summary from "./components/Summary/Summary";
import UserProfile from "./components/UserProfile";
import TicketingIssues from "./components/Departments/TicketingIssues";
import TrainServices from "./components/Departments/TrainServices";
import StationFacilities from "./components/Departments/StationFacilities";
import Security from "./components/Departments/Security";
import CateringServices from "./components/Departments/CateringServices";
import LuggageAndLostProperty from "./components/Departments/LuggageAndLostProperty";
import MedicalAssistance from "./components/Departments/MedicalAssistance";
import Miscellaneous from "./components/Departments/Miscellaneous";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "./App.css";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/summary" element={<Summary />} />
              <Route path="/departments/ticketing-issues" element={<TicketingIssues />} />
              <Route path="/departments/train-services" element={<TrainServices />} />
              <Route path="/departments/station-facilities" element={<StationFacilities />} />
              <Route path="/departments/security" element={<Security />} />
              <Route path="/departments/catering-services" element={<CateringServices />} />
              <Route path="/departments/luggage-and-lost-property" element={<LuggageAndLostProperty />} />
              <Route path="/departments/medical-assistance" element={<MedicalAssistance />} />
              <Route path="/departments/miscellaneous" element={<Miscellaneous />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
