<template>
  <ion-page>

    <ion-toolbar>
      <ion-title>Perfil</ion-title>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-grid class="ion-padding">

        <ion-row>
          <ion-col size="12">
            <ion-input 
              label="Nome"
              label-placement="floating"
              v-model="usuario.nome"
            />
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="12">
            <ion-input 
              label="Email"
              label-placement="floating"
              v-model="usuario.email"
            />
          </ion-col>
        </ion-row>

        <ion-row class="ion-margin-top">
          <ion-col size="12" class="ion-text-center">
            <ion-button @click="salvarPerfil">
              Salvar
            </ion-button>
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
  IonCol,
  IonInput,
  IonButton
} from '@ionic/vue'

import { ref, watch } from 'vue'

const usuario = ref({
  nome: '',
  email: ''
})

const dadosSalvos = localStorage.getItem('perfil')
if (dadosSalvos) {
  usuario.value = JSON.parse(dadosSalvos)
}

watch(usuario, (novoValor) => {
  console.log('Perfil atualizado:', novoValor)
}, { deep: true })


function salvarPerfil() {
  localStorage.setItem('perfil', JSON.stringify(usuario.value))
  alert('Perfil salvo!')
}
</script>