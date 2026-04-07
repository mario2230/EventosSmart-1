# SmartEvent

Aplicativo mobile de eventos locais desenvolvido com Ionic e Vue.js 3.

## Sobre

O SmartEvent é um aplicativo para visualização e organização de eventos locais, como shows, palestras, eventos esportivos e workshops. Os dados são simulados diretamente no código, sem integração com backend.

Este projeto foi desenvolvido com fins educacionais, com o objetivo de aplicar conceitos fundamentais de desenvolvimento mobile utilizando tecnologias modernas.

## Funcionalidades

* Listagem de eventos
* Visualização de detalhes de cada evento
* Sistema de favoritar eventos
* Listagem de eventos favoritados
* Tela de perfil com campo editável

## Tecnologias Utilizadas

* Ionic Framework
* Vue.js 3 (Composition API)
* TypeScript
* Vue Router

## Conceitos Aplicados

* Gerenciamento de estado com `ref()`
* Uso de `computed()` para dados derivados
* Monitoramento de mudanças com `watch()`
* Componentização e reutilização
* Navegação entre páginas com lazy loading
* Estilização com CSS scoped e variáveis

## Estrutura do Projeto

src/
├── components/
│   └── EventCard.vue
├── views/
│   ├── HomePage.vue
│   ├── EventosPage.vue
│   ├── EventoDetalhePage.vue
│   ├── FavoritosPage.vue
│   └── PerfilPage.vue
├── router/
│   └── index.ts
└── theme/
  └── variables.css

## Execução

```bash
git clone https://github.com/seu-usuario/smartevent.git
cd smartevent
npm install
ionic serve
```

## Observação

Projeto desenvolvido exclusivamente para fins educacionais.
