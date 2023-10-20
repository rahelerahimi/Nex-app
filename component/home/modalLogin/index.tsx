import React from "react";
import styles from "./modalLogin.module.css";
import TabLogin from "../../TabLogin";
import { useMyContext } from "../../../app/context/theme";

const ModalLogin = () => {
  const { modalOpen, closeModal } = useMyContext();
  return (
    <>
      {modalOpen && (
        <div className={styles.parentModal}>
          <div className={styles.modalContainer}>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              ✕
            </button>
            <div className="modal-content">
              <TabLogin />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalLogin;
