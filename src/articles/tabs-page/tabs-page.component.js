import angular from 'angular';
import template from './tabs-page.html';

export default {
    bindings: {
        allArticles: '<'
    },
    controller: TabsPageController,
    controllerAs: 'tabsPage',
    template
};


/* @ngInject */
function TabsPageController($stateParams) {
    const vm = this;

    vm.$onInit = () => {
        vm.articles = $stateParams.selected
            .map((index) => vm.allArticles[index])
            .filter(angular.isDefined);
    };
}
