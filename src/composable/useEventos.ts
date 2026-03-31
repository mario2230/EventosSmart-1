import { ref, computed, watch } from 'vue'




interface Evento {
    id: number
    texto: string
    estado: boolean
}

export function useEventos() {
    const eventos = ref<Evento[]>([])
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






watch(totalFavoritas, (novoValor, antigoValor) => {
    if(novoValor != antigoValor && novoValor > antigoValor) {
        alert('Tarefa Favoritada!')
    }
})

return { eventos, busca, filtroAtivo, filtradas, totalFavoritas, adicionar, remover, favoritar}

}
