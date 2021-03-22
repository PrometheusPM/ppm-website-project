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
          <Route path="/">
            <Redirect to={mainsKey().home.path} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;

/*
 * -same texture in footer ✓
 * -pricing and safety, same as faq (mobile) ✓
 * -fix text in pricing ✓
 * -footer like yourkey, social media ✓
 * -swap pricing icon ✓
 * -remove pricing ✓
 * -fix "faq" in menu on mobile ✓
 * -fix listing and creation box in nav on services ✓
 * -swap main logo ✓
 *
 * -add landing page blurbs
 * -add site intro blurb
 *
 * -search engine summary
 * -website link preview ✓
 *
 * -close mobile menu on nav click ✓
 */
