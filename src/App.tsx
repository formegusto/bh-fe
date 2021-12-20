import GlobalStyles from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import AboutPage from "./pages/AboutPage";
import InformationPage from "./pages/InformationPage";
import DocumentPage from "./pages/SharingPage/DocumentPage";
import ConsolePage from "./pages/SharingPage/ConsolePage";
import SharingPage from "./pages/SharingPage";
import AuthPage from "./pages/AuthPage";
import SignInComponent from "./components/auth/SignInComponent";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HeaderComponent />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="information" element={<InformationPage />} />
          <Route path="sharing" element={<SharingPage />}>
            <Route index element={<DocumentPage />} />
            <Route path="console" element={<ConsolePage />} />
          </Route>
        </Route>
        <Route path="/auth" element={<AuthPage />}>
          <Route path="signin" element={<SignInComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
