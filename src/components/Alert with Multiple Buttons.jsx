import Swal from "sweetalert2";

const ShowCustomButtons = async () => {
    const result = await Swal.fire({
      title: 'Choose your option',
      text: 'Click one of the buttons below',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Option 1',
      cancelButtonText: 'Option 2',
      footer: '<a href="https://www.example.com">Learn more</a>',
    });
  
    if (result.isConfirmed) {
      Swal.fire('You chose Option 1');
    } else if (result.isDismissed) {
      Swal.fire('You chose Option 2');
    }
  };
  
  
  export default ShowCustomButtons;
  