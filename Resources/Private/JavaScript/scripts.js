$(document).ready(function(){
    if($('.filtered').length) {
        var mixer = mixitup('.filtered', {
            selectors: {
                control: '.filter-btn'
            },
            classNames: {
                block: '',
                elementFilter: ''
            },
            animation: {
                effects: 'fade scale(0.5)'
            }
        });
    }
});