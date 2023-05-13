import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

// const App = () => (
//   <Routes>
//     <Route path="/" exact component={Join} />
//     <Route path="/chat" component={Chat} />
//   </Routes>
// );

export default App;
