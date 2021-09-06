import Home from "./Home";
import React, { useState, useEffect } from "react";
import { themonths, consomationType } from "../data/index";
import { makeStyles } from "@material-ui/core/styles";
import {
  getConsomations,
  getConsomationsForOneClient,
  getMonths,
} from "./Data";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Details = ({
  clickedClient,
  setIsDetails,
  consomation,
  setConsomations,
  months,
  setMonths,
  consomationsForOneClient,
  setConsomationsForOneClient
  
}) => {

  const [prices, setPrices] = useState({
    eau: 0,
    gaz: 0,
    electricite: 0,
  });

  const useStyles = makeStyles({
    formulaire: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 120,
    },
    pos: {
      marginBottom: 12,
    },
  });

const getConsomationPrice =(price,consomationValue)=>{
  return price * consomationValue;
}

  //getConsomationByMonth permet de recup  le mois, l id du client (via consomationsForOneClien ) ainsi que le type. On utilise le try catch car consomationsForOneClient.filter(c=>c.month.nom === month && c.type === type)[0].conso  renvoie une erreur si tout les champs ne sont pas remplis. Le catch
  const getConsomationByMonth = (month, consomationsForOneClient, type) => {
    try {
      return consomationsForOneClient.filter(
        (c) => c.month.nom === month && c.type === type
      )[0].conso;
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    //   getConsomations().then((response) => {
    //     setConsomations(response.data);
    //   });

    getConsomationsForOneClient(clickedClient.id).then((res) => {
      // console.log(res.data)
      setConsomationsForOneClient(res.data);
    });

  

    // getConsomations().then((response) => {
    //   setConsomations(response.data);
    // });
  }, []);

  const classes = useStyles();


  const handleOnGoBackClicked = (e) => {
    // setConsomationsForOneClient([]) permet de mettre une liste vide dans setConsomationsForOneClient ainsi le state étant vide il n 'y a pas de problème au changement du client.
    //Sans ceci si l'on passe d'un client ou le tableau est full à un client ou le tableau est moins remplis les cas du seconds seront remplis par les donné du premier.
    setConsomationsForOneClient([]);
    setIsDetails(false);
  };

 

  const handlOnPriceChange = (e) => {
    setPrices({
      // les ... permettent de "casser" l'objet price
      ...prices,
      //permet mettre en relation la target neame et la target value
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form className={classes.formulaire}>
        <TextField
          id="standard-read-only-input"
          label="Nom du client :"
          className={classes.pos}
          defaultValue={clickedClient.lastname}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-read-only-input"
          label="Prénom du client :"
          className={classes.pos}
          defaultValue={clickedClient.firstname}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-read-only-input"
          label="Âge du client :"
          className={classes.pos}
          defaultValue={clickedClient.age}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-read-only-input"
          label="Sexe du client :"
          className={classes.pos}
          defaultValue={clickedClient.sexe}
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          id="standard-read-only-input"
          label="Téléphone du client:"
          className={classes.pos}
          defaultValue={clickedClient.phone}
          InputProps={{
            readOnly: true,
          }}
        />

        <Button
          variant="contained"
          className={classes.pos}
          onClick={handleOnGoBackClicked}
        >
          Retour à l'ajout d'un client
        </Button>
      </form>

      <TableContainer component={Paper}>
        {/* <TextField
          component="th"
          scope="row"
          align="center"
          label="eau"
          onChange={handlOnPriceChange}
          id="eau"
          name="eau"
        />
        <TextField
          component="th"
          scope="row"
          align="center"
          label="gaz"
          onChange={handlOnPriceChange}
          id="gaz"
          name="gaz"
        />
        <TextField
          component="th"
          scope="row"
          align="center"
          label="électricité"
          onChange={handlOnPriceChange}
          id="electricite"
          name="electricite"
        /> */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Produit Utilisé</TableCell>
              {themonths.map((themonth) => (
                <TableCell component="th" scope="row" align="center">
                  {themonth}
                </TableCell>
              ))}
              <TableCell align="center">Prix Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consomationType.map((type) => (
              <TableRow>
                <TableCell component="th" scope="row" align="center">
                  {type}
                </TableCell>
                {themonths.map((month) => (
                  <TableCell>
                    <TextField
                      key={clickedClient.id}
                      value={ getConsomationPrice (getConsomationByMonth(
                        month,
                        consomationsForOneClient,
                        type
                      ),prices[type])}
                      onChange={handlOnPriceChange}
                      disabled
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Details;
