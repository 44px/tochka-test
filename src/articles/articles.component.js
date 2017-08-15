export default {
    bindings: {
        articles: '<'
    },
    controller: ArticlesController,
    template: '<ui-view all-articles="$ctrl.articles" on-open-tabs-page="$ctrl.onOpenTabsPage(selectedIndexes)"></ui-view>'
};


/* @ngInject */
function ArticlesController($state) {
    const vm = this;

    vm.onOpenTabsPage = (selected) => {
        $state.go('articles.tabs', {selected});
    };
}
