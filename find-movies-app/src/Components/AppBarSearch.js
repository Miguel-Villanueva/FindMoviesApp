import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { DebounceInput } from "react-debounce-input";
import Typography from "@material-ui/core/Typography";
import { YouMightLike } from "./YouMightLike";
import { SearchResults } from "./SearchResults";
import { MovieDetails } from "./MovieDetails";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  header: {
    minHeight: "209px",
    display: "flex",
    marginLeft: "7%",
    marginRight: "7%",
    padding: "0px",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  search: {
    backgroundColor: fade(theme.palette.secondary.main, 0.75),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.9),
    },
    borderRadius: "5px",
    display: "flex",
    textAlign: "left",
    width: "100%",
    marginTop: "2%",
    [theme.breakpoints.up("sm")]: {
      minHeight: "56px",
      marginTop: "2%",
      borderRadius: "10px",
    },
    fontSize: "2rem",
  },
}));

export const AppBarSearch = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <div className={classes.grow}>
      <AppBar color="primary" position="static">
        <Toolbar className={classes.header}>
          <Typography className={classes.title} variant="h4" noWrap>
            Find Movies
          </Typography>

          <DebounceInput
            placeholder="E.g. Harry Potter"
            minLength={2}
            debounceTimeout={300}
            className={classes.search}
            onChange={handleChange}
          />
        </Toolbar>
      </AppBar>

      {query !== "" ? <SearchResults search={query} /> : <YouMightLike />}
    </div>
  );
};
