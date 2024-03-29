import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AuthorDetails from "./AuthorDetails";

export default function MainContent() {

    return (

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/detail/:name" element={<AuthorDetails />} />

        </Routes>

    )
}