import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { addOutline } from 'ionicons/icons';
import TaskList from '../components/TaskList';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TaskList />
        <IonButton class='ion-float-right' shape='round'>
              <IonIcon slot='' icon={addOutline} size='large'></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
