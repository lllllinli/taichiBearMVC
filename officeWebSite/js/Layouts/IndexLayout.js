/**
 * Created by linli on 2014/9/25.
 */
App.Layouts.IndexLayout = (function () {
    var Constr = {};

    Constr.init = function () {
        var _that=this;

        $(window).resize(function(){
            setTimeout(function(){
                _that.reSize();
            },300);
        });

        _that.reSize();

    };
    Constr.reSize=function(){
        var _wW=$(window).width();
        var _wH=$(window).height();
        var _loaderIconW=$('.idxShowboxLoader').width();
        var _loaderIconH=$('.idxShowboxLoader').height();

        var _imgsConuts = $('.idxdxShowboxImg').length;

        console.log('_imgsConuts:'+_imgsConuts);

        $('.idxWrapper').css({
            width:_wW,
            height:_wH
        });



        $('.idxdxShowboxImges').css({
            width: _wW * _imgsConuts,
            height:_wH
        });

        $('.idxdxShowboxImg').css({
            width:_wW
        });



        $('.idxShowboxLoader').css({
            top:(_wH-_loaderIconH)/2,
            left:(_wW-_loaderIconW)/2
        }).show();

    };
    Constr.loadComplete=function(){
        var _that=this;


        $('.idxShowboxLoad').hide();
        $('.idxdxShowboxImges').show();

        _that.reSize();

    };
    Constr.showboxGeneralPlay=function(_count,_moveLongth){
        TweenLite.to('.idxdxShowboxImges', 1, {left: -(_count * _moveLongth)});
    };
    Constr.showboxBackinit=function(_count,_moveLongth){
        $('.idxdxShowboxImges').css({left: 0});
        TweenLite.to('.idxdxShowboxImges', 1, {left:  -(_count * _moveLongth)});
    };

    return Constr;
})();