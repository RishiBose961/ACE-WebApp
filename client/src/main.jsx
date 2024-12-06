import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from './pages/HomePage/Home.jsx'
import ProjectPage from "./pages/ProjectPage/Project.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/new" element={<ProjectPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* <Route path="/register" element={<RegisterPage />} /> */}
      {/* <Route path="" element={<PrivateRoute />}>
        <Route index={true} path="/" element={<HomePage />} />
        <Route path="/new" element={<PostPage />} />
      </Route> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
