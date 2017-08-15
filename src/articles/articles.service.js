/* @ngInject */
export default function($q) {
    return {
        getList() {
            return $q.when([{
                label: 'События',
                content: 'Все события тут'
            }, {
                label: 'Аналитика',
                content: 'Аналитика тут'
            }, {
                label: 'О проекте',
                content: 'О проекте тут'
            }]);
        }
    };
}
