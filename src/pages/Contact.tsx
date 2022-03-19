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
                    <p>You can contact us through our website or our email address</p>
                    <ul>
                        <li>Website: <a href="https://animejacket.com/contact-us">https://animejacket.com/contact-us</a></li>
                        <li>Email: <a href="mailto:contact@animejacket.com">contact@animejacket.com</a></li>
                    </ul>
                </div>
            </IonContent>
        </IonPage>
    )
}