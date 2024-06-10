import Layout from "./components/Layout/Layout";
import MyListing from "./pages/MyListing";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listing" element={<MyListing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NotFound = () => {
  return <div>Not Found</div>;
};

export default App;
