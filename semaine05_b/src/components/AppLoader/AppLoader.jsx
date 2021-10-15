import { ProviderWrapper as OpinionsProviderWrapper } from "../../contexts/OpinionsContext";
import { ProviderWrapper as ThemeProviderWrapper } from "../../contexts/ThemeContext";
import App from "../App/App";

const AppLoader= () => {
  return (
    <ThemeProviderWrapper >
      <OpinionsProviderWrapper >
          <App />
      </OpinionsProviderWrapper >
    </ThemeProviderWrapper>
  )
}

export default AppLoader;