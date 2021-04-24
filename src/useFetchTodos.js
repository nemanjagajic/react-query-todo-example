import { useQuery } from "react-query";
import todoService from "./todoService";

export const useFetchTodos = () => {
  const { data, error, isLoading, isFetching } = useQuery(
    "todos",
    todoService.getTodos
  );
  return { data, error, isLoading, isFetching };
};
