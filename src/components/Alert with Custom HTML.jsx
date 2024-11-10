import Swal from "sweetalert2";

const ShowCustomHtmlAlert = () => {
    Swal.fire({
      title: 'Custom HTML',
      html: '<b>This is bold text</b><br><i>This is italic text</i>',
      icon: 'info',
    });
  };
  
  export default ShowCustomHtmlAlert;
  