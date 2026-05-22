import { useLang } from "./LanguageContext";
import { FaGlobe } from "react-icons/fa";

const langs = [
  { code: "bn", label: "বাংলা", icon: "🇧🇩", text: "বাং" },
  { code: "en", label: "English", icon: <FaGlobe className="text-gray-500 text-base" />, text: "EN" },
];

const LangSwitcher = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      {langs.map(({ code, label, icon, text }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          title={label}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
            lang === code ? "bg-white shadow text-[#0B3B75] font-semibold" : "text-gray-500 hover:text-gray-700"
          }`}
        >
          <span className="flex items-center">{icon}</span>
          <span className="hidden sm:inline">{text}</span>
        </button>
      ))}
    </div>
  );
};

export default LangSwitcher;
