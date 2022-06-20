import styles from './Task.module.css';

import { Trash, Check, Circle } from 'phosphor-react';


export interface ITask {
    id: string;
    checked: boolean
    description: string
}

interface ITaskProp {
    task: ITask
    onClickToggleCheck: (id: string) => void
    onDeleteTask: (id: string) => void
}

export function Task({ task, onClickToggleCheck, onDeleteTask }: ITaskProp) {
    return (
        <div className={styles.task}>
            <button onClick={() => {
                onClickToggleCheck(task.id)
            }} className={task.checked ? styles.buttonChecked : styles.buttonUnChecked}>
                {task.checked ? <Check size={24} /> : <Circle size={24} />}
            </button>
            <label className={task.checked ? styles.labelChecked : ''}>{task.description}</label>
            <button onClick={() => {
                onDeleteTask(task.id)
            }} className={styles.buttonTrash}>
                <Trash size={24} />
            </button>
        </div>
    )
}