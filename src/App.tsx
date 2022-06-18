
import { Header } from './component/Header'
import './global.css'
import styles from './App.module.css'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button>Criar</button>
        </div>
        <div className={styles.tasks}>
          <header>
            <div>
              <strong className={styles.taskCreated}>Tarefas criadas</strong>
              <span>0</span>
            </div>
            <div>
              <strong className={styles.taskDone}>Concluidas</strong>
              <span>0</span>
            </div>
          </header>
          {tasks.map(x => <div></div>)}
        </div>
      </div>
    </>
  )
}

export default App
