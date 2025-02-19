import Alert from "./components/Alert/Alert";
import { Info, AlertTriangle, XCircle, CheckCircle } from "lucide-react";

const App = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <Alert
        type="Alert-default"
        icon={<Info />}
        title="Default Alert"
        discrption="A generic alert message for general use."
      />
      <Alert
        type="Alert-info"
        icon={<Info />}
        title="Informational Alert"
        discrption="Provides general updates or notifications that don’t require immediate action, such as new features, upcoming maintenance, or system status messages."
      />
      <Alert
        type="Alert-erorr"
        icon={<XCircle />}
        title="Error Alert"
        discrption="Notifies about critical errors that require immediate attention."
      />
      <Alert
        type="Alert-warning"
        icon={<AlertTriangle />}
        title="Warning Alert"
        discrption="Indicates potential issues or actions that should be taken to avoid problems."
      />

      <Alert
        type="Alert-success"
        icon={<CheckCircle />}
        title="Success Alert"
        discrption="Confirms that an action was successfully completed."
      />
    </div>
  );
};

export default App;
