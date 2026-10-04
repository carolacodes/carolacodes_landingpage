import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectFormPage from "./pages/ProjectFormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/diagnostico"
          element={<ProjectFormPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;