import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import {
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Logo from "./Comicadigital.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();
  const payload = { email, password }
  
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, payload );
    history.push("/admin/dashboard");
  };

  return (
    <Box
      style={{
        display: "flex",
        height: "90vh",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
        boxSizing: "border-box",
        padding: "0px",
      }}
    >
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              textAlign="center"
              fontWeight="600"
            >
              ComicaDigital Admin
            </Typography>
            <Typography margin="20px" textAlign="center">
              <img width="280px" height="80px" src={Logo} alt="img"></img>
            </Typography>
            <form onSubmit={handleClick} >
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Password*"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    
                  >
                    sign in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default Login;
