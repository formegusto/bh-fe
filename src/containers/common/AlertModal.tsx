import React from "react";
import { TransitionProps } from "@mui/material/transitions";
import {
  Slide,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import styled, { css } from "styled-components";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AlertConnector from "src/store/alert/connector";
import { ConnectedProps } from "react-redux";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

const StyledDialog = styled(Dialog)<{ type: "error" | "info" | null }>`
  .MuiPaper-root {
    min-width: 500px;
  }
  .MuiDialogTitle-root {
    display: flex;
    align-items: center;

    & > svg {
      margin: 0 8px 0 0;
    }
  }
  ${(props) =>
    props.type === "error"
      ? css`
          .MuiPaper-root {
            background: #110a0b;
          }

          .MuiDialogTitle-root {
            color: #f1babb;
          }

          .MuiDialogContentText-root {
            color: #f1babb;
          }
        `
      : css`
          .MuiPaper-root {
            background: #091012;
          }

          .MuiDialogTitle-root {
            color: #aae3fa;
          }

          .MuiDialogContentText-root {
            color: #aae3fa;
          }
        `}
`;

interface Props extends ConnectedProps<typeof AlertConnector> {}

function AlertModal({ open, alert, hideAlert }: Props) {
  return (
    <StyledDialog
      type={open && alert ? alert.type : null}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={hideAlert}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <ErrorOutlineIcon />
        {alert && alert.type.toUpperCase()}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {alert && alert.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          onClick={hideAlert}
          color={alert ? alert.type : undefined}
        >
          확인
        </Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default AlertConnector(AlertModal);