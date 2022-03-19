import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

export default function Contact() {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Contact</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div style={{
                    padding: '2rem'
                }}>
                    <h1>Anime Jacket</h1>
                    <ul>
                        <li>Website: https://animejacket.com</li>
                        <li>Email: contact@animejacket.com</li>
                    </ul>
                </div>
            </IonContent>
        </IonPage>
    )
}