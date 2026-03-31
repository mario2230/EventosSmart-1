<template>
  <ion-page>

      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>


    <ion-content :fullscreen="true">
      <ion-grid class="ion-no-padding" style="height: 100%;">
        <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100%;">
          <ion-col size="12" class="ion-text-center ion-padding">
            
            <p>
              Tela de Perfil!
            </p>

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  IonPage, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonGrid,
  IonRow,
  IonCol 
} from '@ionic/vue';
</script>

