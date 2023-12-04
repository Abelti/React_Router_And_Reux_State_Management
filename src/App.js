import {
  BrowserRouter as Router,
  Route,
  NavLink,
  useRoutes,
  useParams
} from "react-router-dom";
import AComponent from "./components/A";
import BComponent from "./components/B";
import CComponent from "./components/C";

function NoRoute() {
  return (
    <>
      <h1> 404: Page Not Found</h1>
      <p>Please, fix your URL!</p>
    </>
  );
}
function Home() {
  return (
    <>
      <h1> Welcome</h1>
      <p>This is the home Page</p>
    </>
  );
}

function Routes() {
  // const name = useParams();
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:user", element: <AComponent /> },
    { path: "/B", element: <BComponent /> },
    { path: "/C", element: <CComponent /> },
    { path: "*", element: <NoRoute /> },
  ]);
  return element;
}

function App() {
  const userName = "Abelti";
  return (
    <>
      <Router>
        <NavLink to="/" style={{ padding: "10px" }}>
          Home
        </NavLink>
        <NavLink to={userName} style={{ padding: "10px" }}>
          {userName}
        </NavLink>
        <NavLink to="/B" style={{ padding: "10px" }}>
          B
        </NavLink>
        <NavLink to="/C">C</NavLink>
        <NavLink to="*"></NavLink>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoRoute />} />
          <Route path={`localhost:3000/${userName}`} element={<AComponent />} />
          <Route path="/B" element={<BComponent />} />
          <Route path="/C" element={<CComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
