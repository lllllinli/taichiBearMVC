/**
 * Created by linli on 2014/9/25.
 */

App.Controllers.IndexController = (function () {
    var Constr;
    Constr = {
        init: function () {
            console.log('App.Controllers.IndexController.init');
            var _that = this;

            var _layout=App.Layouts.IndexLayout;




            $(document).bind(App.Events.IndexPreLoaderEvent.ONCOMPLETE, function (event) {
                console.log(App.Models.IndexModel.preLoaderData);
                _that.onLoadImgsComplete();
            });

            $(document).bind(App.Events.IndexPreLoaderEvent.ONIMAGECOMPLETE,function(){
                _layout.loadComplete();
                _that.showboxLoop();

            });

            _layout.init();

            _that.loadImgs();

        },
        showboxLoop:function(){

            var _moveLongth=$(window).width();
            var _count = 0;
            var _size=$('.idxdxShowboxImg').size();

            var _layout=App.Layouts.IndexLayout;

            var _setInterval = setInterval(function(){
                console.log('_setInterval');
                _count=_count+=1;
                if(_count<_size){
                    _layout.showboxGeneralPlay(_count,_moveLongth);
                }else{


                    _count=1;
                    _layout.showboxBackinit(_count,_moveLongth);

                }

            },3000);
        },
        loadImgs: function () {
            var _model = App.Models.IndexModel;

            _model.loadPreLoaderData();
        },
        onLoadImgsComplete: function () {

            var _data = App.Models.IndexModel.preLoaderData;
            var _that = this;

            _that.createShowbox(_data);
        },
        createShowbox: function (data) {

            var _langth = data.images.length;
            var _imgOnLoad;
            var _count=0;

            _imgOnLoad = function () {
                _count=_count+1;

                if(_count===_langth){
                    $(document).trigger(App.Events.IndexPreLoaderEvent.ONIMAGECOMPLETE);
                }
            };

            for (var i = 0; i < _langth; i++) {
                var _img = new Image();
                _img.onload = _imgOnLoad();
                _img.src=data.images[i];
                $('.idxdxShowboxImges').append(_img)
                $(_img).addClass('idxdxShowboxImg');
            }
        }
    };
    return Constr;
})();
