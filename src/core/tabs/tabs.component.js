import template from './tabs.html';
import './tabs.scss';

export default {
    controller: TabsController,
    controllerAs: 'tabs',
    template,
    transclude: true
};


function TabsController() {
    const vm = this;

    vm.registerTab = (tab) => {
        vm.tabs.push(tab);
        if (vm.tabs.length === 1) {
            vm.selectTab(tab);
        }
    };

    vm.selectTab = (selectedTab) => {
        vm.tabs.forEach((tab) => {
            tab.setVisibility(tab === selectedTab);
        });
    };

    vm.$onInit = () => {
        vm.tabs = [];
    };
}
