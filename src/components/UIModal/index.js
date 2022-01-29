import * as React from "react";
import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import MDBox from "components/MDBox";
import borders from "assets/theme/base/borders";
import MDButton from "components/MDButton";
import { Icon } from "@mui/material";

const { borderRadius } = borders;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: borderRadius.lg,
};

const closeStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

function UIModal(props) {
  const { isOpen, handleClose, keyParam, children } = props;
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby={`modal-${keyParam}-title`}
        aria-describedby={`modal-${keyParam}-description`}
      >
        <MDBox sx={style}>
          <MDButton size="medium" iconOnly onClick={handleClose} sx={closeStyle}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { dark } }) => dark.main,
              }}
            >
              close
            </Icon>
          </MDButton>
          {children}
        </MDBox>
      </Modal>
    </div>
  );
}

UIModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  keyParam: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UIModal;
