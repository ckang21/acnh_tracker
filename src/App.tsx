import { BrowserRouter, Routes, Route } from "react-router-dom";
import VillagersPage from "./pages/VillagersPage.tsx"
import CrittersPage from "./pages/CrittersPage.tsx"
import HomePage from "./pages/HomePage.tsx"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villagers" element={<VillagersPage />} />
        <Route path="/critters" element={<CrittersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App