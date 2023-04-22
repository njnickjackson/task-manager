// @ts-nocheck
import React, { useContext } from 'react';
import TaskContext from '../contexts/TaskContext';
import { IonCheckbox, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader } from '@ionic/react';
import { trash } from 'ionicons/icons';

const TaskList: React.FC = () => {
    return (
        <div>
            <TaskContext.Consumer>
                {({tasks}) => {
                    return (
                        <IonList>
                            <IonListHeader color='warning'>
                                <IonLabel color='light'>
                                    Incomplete
                                </IonLabel>
                            </IonListHeader>
                            {tasks.map(task => {
                                if (!task.completed) {
                                    return (
                                        <IonItemSliding key={task._id}>
                                            <IonItem>
                                                <IonLabel>{task.title}</IonLabel>
                                                <IonCheckbox aria-label='Label' slot='start'></IonCheckbox>
                                            </IonItem>
                                            <IonItemOptions side='end'>
                                                <IonItemOption color='danger'>
                                                <IonIcon slot='icon-only' icon={trash}></IonIcon>
                                                </IonItemOption>
                                            </IonItemOptions>
                                        </IonItemSliding>
                                    )
                                }
                            })}
                        </IonList>
                    )
                }}
            </TaskContext.Consumer>
        </div>
    );
  };
  
  export default TaskList;


