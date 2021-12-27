import React from "react";
import { ConnectedProps } from "react-redux";
import DocumentComponent from "src/components/sharing/DocumentComponent";
import ApiApplicationConnector from "src/store/apiApplication/connector";

interface Props extends ConnectedProps<typeof ApiApplicationConnector> {}

function DocumentContainer({ apiApplication, setNewApplication }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);

  const show = React.useCallback(() => {
    setOpen(true);
  }, []);

  const hide = React.useCallback(() => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    if (apiApplication) {
      setNewApplication(apiApplication);
    }
  }, [apiApplication, setNewApplication]);

  return <DocumentComponent show={show} hide={hide} open={open} />;
}

export default ApiApplicationConnector(DocumentContainer);
