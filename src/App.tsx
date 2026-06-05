import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./components/pages/Data";
import Head from "./components/Head";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/folio" element={<Head />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;