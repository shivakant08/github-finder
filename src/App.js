import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Users from "./pages/User.jsx";
import Navbar from "./components/layouts/Navbar.jsx";
import Footer from "./components/layouts/Footer.jsx";
import Alert from "./components/layouts/Alert.jsx";
import { GitHubProvider } from "./context/github/GithubContext.js";
import { AlertProvider } from "./context/github/alert/AlertContext.js";
function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />

              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/user/:login" Component={Users} />
                <Route path="/notfound" Component={NotFound} />
                <Route path="/*" Component={NotFound} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
