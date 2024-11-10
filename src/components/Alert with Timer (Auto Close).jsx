import Swal from "sweetalert2";

const ShowAutoCloseAlert = () => {
    Swal.fire({
      title: 'This will auto-close!',
      text: 'You don’t need to click anything.',
      icon: 'info',
      timer: 3000, // Closes after 3 seconds
      timerProgressBar: true,
    });
  };
  
  
  
  export default ShowAutoCloseAlert;
  