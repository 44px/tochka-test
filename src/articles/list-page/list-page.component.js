import template from './list-page.html';
import './list-page.scss';

export default {
    bindings: {
        allArticles: '<',
        onOpenTabsPage: '&'
    },
    controller: ListPageController,
    controllerAs: 'listPage',
    template
};


function ListPageController() {
    const vm = this;

    vm.getSelectedArticles = () => vm.articles.filter((article) => article.selected);

    vm.compareSelected = () => {
        vm.onOpenTabsPage({
            selectedIndexes: vm.getSelectedArticles().map(({index}) => index)
        });
    };

    vm.$onInit = () => {
        vm.articles = vm.allArticles.map((article, index) => {
            return Object.assign({}, article, {
                selected: false,
                index
            });
        });
    };
}
