$(document).ready(function(){
    if($('.filtered').length) {
        var mixer = mixitup('.filtered', {
            animation: {
                effects: 'fade scale(0.5)'
            }
        });
    }
});