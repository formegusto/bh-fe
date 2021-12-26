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
import styled from "styled-components";
import { TextField } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} timeout={500} />;
});

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    min-width: 500px;
  }

  & .MuiDialogContentText-root {
    margin: 0 0 8px;
  }
`;

export type ApplyDialogConfig = {
  hide: () => void;
};

interface Props extends ApplyDialogConfig {}

function ApplyDialog({ hide }: Props) {
  return (
    <StyledDialog
      open
      TransitionComponent={Transition}
      keepMounted
      onClose={() => console.log("닫혀라!")}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>신청서</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          데이터 이용목적을 입력해주세요.
        </DialogContentText>
        <TextField
          autoFocus
          id="name"
          variant="standard"
          label="이용 목적"
          type="text"
          className="primary"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={hide}>
          취소
        </Button>
        <Button variant="outlined">신청</Button>
      </DialogActions>
    </StyledDialog>
  );
}

export default ApplyDialog;
