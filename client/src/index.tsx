import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"
import "./index.css"
import configureStore from "./store/store.config"
import { BrowserRouter } from "react-router-dom"
import NEVADA from "./NEVADA"
import { io } from "socket.io-client"
import Payer from "./Paiement/Pay"

const container = document.getElementById("root")!
const root = createRoot(container)
const store = configureStore()



root.render(
  <BrowserRouter basename="/nevada">
    <Provider store={store}>
      <NEVADA />
    </Provider>
  </BrowserRouter>
)

reportWebVitals()
