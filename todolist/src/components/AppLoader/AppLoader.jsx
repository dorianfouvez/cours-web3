import { ProviderWrapper as TachesProviderWrapper } from "../../contexts/TachesContext";
import App from "../App/App";

const AppLoader= () => {
  return (
    <TachesProviderWrapper >
        <App />
    </TachesProviderWrapper >
  )
}

export default AppLoader;