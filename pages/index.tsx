import { Provider } from "react-redux";
import AppRoot from "../src/component/app-root/AppRoot";
import { store } from "../utils/redux/store";

export default function Home() {
  return (
    <Provider store={store}>      
        <AppRoot />
    </Provider>
  )
}
