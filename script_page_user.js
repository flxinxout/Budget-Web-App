var appController = (function() {

    // ....

})();

var UIController = (function() {

    var DOMStrings = {
        dateLabel: ".budget__title--month"
    }

    return {
        setMonth: function(){
            var now, months, month, year;

            now = new Date();

            months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        getDOMStrings: function(){
            return DOMStrings;
        }
    }

})();

var Controller = (function(appContr, UIContr) {

    return {
        init: function(){
            UIContr.setMonth();
        }
    }

})(appController, UIController);

Controller.init();