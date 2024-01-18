import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface NotificationProps {
  title: string;
  position?:
    | "top"
    | "top-start"
    | "top-end"
    | "top-left"
    | "top-right"
    | "center"
    | "center-start"
    | "center-end"
    | "center-left"
    | "center-right"
    | "bottom"
    | "bottom-start"
    | "bottom-end"
    | "bottom-left"
    | "bottom-right";
}

const Notification: React.FC<NotificationProps> = ({
  title,
  position = "top",
}) => {
  MySwal.fire({
    title,
    toast: true,
    position,
    showConfirmButton: false,
    timer: 3000,
    showCloseButton: true,
  });

  return null; // React components must return a single JSX element or null
};

export default Notification;
