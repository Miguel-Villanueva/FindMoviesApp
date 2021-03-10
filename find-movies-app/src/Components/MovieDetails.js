import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
} from "@material-ui/core";
import { overviewByMovie } from "../api/constants";
import { useQuery } from "react-query";
import { Grid, Box, CircularProgress } from "@material-ui/core";
import { ReactComponent as Surprised } from "../assets/surprised.svg";
import { transformOverviewData } from "../api/util";

export const MovieDetails = (props) => {
  const { onClose, movieID, open } = props;
  const { isLoading, error, data } = useQuery(`${movieID}Details`, () =>
    overviewByMovie(movieID)
  );

  const handleClose = () => {
    onClose(movieID);
  };

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
  const movieData = transformOverviewData(data);
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <Card>
          <CardMedia
            component="img"
            alt={movieData.title}
            height="150"
            image={movieData.image}
            title={movieData.title}
          />
          <CardContent>
            <Typography variant="h3">{movieData.title}</Typography>
            <Typography variant="h6">Year: {movieData.year} </Typography>
            <Typography variant="h6">Rating: {movieData.rating}</Typography>
            <Typography variant="body2">Plot: {movieData.plot}</Typography>
          </CardContent>
        </Card>
      </Dialog>
    </div>
  );
};
