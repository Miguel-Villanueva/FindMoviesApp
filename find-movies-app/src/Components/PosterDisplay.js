import React from "react";
import { useQuery } from "react-query";
import { metaDataByMovie } from "../api/constants";
import { ReactComponent as Surprised } from "../assets/surprised.svg";

import {
  Typography,
  Paper,
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { transformMetaData } from "../api/util";

const useStyles = makeStyles((theme) => ({
  movieGridHolder: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#FAFAFA",
  },
}));
export const PosterDisplay = (props) => {
  const classes = useStyles();
  const { isLoading, error, data } = useQuery(props.movieIDs, () =>
    metaDataByMovie(props.movieIDs)
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

  const metaData = transformMetaData(data);
  const display = Object.keys(metaData).map((movie) => {
    return (
      <GridListTile key={metaData[movie].title} cols={1}>
        <img src={metaData[movie].image} alt={metaData[movie].title} />
        {/* <GridListTileBar
          title={metaData[movie].title}
          subtitle={
            <span>
              year: {metaData[movie].year} rating: {metaData[movie].rating}
            </span>
          }
        /> */}
      </GridListTile>
    );
  });

  return (
    <div>
      <GridList
        className={classes.movieGridHolder}
        spacing={50}
        cellHeight={"400"}
        cols={4}
      >
        {display}
      </GridList>
    </div>
  );
};
