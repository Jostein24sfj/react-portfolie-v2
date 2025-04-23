import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AppContent from "./components/AppContent";
import AllProjects from "./components/AllProjects";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<AppContent />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}
