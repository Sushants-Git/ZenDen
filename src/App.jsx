import "./App.css";
import Pomodoro from "./component/Pomodoro/Pomodoro";
import { useState } from "react";
import ClientStorage from "./component/ClientStorage/ClientStorage";
import ServerStorage from "./component/ServerStorage/ServerStorage";

function App() {
  const [isSelected, setIsSelected] = useState("Pomodoro");
  const [pageRefresh, setPageRefresh] = useState(false);

  function fun() {
    setPageRefresh((prevValue) => !prevValue);
  }
  return (
    <>
      <div className="nav">
        <p
          onClick={() => setIsSelected("Pomodoro")}
          style={
            isSelected === "Pomodoro"
              ? {
                  borderRadius: "29px",
                  background:
                    "linear-gradient(199deg, rgba(0, 0, 0, 0.40) -32.81%, rgba(0, 0, 0, 0.10) 168.41%)",
                  padding: "7px 15px",
                  fontWeight: "bolder",
                }
              : null
          }
        >
          Pomodoro
        </p>
        <p
          onClick={() => setIsSelected("Storage")}
          style={
            isSelected === "Storage"
              ? {
                  borderRadius: "29px",
                  background:
                    "linear-gradient(199deg, rgba(0, 0, 0, 0.40) -32.81%, rgba(0, 0, 0, 0.10) 168.41%)",
                  padding: "7px 15px",
                  fontWeight: "bolder",
                }
              : null
          }
        >
          Storage
        </p>
      </div>
      {isSelected === "Pomodoro" ? (
        <Pomodoro />
      ) : (
        <div className="storage">
          <div className="storage-container">
            <ClientStorage fun={fun} />
            <div className="server-storage">
              <ServerStorage pageRefresh={pageRefresh} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
