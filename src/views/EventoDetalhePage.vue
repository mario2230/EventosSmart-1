<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/eventos" />
        </ion-buttons>
        <ion-title>Detalhe do Evento</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <div v-if="!evento" class="nao-encontrado">
        <ion-icon :icon="alertCircleOutline" size="large" />
        <p>Evento não encontrado.</p>
        <ion-button router-link="/eventos" fill="outline">
          Voltar para eventos
        </ion-button>
      </div>

      <ion-card v-else>
        <ion-card-header>
          <ion-card-title>{{ evento.texto }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>

      
          <div class="status">
            <ion-icon
              :icon="evento.estado ? heart : heartOutline"
              :color="evento.estado ? 'danger' : 'medium'"
            />
            <span>{{ evento.estado ? 'Favoritado' : 'Não favoritado' }}</span>
          </div>


          <ion-button
            expand="block"
            :fill="evento.estado ? 'solid' : 'outline'"
            :color="evento.estado ? 'danger' : 'primary'"
            class="ion-margin-top"
            @click="favoritar(evento.id)"
          >
            <ion-icon
              slot="start"
              :icon="evento.estado ? heart : heartOutline"
            />
            {{ evento.estado ? 'Desfavoritar' : 'Favoritar' }}
          </ion-button>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonButton, IonIcon, IonButtons, IonBackButton
} from '@ionic/vue'
import { heart, heartOutline, alertCircleOutline } from 'ionicons/icons'
import { useEventos } from '@/composable/useEventos'

const route  = useRoute()
const id     = Number(route.params.id)   

const { buscarPorId, favoritar } = useEventos()
const evento = buscarPorId(id)           
</script>

<style scoped>
.nao-encontrado {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 60px;
  color: var(--ion-color-medium);
}

.status {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--ion-color-medium);
}
</style>