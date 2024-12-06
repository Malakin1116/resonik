import { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/auth/operations";
import { FaSignOutAlt } from "react-icons/fa";
import Modal from "react-modal";
import css from "./UserMenu.module.css";

Modal.setAppElement("#root");

export default function UserMenu() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    closeModal();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li className={css.li}>
      <button onClick={openModal} className={css.link}>
        <FaSignOutAlt className={css.icon} />
        <span className={css.text}>Logout</span>
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <h2 className={css.modalTitle}>Confirm Logout</h2>
        <p className={css.modalText}>Are you sure you want to logout?</p>
        <div className={css.modalButtons}>
          <button onClick={handleLogout} className={css.confirmButton}>
            Yes, Logout
          </button>
          <button onClick={closeModal} className={css.cancelButton}>
            Cancel
          </button>
        </div>
      </Modal>
    </li>
  );
}
