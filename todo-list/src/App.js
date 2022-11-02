
import { Button, Container, Flex, Input, Item, Spacer } from "./styles";
import { useState } from "react";
import { CheckSquare, Trash } from "phosphor-react";


export function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);


  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      
        <h1 className="title">TAREFAS</h1>
        <Spacer />
        <Flex direction="row">
          <Input
            value={task}
            placeholder="Digite sua tarefa"
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask}>Adicionar</Button>
        </Flex>
        <Spacer margin="1.4rem" />

        <ul>
          {listTask.map((task) => (
            <>
              <Item Item checked={task.checked} key={task.id}>
                <p>{task.task}</p>
                <Flex direction="row">
                  <button onClick={() => toggleChecked(task.id, task.checked)} title="Marcar como concluída" class="bx bx-check ">
                    <CheckSquare size={24}/>
                  </button>
                  <button onClick={() => removeTask(task.id)}  title="Deletar tarefa" class="bx bx-trash ">
                    <Trash size={24} />
                  </button>
                </Flex>
              </Item>
              <Spacer margin="1.0rem" />
            </>
          ))}
        </ul>
    </Container>
  );
}