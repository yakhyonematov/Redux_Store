import TicketContainer from "./components/ticket/TicketContainer"
import PhoneContainer from "./components/Phone/PhoneContainer"
import LaptopContainer from "./components/Laptop/LaptopContainer"
import { Provider } from "react-redux"
import store from "./redux/store"
import { useLang } from "./hooks/language/useLang"

function App() {
  const { t, changeLanguage, currentLang } = useLang();

  return (
    <Provider store={store}>
      <div className="flex justify-center gap-2 p-4 flex-wrap">
        <button 
          onClick={() => changeLanguage("uz")}
          className={`px-4 py-2 rounded ${
            currentLang === "uz" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          UZ
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className={`px-4 py-2 rounded ${
            currentLang === "ru" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          RU
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded ${
            currentLang === "en" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          ENG
        </button>
        <button
          onClick={() => changeLanguage("tr")}
          className={`px-4 py-2 rounded ${
            currentLang === "tr" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          TR
        </button>
        <button
          onClick={() => changeLanguage("arabic")}
          className={`px-4 py-2 rounded ${
            currentLang === "arabic" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Arabic
        </button>
      </div>

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t("redux-store")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TicketContainer />
          <PhoneContainer />
          <LaptopContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App
