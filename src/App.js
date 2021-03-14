import { useContext, useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import mainComponents from "./main";
import { mainsKey } from "./data";
import Context from "./Context";

function App() {
  const context = useContext(Context);
  return (
    <ThemeProvider theme={context.theme}>
      <Router>
        <Header />
        <Switch>
          {Object.values(mainsKey()).map((main, i) => {
            const Component = mainComponents[i];
            return <Route path={main.path}>{<Component {...main} />}</Route>;
          })}
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
