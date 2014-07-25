import Ember from 'ember';

export default Ember.Component.extend({
    scale: 0.5,
    crazy: false,
    sparkles: function() {
        //rather hacky, refactor
        return new Array(parseInt(this.get('sparklesCount'),10));
    }.property('sparklesCount'),
    sparklesCount: 100,
    cssScale: function() {
        var scale = this.get('scale');
        return '-webkit-transform: scale(' + scale + '); transform: scale(' + scale + ');';
    }.property('scale')
});

