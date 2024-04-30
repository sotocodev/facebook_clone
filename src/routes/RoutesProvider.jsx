import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import MarketPlacePage from "../pages/MarketPlacePage";
import VideoPage from "../pages/VideoPage";


const RoutesProvider = () => {
  Routes
  return(
    <Routes>
      <Route path="/">
        <Route index element={<Home />}/>
        <Route path="marketplaces" element={<Marketplaces />} />
        <Route path="VideoPage" element={<VideoPage />} />
      </Route>
    </Routes>
  )
}

export default RoutesProvider;