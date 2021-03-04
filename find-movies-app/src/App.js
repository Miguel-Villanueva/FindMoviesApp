import "./App.css";
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

const queryClient = new QueryClient();
export const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppBarSearch />
        <YouMightLike />
      </QueryClientProvider>
    </div>
  );
};
