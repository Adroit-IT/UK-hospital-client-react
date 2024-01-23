import React from 'react';
import Swal from 'sweetalert2';

interface SweetAlertProps {
  title: string;
  text: string;
  icon: 'success' | 'info' | 'warning' | 'error' | 'question';
  onClick: () => void;
  isConfirm?: boolean;
}

const SweetAlert: React.FC<SweetAlertProps> = ({ title, text, icon, onClick, isConfirm = false }) => {
  const showAlert = async () => {
    if (isConfirm) {
      await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'Delete',
        padding: '2em',
        customClass: 'sweet-alerts',
      }).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
            customClass: 'sweet-alerts',
          }).then(() => onClick());
        }
      });
    } else {
      await Swal.fire({
        icon,
        title,
        text,
        padding: '2em',
        customClass: 'sweet-alerts',
      });
      onClick();
    }
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-center">
        <button type="button" className={`btn btn-${isConfirm ? 'danger' : 'primary'}`} onClick={() => showAlert()}>
          {isConfirm ? 'Confirm' : 'Basic message'}
        </button>
      </div>
    </div>
  );
};

export default SweetAlert;
