import Vue from "vue"
import Router from "vue-router"

import Home from "./pages/Home"
import Produto from "./pages/produto/Produto"

import MeusProdutos from './pages/produto/MeusProdutos'
import DetalheProduto from './pages/produto/DetalheProduto'
/**
 * Registrando router na instancia do Vue
 * Tipos de navegação
 * > Modelo de HASH e HISTORY
 * 
 * > hash: meusite.com/#/contato
 * > history: meusite.com/contato
 */
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Home
    },{
        path: "/produto",
        component: Produto,
        props: true, // Passa o parametro como propriedade
        children: [
            {path: '', component: MeusProdutos},
            {path: ':id', component: DetalheProduto, props: true}
        ]
    }
]
})