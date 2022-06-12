import { createWebHistory, createRouter } from "vue-router";
import HomeInstrumentos from "../components/HomeInstrumentos"

const routes = [
    {
        path: '/',
        name: 'HomeInstrumentos',
        component: HomeInstrumentos//() => import("../components/HomeInstrumentos")
    },
    {
        path: '/detalle/:id',
        name: 'DetalleInstrumento',
        component: () => import("../components/DetalleInstrumento")//() => import("../components/HomeInstrumentos")
    },
    {
        path: '/modificar/:id',
        name: 'ModificarInstrumento',
        component: () => import("../components/FormularioInstrumento")//() => import("../components/HomeInstrumentos")
    },
    {
        path: '/crear',
        name: 'CrearInstrumento',
        component: () => import("../components/FormularioInstrumento")//() => import("../components/HomeInstrumentos")
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;