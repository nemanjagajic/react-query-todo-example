import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Posts from "./Posts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Posts />
      </div>
    </QueryClientProvider>
  );
}
