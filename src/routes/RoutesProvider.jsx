import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Marketplaces from "../pages/Marketplaces";
import VideoPage from "../pages/VideoPage";

const RoutesProvider = () => {
  Routes
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="marketplace" element={<Marketplaces />} />
        <Route path="VideoPage" element={<VideoPage/>}/>
      </Route>
    </Routes>
  )
}

export default RoutesProvider;