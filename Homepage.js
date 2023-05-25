import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MoviesItem from "./Movies/MoviesItem";
import { Link } from "react-router-dom";
import { getAllmovie } from "../Api-helpers/api-helper";
import Carousel from "react-material-ui-carousel";

const Homepage = () => {
  const [movies, setmovies] = useState();

  useEffect(() => {
    getAllmovie()
      .then((data) => setmovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  //console.log(movies);

  const items = [
    {
      img: "https://pic-bstarstatic.akamaized.net/ugc/c4cac9f8edb81d9089f825ca2973bbdc.jpg@720w_405h_1e_1c_90q",
    },
    {
      img: "https://growingujjain.com/Bimg/k2.jpeg",
    },
    {
      img: "https://assetscdn1.paytm.com/images/cinema/1--Guardians-of-the-Galaxy-Vol.-3-(IMAX)--1035%E2%80%8A%C3%97%E2%80%8A420%20(1)-aad3df60-e7f1-11ed-82e8-cf24b6293ec4.jpg",
    },
  ];

  return (
    <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>
      <Carousel autoPlay={true} interval={3000} animation={"slide"}>
        {items.map((item, index) => (
          <Box
            margin={"auto"}
            width={"70%"}
            height={"40vh"}
            padding={2}
            key={index}
          >
            <img
              src={item.img}
              alt="movie-banner"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        ))}
      </Carousel>
      <Box padding={5} margin={"auto"}>
        <Typography variant="h5" textAlign={"center"}>
          Latest Release
        </Typography>
        <Box
          display="flex"
          margin="auto"
          width="80%"
          justifyContent={"center"}
          flexWrap="wrap"
        >
          {movies &&
            movies
              .slice(0, 4)
              .map((movie, index) => (
                <MoviesItem
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  releaseDate={movie.releaseDate}
                  key={index}
                />
              ))}
        </Box>
        <Box display="flex" padding={5} margin="auto">
          <Button
            LinkComponent={Link}
            to="/movies"
            variant="outlined"
            sx={{ margin: "auto", color: "#2b2d32" }}
          >
            View All Movies
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="auto"
        paddingY={3}
        bgcolor="#2B2D32"
        color="#FFF"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="auto"
          height={50}
          bgcolor="#2B2D32"
          color="#FFF"
        >
          <Typography variant="subtitle1" align="center" sx={{ pr: 2 }}>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners.
          </Typography>
          <Typography variant="subtitle2" align="center">
            &copy; 2023 Showtime Now. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
