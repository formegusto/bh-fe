import GlobalStyles from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
