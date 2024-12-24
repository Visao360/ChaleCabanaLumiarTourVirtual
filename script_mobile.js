(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.playAudioList([this.audio_EABA1A2A_F863_8C2B_41E4_74B83B536432], true); this.init()","downloadEnabled":true,"data":{"defaultLocale":"pt","name":"Player813","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"scrollBarColor":"#000000","paddingTop":0,"paddingBottom":0,"width":"100%","paddingLeft":0,"shadow":false,"scrollBarWidth":10,"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","mouseWheelEnabled":true,"desktopMipmappingEnabled":false,"definitions": [{"paddingTop":0,"url":trans('Image_F62264AC_F861_8428_41EA_CE96E38857B0_mobile.url'),"width":"100%","paddingLeft":0,"data":{"name":"INSTAGRAM"},"paddingBottom":0,"id":"Image_F62264AC_F861_8428_41EA_CE96E38857B0_mobile","class":"Image","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","height":"100%","backgroundOpacity":0,"click":"this.openLink(this.translate('LinkBehaviour_ED1DE4CB_F860_8468_41D8_94E81831B680.source'), '_blank')","propagateClick":false,"minHeight":1,"minWidth":1,"horizontalAlign":"center","borderSize":0,"shadow":false,"scaleMode":"fit_inside"},{"id":"panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_camera","hoverFactor":0,"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_F2C5EA7B_F861_8C28_41E3_01B45836E615","class":"PanoramaCamera"},{"paddingTop":0,"url":trans('Image_F5A55DEA_F861_8428_41E7_28C01E3FA68C_mobile.url'),"width":"100%","paddingLeft":0,"data":{"name":"WHATSAPP"},"paddingBottom":0,"id":"Image_F5A55DEA_F861_8428_41E7_28C01E3FA68C_mobile","class":"Image","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","height":"100%","backgroundOpacity":0,"click":"this.openLink(this.translate('LinkBehaviour_ED1B64CB_F860_8468_41EC_A6937068D8CD.source'), '_blank')","propagateClick":false,"minHeight":1,"minWidth":1,"horizontalAlign":"center","borderSize":0,"shadow":false,"scaleMode":"fit_inside"},{"horizontalAlign":"center","scrollBarColor":"#000000","paddingTop":0,"width":150.45,"paddingBottom":0,"paddingLeft":0,"children":["this.Image_F62264AC_F861_8428_41EA_CE96E38857B0_mobile","this.Image_F5B49BDB_F861_8C68_41E4_A4B0C84D917D_mobile","this.Image_F5A55DEA_F861_8428_41E7_28C01E3FA68C_mobile"],"data":{"name":"Container2920"},"scrollBarWidth":5,"id":"Container_F6343B95_F860_8CF8_41ED_A157BCF9FE2E_mobile","class":"Container","paddingRight":0,"verticalAlign":"middle","borderRadius":0,"bottom":6,"height":48.1,"toolTipHorizontalAlign":"center","contentOpaque":false,"gap":5,"scrollBarVisible":"rollOver","backgroundOpacity":0,"scrollBarMargin":1,"layout":"horizontal","overflow":"scroll","propagateClick":false,"scrollBarOpacity":0.5,"minHeight":10,"left":13,"minWidth":10,"shadow":false,"borderSize":0},{"id":"audio_EABA1A2A_F863_8C2B_41E4_74B83B536432","data":{"label":"M\u00fasica Instrumental para Relaxar e Acalmar Mente. Meditar, Relaxar, Paz interior.(2)"},"autoplay":true,"class":"MediaAudio","audio":"this.audiores_EA3DF6DD_F860_8469_41E8_DFA5873D2C02","loop":true},{"data":{"name":"LOGO"},"width":90,"paddingTop":0,"url":trans('Image_F5D467D7_F860_8478_41EB_B206542913D3_mobile.url'),"paddingBottom":0,"paddingLeft":0,"id":"Image_F5D467D7_F860_8478_41EB_B206542913D3_mobile","class":"Image","paddingRight":0,"verticalAlign":"middle","top":10.93,"borderRadius":0,"height":63.5,"toolTipHorizontalAlign":"center","backgroundOpacity":0,"propagateClick":false,"minHeight":1,"left":0,"minWidth":1,"shadow":false,"borderSize":0,"horizontalAlign":"center","scaleMode":"fit_inside"},{"paddingTop":0,"url":trans('Image_F5B49BDB_F861_8C68_41E4_A4B0C84D917D_mobile.url'),"width":"100%","paddingLeft":0,"data":{"name":"LOCALIZA\u00c7\u00c3O"},"paddingBottom":0,"id":"Image_F5B49BDB_F861_8C68_41E4_A4B0C84D917D_mobile","class":"Image","verticalAlign":"middle","paddingRight":0,"borderRadius":0,"toolTipHorizontalAlign":"center","height":"100%","backgroundOpacity":0,"click":"this.openLink(this.translate('LinkBehaviour_ED1B24CB_F860_8468_41ED_0A7144A74477.source'), '_blank')","propagateClick":false,"minHeight":1,"minWidth":1,"horizontalAlign":"center","borderSize":0,"shadow":false,"scaleMode":"fit_inside"},{"thumbnailUrl":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_t.jpg","pitch":0,"id":"panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C","hfovMin":"135%","hfov":360,"label":trans('panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C.label'),"class":"Panorama","hfovMax":130,"vfov":180,"data":{"label":"20241118_180317_163"},"frames":[{"cube":{"levels":[{"width":12288,"colCount":24,"rowCount":4,"url":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"ondemand"},{"width":6144,"colCount":12,"rowCount":2,"url":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand"},{"width":3072,"colCount":6,"rowCount":1,"url":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"]},{"width":9216,"colCount":6,"rowCount":1,"url":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"mobilevr"},{"width":12288,"colCount":6,"rowCount":1,"url":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","height":2048,"tags":"mobilevr2gen"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_t.jpg","class":"CubicPanoramaFrame"}],"partial":false},{"aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PlayList","items":[{"media":"this.panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C","camera":"this.panorama_F38B898B_F860_8CE9_41B5_5BDDE6FB5B5C_camera","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"toolTipBorderSize":1,"toolTipShadowSpread":0,"progressRight":0,"toolTipPaddingTop":2,"playbackBarHeadOpacity":1,"transitionMode":"blending","borderSize":0,"progressOpacity":1,"progressBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","paddingTop":0,"subtitlesBorderColor":"#FFFFFF","paddingBottom":0,"width":"100%","paddingLeft":0,"data":{"name":"Main Viewer"},"subtitlesBorderSize":0,"id":"MainViewer_mobile","progressBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressOpacity":1,"playbackBarHeadBorderRadius":0,"playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","paddingRight":0,"toolTipTextShadowOpacity":0,"toolTipFontFamily":"Arial","playbackBarBorderSize":0,"toolTipShadowVerticalLength":0,"vrPointerColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBarBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontColor":"#606060","toolTipPaddingRight":3,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorRatios":[0],"subtitlesTextDecoration":"none","progressBorderRadius":0,"progressBackgroundColorDirection":"vertical","toolTipDisplayTime":600,"toolTipHorizontalAlign":"center","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","playbackBarHeight":10,"subtitlesTextShadowBlurRadius":0,"surfaceReticleOpacity":0.6,"surfaceReticleColor":"#FFFFFF","playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"progressLeft":0,"firstTransitionDuration":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","height":"100%","progressBarBackgroundColor":["#3399FF"],"minHeight":25,"playbackBarBackgroundOpacity":1,"progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","minWidth":50,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","subtitlesPaddingTop":5,"transitionDuration":500,"translationTransitionDuration":1000,"playbackBarHeadShadowVerticalLength":0,"toolTipFontStyle":"normal","subtitlesShadow":false,"displayTooltipInTouchScreens":true,"toolTipFontWeight":"normal","subtitlesOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesTop":0,"toolTipOpacity":1,"toolTipTextShadowBlurRadius":1,"surfaceReticleSelectionColor":"#FFFFFF","progressBackgroundColor":["#FFFFFF"],"subtitlesGap":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"subtitlesFontWeight":"normal","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","class":"ViewerArea","subtitlesHorizontalAlign":"center","subtitlesTextShadowColor":"#000000","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowBlurRadius":1.5,"borderRadius":0,"subtitlesVerticalAlign":"bottom","toolTipShadowBlurRadius":1,"subtitlesFontSize":"3vmin","progressBottom":0,"playbackBarLeft":0,"displayTooltipInSurfaceSelection":true,"toolTipPaddingBottom":2,"doubleClickAction":"toggle_fullscreen","subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"subtitlesPaddingLeft":5,"toolTipShadowOpacity":1,"progressBorderSize":0,"playbackBarHeadHeight":15,"progressHeight":10,"toolTipBorderRadius":1,"playbackBarHeadShadowColor":"#000000","playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBarBorderRadius":0,"toolTipShadowHorizontalLength":0,"subtitlesPaddingRight":5,"toolTipPaddingLeft":3,"propagateClick":false,"subtitlesTextShadowOpacity":1,"playbackBarBorderRadius":0,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesEnabled":true,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderSize":0,"playbackBarHeadShadow":true,"shadow":false},{"id":"sequence_F2C5EA7B_F861_8C28_41E3_01B45836E615","class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"mp3Url":trans('audiores_EA3DF6DD_F860_8469_41E8_DFA5873D2C02.mp3Url'),"class":"AudioResource","gain":0.2,"fadeOutTime":3000,"id":"audiores_EA3DF6DD_F860_8469_41E8_DFA5873D2C02"}],"class":"Player","horizontalAlign":"left","verticalAlign":"top","scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"translate":TDV.Tour.Script.translate,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlays":TDV.Tour.Script.getOverlays,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"init":TDV.Tour.Script.init,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showWindow":TDV.Tour.Script.showWindow,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMainViewer":TDV.Tour.Script.getMainViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeech":TDV.Tour.Script.textToSpeech,"playAudioList":TDV.Tour.Script.playAudioList,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getKey":TDV.Tour.Script.getKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeJS":TDV.Tour.Script.executeJS,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setValue":TDV.Tour.Script.setValue,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setLocale":TDV.Tour.Script.setLocale,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"existsKey":TDV.Tour.Script.existsKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"unregisterKey":TDV.Tour.Script.unregisterKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"registerKey":TDV.Tour.Script.registerKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech},"vrPolyfillScale":0.75,"paddingRight":0,"backgroundPreloadEnabled":true,"mediaActivationMode":"window","children":["this.MainViewer_mobile","this.Image_F5D467D7_F860_8478_41EB_B206542913D3_mobile","this.Container_F6343B95_F860_8CF8_41ED_A157BCF9FE2E_mobile"],"borderRadius":0,"toolTipHorizontalAlign":"center","backgroundColor":["#242423"],"backgroundColorDirection":"vertical","contentOpaque":false,"height":"100%","gap":10,"scrollBarVisible":"rollOver","backgroundOpacity":1,"scrollBarMargin":2,"layout":"absolute","overflow":"hidden","propagateClick":false,"scrollBarOpacity":0.5,"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"mobileMipmappingEnabled":false,"borderSize":0,"defaultVRPointer":"laser"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Tue Dec 24 2024