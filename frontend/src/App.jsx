import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProjectFormPage from "./pages/ProjectFormPage";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/diagnostico"
          element={<ProjectFormPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;