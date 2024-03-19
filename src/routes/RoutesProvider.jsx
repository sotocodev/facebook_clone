import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Marketplaces from "../pages/Marketplaces";

const RoutesProvider = () => {
  Routes
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="marketpalce" element={<Marketplaces />} />
      </Route>
    </Routes>
  )
}

export default RoutesProvider;