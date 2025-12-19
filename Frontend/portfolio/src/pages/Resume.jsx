import { useLanguage } from "../context/LanguageContext";


export default function Resume() {
    const { t } = useLanguage();
    return (
        <section className="p-10 grid md:grid-cols-3 gap-4">
            <div className="border p-4 rounded">{t.experience}</div>
            <div className="border p-4 rounded">{t.education}</div>
            <div className="border p-4 rounded">{t.skills}</div>
        </section>
    );
}