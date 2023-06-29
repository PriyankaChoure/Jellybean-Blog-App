import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Divider } from "@mui/material";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { useState } from "react";

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [username, setUserName] = useState("");
  return (
    <StyledEngineProvider injectFirst>
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        preventDuplicate
      >
        <>
          <HeaderComponent />
          <Divider />
          <Outlet
            context={{
              outletContextData: {
                isLogedin,
                setIsLogedin,
                username,
                setUserName,
              },
            }}
          />
        </>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
}

export default App;
