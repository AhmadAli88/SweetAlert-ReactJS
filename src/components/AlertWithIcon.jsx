import Swal from "sweetalert2";

const ShowErrorAlert = () => {
    Swal.fire({
      title: 'Oops!',
      text: 'Something went wrong!',
      icon: 'error',
    });
  };
  
  const ShowSuccessAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Your action was successful.',
      icon: 'success',
    });
  };
  

  
  export {
    ShowErrorAlert,
    ShowSuccessAlert

  };
  