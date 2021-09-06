import React, { useState, useEffect } from "react";
import { getClients, postClient } from "./Data";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Home = ({ clients, setIsDetails, setClickedClient, setClients }) => {
  const [client, setClient] = useState({
    lastname: "",
    firstname: "",
    age: 0,
    sexe: "",
    phone: "",
  });

  const handlOnClientSubmit = (e) => {
    e.preventDefault();
    postClient(client)
      .then((res) => {
        setClients([...clients, res.data]);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlOnClientChange = (e) => {
    setClient({
      ...client,
      [e.target.name]: e.target.value,
    });
  };
  const handlOnClientClicked = (client) => {
    // console.log(client);
    setClickedClient(client);
    setIsDetails(true);
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 275,
      marginBottom: 12,
    },
    pos: {
      marginBottom: 12,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const classes = useStyles();

  console.log(handlOnClientChange);

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" className={classes.pos} component="h2">
            Ajout d'un client
          </Typography>
          <form onSubmit={handlOnClientSubmit}>
            <TextField
              name="lastname"
              label="Nom"
              variant="outlined"
              onChange={handlOnClientChange}
              className={classes.pos}
            />

            <TextField
              name="firstname"
              label="Prénom"
              variant="outlined"
              onChange={handlOnClientChange}
              className={classes.pos}
            />

            <TextField
              name="age"
              label="Âge"
              variant="outlined"
              onChange={handlOnClientChange}
              className={classes.pos}
            />

            <TextField
              name="sexe"
              label="Sexe"
              variant="outlined"
              onChange={handlOnClientChange}
              className={classes.pos}
            />


            <TextField
              name="phone"
              label="Téléphone"
              variant="outlined"
              onChange={handlOnClientChange}
              className={classes.pos}
            />

            <Button variant="contained" type="submit">
              Ajout d'un client
            </Button>
          </form>
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nom du client</TableCell>
              <TableCell align="center">Boutton d 'accés au client</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow>
                <TableCell align="center">{client.firstname}</TableCell>
                <TableCell align="center">
                  <Button
                    href="#"
                    variant="contained"
                    color="primary"
                    onClick={(e) => handlOnClientClicked(client)}
                    className={classes.pos}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Home;
