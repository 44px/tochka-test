import angular from 'angular';
import ArticlesService from './articles.service';
import ArticlesComponent from './articles.component';
import ListPageComponent from './list-page/list-page.component';
import TabsPageComponent from './tabs-page/tabs-page.component';

export default angular.module('app.articles', [])
    .factory('Articles', ArticlesService)
    .component('articles', ArticlesComponent)
    .component('listPage', ListPageComponent)
    .component('tabsPage', TabsPageComponent)
    .config(($stateProvider) => {
        $stateProvider.state('articles', {
            url: '/articles',
            component: 'articles',
            redirectTo: 'articles.list',
            resolve: {
                articles: (Articles) => {
                    /* @ngInject */
                    return Articles.getList();
                }
            }
        }).state('articles.list', {
            url: '',
            component: 'listPage'
        }).state('articles.tabs', {
            url: '/tabs/?selected',
            params: {
                selected: {
                    type: 'int',
                    array: true,
                    value: []
                }
            },
            component: 'tabsPage',
            redirectTo: (transition) => {
                const params = transition.params();
                if (params.selected.length === 0) {
                    return {state: 'articles'};
                }
                return null;
            }
        });
    })
    .name;
