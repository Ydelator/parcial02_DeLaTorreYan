import { Route, Routes } from "react-router-dom"

import Home from "../../components/container/Home"
import NotFound from "../../components/container/NotFound";
import SongAdmin from "../../components/songs/SongAdmin";
import SongCreate from "../../components/songs/SongCreate";
import SongList from "../../components/songs/SongList";

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

        <Route path="/songadm" element={<SongAdmin></SongAdmin>}></Route>
        <Route path="/songcre" element={<SongCreate></SongCreate>}></Route>
        <Route path="/songlist" element={<SongList></SongList>}></Route>
    </Routes>
  )
}

export default Routing