import {Route, Routes} from "react-router-dom";

import {Home} from "../pages/Home/index.jsx";
import {New} from "../pages/New";
import {Profile} from "../pages/Profile/index.jsx";
import {Details} from "../pages/Details/index.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  )
}
