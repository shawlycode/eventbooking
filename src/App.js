import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import "./App.css";
import List from "./pages/list/List";
import Event from "./pages/events/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<List />} />
        <Route path="/events/:id" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
