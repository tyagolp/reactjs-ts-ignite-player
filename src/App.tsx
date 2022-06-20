
import { Header } from './component/Header'
import './global.css'
import styles from './App.module.css'
import { FormEvent, useState } from 'react'
import { ITask, Task } from './component/Task'
import { PlusCircle } from 'phosphor-react';
import Clipboard from '../assets/clipboard.svg';

import { v4 as uuidV4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState<ITask[]>([{
    id: uuidV4(),
    checked: false,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati, fugit vitae necessitatibus porro aliquid facilis. Harum veniam ipsa magni reprehenderit consectetur accusamus optio officiis, rerum reiciendis libero alias ex!"
  }, {
    id: uuidV4(),
    checked: true,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta obcaecati, fugit vitae necessitatibus porro aliquid facilis. Harum veniam ipsa magni reprehenderit consectetur accusamus optio officiis, rerum reiciendis libero alias ex!"
  }])

  const [newTaskText, setNewTaskText] = useState("");

  function handlerSubmitAddTask(e: FormEvent) {
    e.preventDefault()
    setTasks([...tasks, { checked: false, description: newTaskText, id: uuidV4() }])
    setNewTaskText("")
  }

  function handlerClickToggleCheck(id: string) {
    const task = tasks.find(x => x.id === id)
    if (!task)
      return;
    task.checked = !task.checked

    setTasks([...tasks])
  }
  function handlerDeleteTask(id: string) {
    setTasks(tasks.filter(x => x.id !== id))
  }

  const taskCount = tasks.length

  return (
    <>
      <Header />
      <div className={styles.container}>
        <form onSubmit={handlerSubmitAddTask} className={styles.newTask}>
          <input
            type="text"
            required
            onChange={(e) => {
              setNewTaskText(e.target.value)
            }}
            value={newTaskText}
            placeholder='Adicione uma nova tarefa'
          />
          <button type='submit'>
            Criar
            <PlusCircle size={24} />
          </button>
        </form>
        <div className={styles.tasks}>
          <header>
            <div>
              <strong className={styles.taskCreated}>Tarefas criadas</strong>
              <span>{taskCount}</span>
            </div>
            <div>
              <strong className={styles.taskDone}>Concluidas</strong>
              <span>{tasks.filter(x => x.checked).length} de {taskCount}</span>
            </div>
          </header>

          {taskCount ?
            tasks.map(x => <Task key={x.id} task={x} onClickToggleCheck={handlerClickToggleCheck} onDeleteTask={handlerDeleteTask} />)
            :
            <div className={styles.empty}>
              <img src={Clipboard} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          }

          { }
        </div>
      </div>
    </>
  )
}

export default App
