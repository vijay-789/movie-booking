import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Dialog,
  FormLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
const labelstyle = { mt: 1, mb: 2 };


const AuthForm = ({ onSubmit, isAdmin }) => {

  const navigate = useNavigate();
  const crossHandler = () => {
      navigate("/")
  }

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSignup, setisSignup] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      //[e.target.email]: e.target.email,
      //[e.target.password]: e.target.password,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({inputs,signup:isAdmin?false:isSignup});
  };
  //const [isSignup, setIsSignup] = useState(false);


  return (
    <Dialog PaperProps={{ style: { borderRadius: 20 } }} open={true}>
      <Box sx={{ ml: "auto", padding: 1 }}>
        <IconButton onClick={crossHandler}>
          <CancelIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign={"center"}>
        {isSignup ? "Sign-Up" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          padding={6}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          width={400}
          margin="auto"
          alignContent={"center"}
        >
          {!isAdmin && isSignup && (
            <>
              <FormLabel sx={{ labelstyle }}>Name</FormLabel>
              <TextField
                value={inputs.name}          ///not in video
                onChange={'handleChange'}    ///not in video
                variant="standard"
                margin="normal"
                type={"text"}
                name="name"
              />
            </>
          )}
          <FormLabel sx={{ labelstyle }}>E-mail</FormLabel>
          <TextField
            value={inputs.email}
            onChange={handleChange}
            variant="standard"
            margin="normal"
            type={"E-mail"}
            name="email"
          />
          <FormLabel sx={{ labelstyle }}>Password</FormLabel>
          <TextField
            value={inputs.password}
            onChange={handleChange}
            variant="standard"
            margin="normal"
            type={"password"}
            name="password"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10, bgcolor: "#2b2d42" }}
            type="submit"
            fullWidth
            variant="contained"
          >
            {isSignup ? "Sign-Up" : "Login"}
          </Button>
          { !isAdmin &&
            (
              <Button
            onClick={() => setisSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            fullWidth
          >
            switch to {isSignup ? "Login" : "Sign-Up"}
          </Button>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
