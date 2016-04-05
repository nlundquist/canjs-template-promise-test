/**
 * Created by nlundqu on 2016-04-04.
 */
import q from 'steal-qunit';
import {template, promise, deferred} from 'index';

q.module('stache');

q.test('promises & deferred both supported in template', function() {
    var promiseValue = $(template({promise, deferred})).find('h1');

    q.ok(!promiseValue.empty(), 'promise has rendered a value');
});