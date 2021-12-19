import { Wrap } from "src/styles/Container";
import FooterComponent from "../common/FooterComponent";
import Banner from "./Banner";
import MainInformation from "./MainInformation";

function MainComponent() {
  return (
    <Wrap>
      <Banner />
      <MainInformation />
      <FooterComponent />
    </Wrap>
  );
}

export default MainComponent;
