import Ember from 'ember';

export default Ember.Component.extend({
    type: 'plus',
    classNames: ['sparkle-outer'],
    attributeBindings: ['style'],
    style: "top: 50%; left: 50%;",
    possibleTypes: ['plus', 'star'],
    animationDurationStlye: "",
    setValues: function() {
        //random type
        var possibleTypes = this.get('possibleTypes');
        var type = possibleTypes[Math.floor(Math.random() * possibleTypes.get('length'))];
        this.set('type', type);

        //random position
        var top = Math.floor(Math.random() * (50 - 10) + 10);
        var left = Math.floor(Math.random() * 100);
        var positionStyle = "top: " + top +"%; left:" + left +"%;";

        //random scale
        var scale = (Math.random()).toFixed(2);
        var scaleStyle = '-webkit-transform: scale(' + scale + '); transform: scale(' + scale + ');';
        this.set('style', positionStyle + scaleStyle);
        
        // random animation duration
        var duration = Math.floor(Math.random() * (1000 - 400) + 400);
        var animationDurationStyle = '-webkit-animation-duration: ' + duration + 'ms; animation-duration:' + duration + 'ms;';
        this.set('animationDurationStyle', animationDurationStyle);
    }.on('init')
});

