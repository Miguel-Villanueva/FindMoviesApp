import { AppBarSearch } from "./Components/AppBarSearch";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  QueriesObserver,
} from "react-query";
import { YouMightLike } from "./Components/YouMightLike";
import { Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
});

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Grid>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppBarSearch />
        </ThemeProvider>
      </QueryClientProvider>
    </Grid>
  );
};
