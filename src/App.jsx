import { BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
import AppRoutes from "./routes/routes";
import Logout from './components/Logout';

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
