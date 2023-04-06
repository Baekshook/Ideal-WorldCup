import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Worldcup from "./pages/worldcup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/worldcup" element={<Worldcup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
