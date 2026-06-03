import TicketContainer from "./components/ticket/TicketContainer"
import PhoneContainer from "./components/Phone/PhoneContainer"
import LaptopContainer from "./components/Laptop/LaptopContainer"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Redux Store
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TicketContainer />
          <PhoneContainer />
          <LaptopContainer />
        </div>
      </div>
    </Provider>
  )
}

export default App
