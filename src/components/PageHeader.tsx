import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle
} from "@ionic/react";

interface PageHaderProps {
  title: string;
}

const PageHeader: React.SFC<PageHaderProps> = ({ title, children }) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
        {children}
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
