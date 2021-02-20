// Transforms array size 100 of "/title/tt12676326/" -> array size 8 of "tt12676326"
import BrokenImageIcon from "@material-ui/icons/BrokenImage";

export const getPopularMovieIDs = (data) =>
  data
    .map((link) => {
      return link.substring(7, link.length - 1);
    })
    .slice(0, 8);

export const transformMetaData = (data) => {
  return Object.keys(data).map((movie) => {
    const movieMetaData = {
      title: data[movie].title.title,
      image: { BrokenImageIcon },
      year: data[movie].title.year,
      rating: data[movie].ratings.rating,
    };
    if (data[movie].title.hasOwnProperty("image")) {
      movieMetaData.image = data[movie].title.image.url;
    }
    return movieMetaData;
  });
};
