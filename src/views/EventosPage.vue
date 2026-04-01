<template>
    <ion-page>

        <ion-toolbar>
            <ion-title>Eventos</ion-title>
        </ion-toolbar>


        <ion-content :fullscreen="true">
            <ion-grid class="ion-no-padding" style="height: 100%;">
                <ion-row class="ion-justify-content-center ion-align-items-center" style="height: 100%;">
                    <ion-col size="12" class="ion-text-center ion-padding">

                        <p>
                            Tela de Evento!
                        </p>
                        <ion-card>
                            <ion-card-content>
                                <ion-input v-model="novoEvento" label="Nome do Evento " label-placement="floating"
                                    placeholder="Ex: Festa do Bairro" />

                                <ion-button expand="block" @click="adicionarNovo">
                                    <ion-icon slot="start" :icon="addOutline" />
                                    Adicionar Evento
                                </ion-button>
                            </ion-card-content>
                        </ion-card>

                        <ion-card>
                            <ion-card-header>
                                <ion-card-title>
                                    Meus Eventos ({{ filtradas.length }})
                                </ion-card-title>
                            </ion-card-header>

                            <ion-card-content>
                                <CardEvento v-for="evento in filtradas" :key="evento.id" :evento="evento"
                                    @favoritar="favoritar"
                                    @remover="remover" />

                                <p v-if="filtradas.length === 0" class="ion-text-center ion-padding">
                                    Nenhuma tarefa cadastrada.
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
    IonInput, IonButton, IonIcon
} from '@ionic/vue';

import { ref, watch } from 'vue'


import { useEventos } from '@/composable/useEventos';
import CardEvento from '@/components/CardEvento.vue';

const { filtradas, adicionar, remover, favoritar, totalFavoritas } = useEventos()
const novoEvento = ref('')

import { addOutline } from 'ionicons/icons'


function adicionarNovo() {
    adicionar(novoEvento.value)
    novoEvento.value = ''
}


watch(totalFavoritas, (novoValor, antigoValor) => {
    if(novoValor != antigoValor && novoValor > antigoValor) {
        alert('Tarefa Favoritada!')
    } 
})

</script>
