import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/home";
import { PostDetails } from "./Pages/postDetails";
import { DefaultLayout } from "./layouts/DefaultLayout";



export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/postdetails/:id" element={<PostDetails/>}/>
            </Route>
        </Routes>
    )
}