import Author from "./pages/Author";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login/Login"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Video from "./pages/Video";
import Chude from "./pages/Chude";
import ChudeSort from "./pages/SortChude";
import Detail from "./pages/Detail";
import Register from "./pages/Login/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/author" element={<Author/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/chude" element={<Chude/>}/>
        <Route path="/phanloaiDDC" element={<ChudeSort/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;