import Swal from "sweetalert2";

const ShowInputAlert = async () => {
    const { value } = await Swal.fire({
      title: 'Enter your name',
      input: 'text',
      inputLabel: 'Your name',
      inputPlaceholder: 'Type your name here',
    });
  
    if (value) {
      Swal.fire(`Hello, ${value}!`);
    }
  };
  
 
  export default ShowInputAlert;
  