import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Header() {
    const { lang, setLang, t } = useLanguage();
    const [open, setOpen] = useState(false);


    return (
        <header className="border-b border-zinc-100 p-4 flex justify-between items-center">
            <span className="font-bold">Portfolio</span>


            <nav className="hidden md:flex gap-6">
                <Link to="/">Home</Link>
                <Link to="/resume">{t.resume}</Link>
                <Link to="/projects">{t.projects}</Link>
                <Link to="/contact">{t.contact}</Link>
            </nav>


            <div className="flex gap-2 items-center">
                <button
                    onClick={() => setLang(lang === "en" ? "pt" : "en")}
                    className="border px-2 py-1 rounded"
                >
                    {lang.toUpperCase()}
                </button>
                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </div>


            {open && (
                <div className="absolute top-16 left-0 w-full bg-zinc-100 flex flex-col p-4 gap-4 md:hidden">
                    <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/resume" onClick={() => setOpen(false)}>{t.resume}</Link>
                    <Link to="/projects" onClick={() => setOpen(false)}>{t.projects}</Link>
                    <Link to="/contact" onClick={() => setOpen(false)}>{t.contact}</Link>
                </div>
            )}
        </header>
    );
}