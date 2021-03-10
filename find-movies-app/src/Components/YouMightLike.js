import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { findPopularMovies, mockFindPopularMovies } from "../api/constants";
import { getPopularMovieIDs } from "../api/util";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { Typography, Box, CircularProgress } from "@material-ui/core";
import { PosterDisplay } from "./PosterDisplay";

export const YouMightLike = () => {
  const { isLoading, error, data } = useQuery("popularMovies", () =>
    findPopularMovies()
  );

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <Surprised />
      </div>
    );
  }

  const popularIDs = getPopularMovieIDs(data);
  return (
    <Box mr={"7%"} ml={"7%"} mt={15}>
      <Typography variant="h6">YOU MIGHT LIKE</Typography>
      <PosterDisplay movieIDs={popularIDs} />
    </Box>
  );
};
