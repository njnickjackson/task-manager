import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { addOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Task List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton class='ion-float-right' shape='round'>
              <IonIcon slot='' icon={addOutline} size='large'></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
