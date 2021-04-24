class DB {
  todos = [{ title: "Test 1" }];

  getTodos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...this.todos]);
      }, 2000);
    });
  };

  addTodo = (title) => {
    return new Promise((resolve) => {
      this.todos.push({ title });
      console.log(this.todos);
      setTimeout(() => {
        resolve({ title });
      }, 2000);
    });
  };
}

export default new DB();
