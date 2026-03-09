import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Terminal = ({ onAccessGranted }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Julien Portfolio [Version 1.0.0]" },
    {
      type: "system",
      content: "(c) 2026 Julien Adoboe. Tous rapports réservés.",
    },
    { type: "system", content: "" },
    {
      type: "system",
      content:
        'Tapez "help" pour voir les commandes disponibles. ou "portfolio" pour accéder au site complet.',
    },
  ]);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", content: `> ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", content: "Commandes disponibles :" });
        newHistory.push({
          type: "system",
          content: "  help      - Affiche cette aide",
        });
        newHistory.push({
          type: "system",
          content: "  portfolio - Accède au site complet",
        });
        newHistory.push({
          type: "system",
          content: "  about     - Qui suis-je ?",
        });
        newHistory.push({
          type: "system",
          content: "  clear     - Efface le terminal",
        });
        break;
      case "portfolio":
        newHistory.push({
          type: "system",
          content: "Accès autorisé. Chargement du portfolio...",
        });
        setTimeout(() => onAccessGranted(), 1000);
        break;
      case "about":
        newHistory.push({
          type: "system",
          content: "Julien Adoboe : Manager Digital & Développeur.",
        });
        newHistory.push({
          type: "system",
          content:
            "Passionné par la technologie et la gestion de projets innovants. Étudiant en Transformation digitale, je combine expertise technique en développement web et compétences managériales pour créer des solutions digitales qui répondent aux besoins réels des utilisateurs.",
        });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "":
        break;
      default:
        newHistory.push({
          type: "error",
          content: `Commande inconnue : ${cmd}`,
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#00f3ff] font-mono p-4 md:p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-[#161b22] rounded-lg shadow-2xl border border-[#30363d] overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-[#21262d] p-3 flex items-center gap-2 border-b border-[#30363d]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-gray-400 text-sm ml-2 select-none">
            bash — julien@portfolio
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={scrollRef}
          className="p-4 h-[400px] overflow-y-auto custom-scrollbar"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={`mb-1 ${line.type === "error" ? "text-red-400" : line.type === "user" ? "text-white" : ""}`}
            >
              {line.content}
            </div>
          ))}
          <form onSubmit={handleCommand} className="flex mt-2">
            <span className="text-green-400 mr-2">julien@portfolio:~$</span>
            <input
              ref={inputRef}
              autoFocus
              className="bg-transparent border-none outline-none flex-1 text-white"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </motion.div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0d1117;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #30363d;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #484f58;
        }
      `}</style>
    </div>
  );
};

export default Terminal;
