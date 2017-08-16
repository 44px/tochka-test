/* eslint-disable no-unused-vars */

import angular from 'angular';
import CoreModule from './core/core.module';
import ArticlesModule from './articles/articles.module';

angular.module('app', [
    CoreModule,
    ArticlesModule
]).config(($compileProvider) => {
    $compileProvider.debugInfoEnabled(process.env.NODE_ENV !== 'production');
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
});
