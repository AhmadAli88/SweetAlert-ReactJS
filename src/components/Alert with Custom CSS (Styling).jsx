import Swal from "sweetalert2";

const ShowStyledAlert = () => {
    Swal.fire({
      title: 'Custom Styled Alert',
      text: 'This alert has custom styles!',
      icon: 'success',
      customClass: {
        popup: 'custom-popup',
      },
    });
  };
  
  
  
  export default ShowStyledAlert;
  