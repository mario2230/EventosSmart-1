<template>
  <ion-page>

    <ion-toolbar>
      <ion-title>Favoritos</ion-title>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-grid class="ion-no-padding" style="height: 100%;">
        <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100%;">
          <ion-col size="12" class="ion-text-center ion-padding">

            <p>
              Tela de Favoritos!
            </p>

      

            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Favoritos ({{ favoritos.length }})
                </ion-card-title>
              </ion-card-header>

              <ion-card-content>
                <CardEvento
                  v-for="evento in favoritos"
                  :key="evento.id"
                  :evento="evento"
                  @favoritar="favoritar"
                  @remover="remover"
                />

                <p v-if="favoritos.length === 0" class="ion-text-center ion-padding">
                  Nenhum favorito ainda.
                </p>
              </ion-card-content>

            </ion-card>

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent, IonPage, IonTitle, IonToolbar,

} from '@ionic/vue'



import { useEventos } from '@/composable/useEventos'
import CardEvento from '@/components/CardEvento.vue'


const { favoritos, remover, favoritar } = useEventos()


</script>