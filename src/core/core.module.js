import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app/app.component';
import TabComponent from './tabs/tab.component';
import TabsComponent from './tabs/tabs.component';
import './base.scss';

export default angular.module('app.core', [uiRouter])
    .component('app', AppComponent)
    .component('tab', TabComponent)
    .component('tabs', TabsComponent)
    .config(($urlServiceProvider) => {
        $urlServiceProvider.rules.otherwise({
            state: 'articles'
        });
    })
    .name;
