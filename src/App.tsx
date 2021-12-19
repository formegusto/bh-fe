import GlobalStyles from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import AboutPage from "./pages/AboutPage";
import InformationPage from "./pages/InformationPage";
import SharingPage from "./pages/SharingPage";
import DocumentPage from "./pages/SharingPage/DocumentPage";
import ConsolePage from "./pages/SharingPage/ConsolePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/sharing/document" element={<DocumentPage />} />
        <Route path="/sharing/console" element={<ConsolePage />} />
      </Routes>
    </>
  );
}

export default App;
