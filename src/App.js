import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => (
  <Router>
    {/* <Routes> */}
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
    {/* </Routes> */}
  </Router>
);

export default App;
