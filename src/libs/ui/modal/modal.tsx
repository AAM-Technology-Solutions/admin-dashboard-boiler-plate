import { Modal as MaterialModal, Box, Button, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import React from "react";

type ModalProps = {
  setModalOpen: (value: boolean) => void;
  modalOpen: boolean;
  topSubTitle?: string;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
  top?: number;
};

export const Modal = (props: ModalProps): JSX.Element => {
  const style = {
    position: "absolute" as "absolute",
    top: `${props?.top ? props?.top : "50"}%`,
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: `${props?.width ? props?.width : "25"}%`,
    bgcolor: "background.paper",
    boxShadow: 24,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 1,
  };

  const closeModal = (): void => {
    props?.setModalOpen(false);
  };

  return (
    <MaterialModal
      open={props?.modalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        {props?.modalOpen && (
          <Box sx={style}>
            <Button
              size="small"
              color="error"
              style={{
                top: "1.5rem",
                right: "1.5rem",
                position: "absolute",
              }}
              onClick={closeModal}
              endIcon={<Close />}
            >
              Close
            </Button>
            <div style={{ paddingLeft: "2.5rem" }}>
              <Typography variant="body2">{props.topSubTitle}</Typography>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 500 }}>
                {props.title}
              </Typography>
            </div>
            {props.children}
          </Box>
        )}
      </>
    </MaterialModal>
  );
};