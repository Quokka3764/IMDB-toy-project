import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "./pages/Main";
import SearchResults from "./pages/SearchResults";
import Diary from "./pages/Diary";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/diary" element={<Diary />} />
      </Route>
    </Routes>
  );
}
