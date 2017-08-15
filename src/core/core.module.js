import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app/app.component';
import './base.scss';

export default angular.module('app.core', [uiRouter])
    .component('app', AppComponent)
    .config(($urlServiceProvider) => {
        $urlServiceProvider.rules.otherwise({
            state: 'articles'
        });
    })
    .name;
