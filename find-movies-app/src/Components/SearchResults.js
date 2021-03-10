import React from "react";
import { findQueryMovies } from "../api/constants";
import { useQuery } from "react-query";
import { Typography, Box, CircularProgress } from "@material-ui/core";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { getQueryMovieIDs } from "../api/util";
import { PosterDisplay } from "./PosterDisplay";

export const SearchResults = (props) => {
  const query = props.search;
  const { isLoading, error, data } = useQuery(query, () =>
    findQueryMovies(query)
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
  const queryIDs = getQueryMovieIDs(data);
  return (
    <Box mr={"7%"} ml={"7%"} mt={15}>
      <Typography variant="h6">SEARCH RESULTS</Typography>
      <PosterDisplay movieIDs={queryIDs} />
    </Box>
  );
};
