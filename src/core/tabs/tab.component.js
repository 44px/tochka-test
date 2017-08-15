export default {
    bindings: {
        title: '@'
    },
    require: {
        tabs: '^^'
    },
    controller: TabController,
    controllerAs: 'tab',
    template: '<div ng-if="tab.isVisible()" ng-transclude></div>',
    transclude: true
};


function TabController() {
    const vm = this;

    let isVisible = false;

    vm.setVisibility = (value) => {
        isVisible = value;
    };

    vm.isVisible = () => isVisible;

    vm.$onInit = () => {
        vm.tabs.registerTab(vm);
    };
}
