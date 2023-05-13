import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

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
