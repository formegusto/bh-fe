import { Wrap } from "src/styles/Container";
import FooterComponent from "../common/FooterComponent";
import HeaderComponent from "../common/HeaderComponent";
import Banner from "./Banner";
import MainInformation from "./MainInformation";

function MainComponent() {
  return (
    <Wrap>
      <HeaderComponent />
      <Banner />
      <MainInformation />
      <FooterComponent />
    </Wrap>
  );
}

export default MainComponent;
