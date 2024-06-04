import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import MarketPlacePage from "../pages/MarketPlacePage";
import VideoPage from "../pages/VideoPage";
import Profile from "../pages/Profile"

const RoutesProvider = () => {
  Routes
  return(
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="marketplace" element={<MarketPlacePage />} />
        <Route path="VideoPage" element={<VideoPage />} />
        <Route path="profile" element={<Profile/>} />

      </Route>
    </Routes>
  )
}

export default RoutesProvider;