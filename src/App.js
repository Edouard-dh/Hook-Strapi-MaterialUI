import React from "react";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { getClients, getConsomations } from "./components/Data";
import Details from "./components/Details";

function App() {
  const [clients, setClients] = useState([]);
  const [isDetails, setIsDetails] = useState(false);
  const [clickedClient, setClickedClient] = useState({});
  const [consomation, setConsomations] = useState([]);
  const [months, setMonths] = useState([]);
  const [consomationsForOneClient, setConsomationsForOneClient] = useState([]);

  useEffect(() => {
    getClients().then((response) => {
      setClients(response.data);
      // console.log(clients);
    });

    getConsomations().then((response) => {
      //   setConsomations(response.data);
      // console.log(response.data[0].type);
      // console.log(consomation)
    });
  }, []);

  return (
    <div>
      {!isDetails ? (
        <Home
          setClients={setClients}
          clients={clients}
          setIsDetails={setIsDetails}
          setClickedClient={setClickedClient}
        />
      ) : (
        <Details
          clickedClient={clickedClient}
          setIsDetails={setIsDetails}
          consomation={consomation}
          setConsomations={setConsomations}
          months={months}
          setMonths={setMonths}
          consomationsForOneClient={consomationsForOneClient}
          setConsomationsForOneClient={setConsomationsForOneClient}
         
        />
      )}
    </div>
  );
}
export default App;
