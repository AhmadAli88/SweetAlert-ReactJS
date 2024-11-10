import Swal from "sweetalert2";

const ShowConfirmAlert = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to do this?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    });
  
    if (result.isConfirmed) {
      Swal.fire('Action confirmed!', '', 'success');
    } else {
      Swal.fire('Action canceled', '', 'info');
    }
  };
  

  export default ShowConfirmAlert;
  