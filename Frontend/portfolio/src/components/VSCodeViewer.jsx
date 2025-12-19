import { useState } from "react";


const files = {
    "README.md": "# Portfolio\nProjeto profissional com visual VS Code.",
    "info.json": '{\n "type": "portfolio",\n "stack": "React"\n}',
    "technologies.txt": "React\nTailwind\nshadcn/ui",
};


export default function VSCodeViewer() {
    const [file, setFile] = useState("README.md");


    return (
        <div className="border border-zinc-800 rounded flex h-72">
            <aside className="w-48 bg-zinc-900 p-2 hidden md:block">
                {Object.keys(files).map(f => (
                    <button key={f} onClick={() => setFile(f)} className="block w-full text-left hover:bg-zinc-800 p-1 rounded">
                        {f}
                    </button>
                ))}
            </aside>
            <main className="flex-1 p-4 font-mono text-sm">
                {files[file].split("\n").map((line, i) => (
                    <div key={i} className="flex">
                        <span className="w-8 text-zinc-600">{i + 1}</span>
                        <span>{line}</span>
                    </div>
                ))}
            </main>
        </div>
    );
}