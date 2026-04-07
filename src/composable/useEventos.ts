import { ref, computed } from 'vue'




interface Evento {
    id: number
    texto: string
    estado: boolean
}



const eventos = ref<Evento[]>([])

export function useEventos() {
    const busca = ref('')
    const filtroAtivo = ref<'estado' | 'favorito' | 'indiferente'>('estado')

    
    const filtradas = computed(() => {
        const termo = busca.value.toLowerCase()
        return eventos.value
            .filter(e => e.texto.toLowerCase().includes(termo))
            .filter(e => {
                if (filtroAtivo.value === 'indiferente') return !e.estado
                if (filtroAtivo.value === 'favorito') return e.estado
                return true
    })
})




const totalFavoritas = computed(
    () => eventos.value.filter(e => e.estado).length
)

const favoritos = computed(
  () => eventos.value.filter(e => e.estado)
)

function adicionar(texto:string) {
    if (!texto.trim()) return 
        eventos.value.push({ id: Date.now(), texto, estado: false }) 
} 

function favoritar(id: number) {
    const e = eventos.value.find(e => e.id === id)

    if (e) e.estado = !e.estado
}

function remover(id: number) {
    eventos.value = eventos.value.filter(e => e.id !== id)
}


function buscarPorId(id: number) {
  return computed(() => eventos.value.find(e => e.id === id))
}





return { eventos, busca, filtroAtivo, filtradas, totalFavoritas, adicionar, remover, favoritar, favoritos, buscarPorId}

}
