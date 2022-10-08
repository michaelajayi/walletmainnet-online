import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";
import AccessWc from "./components/AccessWc";
import ImportWallet from "./components/ImportWallet";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path='/access-wc' element={<AccessWc />} />
        <Route path='/access-wc-/import/:id' element={<ImportWallet />} />
      </Routes>
      <Toaster position="top-right"/>
    </BrowserRouter>
  );
}

export default App;
