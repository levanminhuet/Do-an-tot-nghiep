import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes/index";
import { ToastContainer } from "react-toastify";
import System from "./pages/System/System";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}

          <Route path="/system" element={<System />}>
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Route>
        </Routes>
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
