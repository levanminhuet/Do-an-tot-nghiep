import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, profileRoutes } from "./routes/index";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
