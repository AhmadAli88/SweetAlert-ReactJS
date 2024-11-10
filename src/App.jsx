import ShowConfirmAlert from "./components/Alert with Confirmation";
import ShowStyledAlert from "./components/Alert with Custom CSS (Styling)";
import ShowCustomHtmlAlert from "./components/Alert with Custom HTML";
import ShowCustomButtons from "./components/Alert with Multiple Buttons";
import ShowAutoCloseAlert from "./components/Alert with Timer (Auto Close)";
import ShowAlertWithTitle from "./components/Alert with Title and Text";
import { ShowErrorAlert, ShowSuccessAlert } from "./components/AlertWithIcon";
import ShowAlert from "./components/BasicAlert";
import ShowInputAlert from "./components/ShowInputAlert";
import ShowToast from "./components/Toast Notifications";


const App = () => {
  return (
    <div>
      <button onClick={ShowAlert}>Show Alert</button>
      <button onClick={ShowAlertWithTitle}>Show Alert with Title</button>
      <button onClick={ShowErrorAlert}>Show Alert with Error</button>
      <button onClick={ShowSuccessAlert}>Show Alert with Success</button>
      <button onClick={ShowInputAlert}>Show InputAlert </button>
      <button onClick={ShowConfirmAlert}>Show Confirm Alert </button>
      <button onClick={ShowCustomButtons}>Show Cuatom Buttons Alert </button>
      <button onClick={ShowCustomHtmlAlert}>Show Custom HTML  Alert </button>
      <button onClick={ShowToast}>Show Alert</button>
      <button onClick={ShowAutoCloseAlert}>Show Alert</button>
      <button onClick={ShowStyledAlert}>Show Alert</button>
    </div>
  );
};

export default App;
