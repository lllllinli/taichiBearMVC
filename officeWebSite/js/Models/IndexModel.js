/**
 * Created by linli on 2014/9/25.
 */
App.Models.IndexModel = (function () {
    var Constr;
    Constr = {
        preLoaderData: {},
        loadPreLoaderData: function () {

            console.log('loadPreLoaderData');

            var _that = this;

            var _event=App.Events.IndexPreLoaderEvent.ONCOMPLETE;

            var _url = '/showboxImgs';

            var _jqxhr = $.ajax(_url, {
                dataType: 'json'
            });

            _jqxhr.done(function (result) {
                console.log('loadPreLoaderData success!');
                _that.preLoaderData= result;
                $(document).trigger(_event);
            });

        }
    };
    return Constr;
})();