/**
 * Created by nlundqu on 2016-04-04.
 */
import can from 'can';
import 'can/view/stache/';

var template = can.view.stache(`
    <h1>{{promise.value}}</h1>
    <h2>{{deferred.value}}</h2>
`);

var promise = Promise.resolve('this should appear.'),
    deferred = can.Deferred().resolve('this will appear.');

export {template, promise, deferred};

document.body.appendChild(template({
    promise, deferred
}));