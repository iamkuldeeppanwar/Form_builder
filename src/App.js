import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateForm from "./components/CreateForm/CreateForm";
import ViewForm from "./components/ViewForm/ViewForm";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/view" element={<ViewForm />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
