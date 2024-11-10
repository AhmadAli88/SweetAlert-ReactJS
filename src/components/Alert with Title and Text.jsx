import Swal from "sweetalert2";

const ShowAlertWithTitle = () => {
    Swal.fire({
      title: 'Custom Title',
      text: 'Here is some extra text!',
      icon: 'info',
    });
  };
  
 
  export default ShowAlertWithTitle;
  