import { connect } from "react-redux";
import { RootReducer } from "..";
import { showAlert } from "../alert/actions";

const mapState = ({ console, auth }: RootReducer) => ({
  ...console,
  application: auth.user?.apiApplication,
});

const ConsoleConnector = connect(mapState, { showAlert });
export default ConsoleConnector;
