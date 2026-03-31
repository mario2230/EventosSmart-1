<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton
} from '@ionic/vue'

import { heart, heartOutline, trashOutline } from 'ionicons/icons'


interface Evento { 
  id: number; 
  texto: string; 
  estado: boolean 
}

const props = defineProps<{ evento: Evento }>()


const emit = defineEmits<{
  remover: [id: number]
  favoritar: [id: number]
}>() 
</script>

<template>
  <IonCard>
    <IonCardContent class="ion-no-padding">
      <IonItem lines="none">
        <IonIcon 
          slot="start" 
          :icon="props.evento.estado ? heart : heartOutline"
          :color="props.evento.estado ? 'danger' : 'medium'" 
          @click="emit('favoritar', props.evento.id)" 
          style="cursor: pointer;"
        />

        <IonLabel>
          {{ props.evento.texto }}
        </IonLabel>

        <IonButton 
          slot="end" 
          fill="clear" 
          color="medium" 
          @click="emit('remover', props.evento.id)"
        >
          <IonIcon :icon="trashOutline" />
        </IonButton>
      </IonItem>
    </IonCardContent>
  </IonCard>
</template>