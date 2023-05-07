import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          My Alert!!
        </Alert>
      )}
      <Button onClick={() => setShowAlert(true)}>Click Me!</Button>
    </div>
  );
}

export default App;
