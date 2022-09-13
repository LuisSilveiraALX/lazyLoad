import { lazy, LazyExoticComponent } from 'react';
/* import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/'; */
/* import { LazyLayout } from '../01-lazyload/layout/LazyLayout'; */
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChuckName: 'LazyLayout' */ '../01-lazyload/layout/LazyLayout'));
const Lazy2 = lazy(() => import(/* webpackChuckName: 'LazyPage2' */ '../01-lazyload/pages/lazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChuckName: 'LazyPage3' */ '../01-lazyload/pages/lazyPage3'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },

];