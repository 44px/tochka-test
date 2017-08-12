import angular from 'angular';
import appModule from './app.module';

angular.bootstrap(
    document.querySelector('body'), // eslint-disable-line angular/document-service
    [appModule],
    {strictDi: true}
);
