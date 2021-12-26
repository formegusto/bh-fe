import React from "react";
import DocumentComponent from "src/components/sharing/DocumentComponent";

function DocumentContainer() {
  const [open, setOpen] = React.useState<boolean>(false);

  const show = React.useCallback(() => {
    setOpen(true);
  }, []);

  const hide = React.useCallback(() => {
    setOpen(false);
  }, []);

  return <DocumentComponent show={show} hide={hide} open={open} />;
}

export default DocumentContainer;
