import DB from "./DB";

class TodoService {
  getTodos = async () => {
    console.log("getTodos called!");
    try {
      const data = await DB.getTodos();
      return data;
    } catch (e) {
      throw e;
    }
  };

  addTodo = async (title) => {
    console.log("addTodo called!");
    try {
      const data = await DB.addTodo(title);
      return data;
    } catch (e) {
      throw e;
    }
  };
}

export default new TodoService();
