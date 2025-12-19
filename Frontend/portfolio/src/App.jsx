import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext";


export default function App() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-zinc-950 text-zinc-100">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </LanguageProvider>
    );
}