import Nav from "./component/Nav";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import LandingPage from "./component/LandingPage";

const customTheme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    fontWeightLight: "200",
    fontWeightMedium: "300",
    fontWeightRegular: "400",
    fontWeightBold: "600",
  },
  palette: {
    primary: {
      main: "#474646",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <Nav></Nav>
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
