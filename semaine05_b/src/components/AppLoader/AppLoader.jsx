import { ProviderWrapper as OpinionsProviderWrapper } from "../../contexts/OpinionsContext";
import App from "../App/App";

const AppLoader= () => {
  return (
    <OpinionsProviderWrapper >
        <App />
    </OpinionsProviderWrapper >
  )
}

export default AppLoader;