import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Divider } from "@mui/material";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { useState } from "react";

function App() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [userDetail, setUserDetail] = useState({ username: "", id: "" });
  console.log("in app - userDetails - ", userDetail);
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
          <HeaderComponent
            isLogedin={isLogedin}
            username={userDetail.username}
          />
          <Divider />
          <Outlet
            context={{
              outletContextData: {
                isLogedin,
                setIsLogedin,
                userDetail,
                setUserDetail,
              },
            }}
          />
        </>
      </SnackbarProvider>
    </StyledEngineProvider>
  );
}

export default App;
