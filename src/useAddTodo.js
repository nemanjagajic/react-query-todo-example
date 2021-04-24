import { useMutation, useQueryClient } from "react-query";
import todoService from "./todoService";

export const useAddTodo = ({ clearInputText }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(todoService.addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      clearInputText();
    }
  });
  return { addTodo: mutate, isAddingTodo: isLoading };
};
