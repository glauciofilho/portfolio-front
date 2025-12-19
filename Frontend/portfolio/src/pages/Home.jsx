import { useLanguage } from "../context/LanguageContext";


export default function Home() {
    const { t } = useLanguage();
    return (
        <section className="p-10 text-center">
            <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-4" />
            <h1 className="text-3xl font-bold">{t.homeTitle}</h1>
            <p className="text-zinc-400 max-w-xl mx-auto mt-2">{t.about}</p>
        </section>
    );
}