/*! Max Mega Menu jQuery Plugin */
!function(e){"use strict";e.maxmegamenu=function(n,t){var a,i=this,s=e(n),l=s.siblings(".mega-menu-toggle"),m={event:s.attr("data-event"),effect:s.attr("data-effect"),effect_speed:parseInt(s.attr("data-effect-speed")),effect_mobile:s.attr("data-effect-mobile"),effect_speed_mobile:parseInt(s.attr("data-effect-speed-mobile")),panel_width:s.attr("data-panel-width"),panel_inner_width:s.attr("data-panel-inner-width"),mobile_force_width:s.attr("data-mobile-force-width"),mobile_overlay:s.attr("data-mobile-overlay"),mobile_state:s.attr("data-mobile-state"),second_click:s.attr("data-second-click"),vertical_behaviour:s.attr("data-vertical-behaviour"),document_click:s.attr("data-document-click"),breakpoint:s.attr("data-breakpoint"),unbind_events:s.attr("data-unbind"),hover_intent_timeout:s.attr("data-hover-intent-timeout"),hover_intent_interval:s.attr("data-hover-intent-interval")};i.settings={};var o=e("li.mega-menu-megamenu.mega-menu-item-has-children,li.mega-menu-flyout.mega-menu-item-has-children,li.mega-menu-tabbed > ul.mega-sub-menu > li.mega-menu-item-has-children,li.mega-menu-flyout li.mega-menu-item-has-children",n),g=e("li.mega-menu-megamenu li.mega-menu-item-has-children.mega-collapse-children > a.mega-menu-link",n);i.addAnimatingClass=function(n){if("disabled"!==i.settings.effect){e(".mega-animating").removeClass("mega-animating");var t=i.settings.effect_speed+parseInt(megamenu.timeout,10);n.addClass("mega-animating"),setTimeout((function(){n.removeClass("mega-animating")}),t)}},i.hideAllPanels=function(){e(".mega-toggle-on > a.mega-menu-link",s).each((function(){i.hidePanel(e(this),!1)}))},i.expandMobileSubMenus=function(){e(".mega-menu-item-has-children.mega-expand-on-mobile > a.mega-menu-link",s).each((function(){i.showPanel(e(this))})),"expand_all"==i.settings.mobile_state&&e(".mega-menu-item-has-children > a.mega-menu-link",s).each((function(){i.showPanel(e(this))})),"expand_active"==i.settings.mobile_state&&e("li.mega-current-menu-ancestor.mega-menu-item-has-children > a.mega-menu-link,li.mega-current-menu-item.mega-menu-item-has-children > a.mega-menu-linkli.mega-current-menu-parent.mega-menu-item-has-children > a.mega-menu-linkli.mega-current_page_ancestor.mega-menu-item-has-children > a.mega-menu-linkli.mega-current_page_item.mega-menu-item-has-children > a.mega-menu-link",s).each((function(){i.showPanel(e(this))}))},i.hideSiblingPanels=function(n,t){n.parent().parent().find(".mega-toggle-on").children("a.mega-menu-link").each((function(){i.hidePanel(e(this),t)}))},i.isDesktopView=function(){return Math.max(window.outerWidth,e(window).width())>i.settings.breakpoint},i.isMobileView=function(){return!i.isDesktopView()},i.showPanel=function(n){if(n.is("li.mega-menu-item")&&(n=n.find("a.mega-menu-link").first()),n.parent().triggerHandler("before_open_panel"),n.parent().find("[aria-expanded]").first().attr("aria-expanded","true"),e(".mega-animating").removeClass("mega-animating"),!i.isMobileView()||!n.parent().hasClass("mega-hide-sub-menu-on-mobile")){if(i.isDesktopView()&&(s.hasClass("mega-menu-horizontal")||s.hasClass("mega-menu-vertical"))&&!n.parent().hasClass("mega-collapse-children")&&i.hideSiblingPanels(n,!0),(i.isMobileView()&&s.hasClass("mega-keyboard-navigation")||"accordion"===i.settings.vertical_behaviour)&&i.hideSiblingPanels(n,!1),i.calculateDynamicSubmenuWidths(n),n.parent().hasClass("mega-collapse-children")||"slide"===i.settings.effect||i.isMobileView()&&("slide"===i.settings.effect_mobile||"slide_left"===i.settings.effect_mobile||"slide_right"===i.settings.effect_mobile)){var t=i.isMobileView()?i.settings.effect_speed_mobile:i.settings.effect_speed;n.siblings(".mega-sub-menu").css("display","none").animate({height:"show",paddingTop:"show",paddingBottom:"show",minHeight:"show"},t,(function(){e(this).css("display","")}))}n.parent().addClass("mega-toggle-on").triggerHandler("open_panel")}},i.hidePanel=function(n,t){if(n.is("li.mega-menu-item")&&(n=n.find("a.mega-menu-link").first()),n.parent().triggerHandler("before_close_panel"),n.parent().find("[aria-expanded]").first().attr("aria-expanded","false"),n.parent().hasClass("mega-collapse-children")||!t&&"slide"===i.settings.effect||i.isMobileView()&&("slide"===i.settings.effect_mobile||"slide_left"===i.settings.effect_mobile||"slide_right"===i.settings.effect_mobile)){var a=i.isMobileView()?i.settings.effect_speed_mobile:i.settings.effect_speed;n.siblings(".mega-sub-menu").animate({height:"hide",paddingTop:"hide",paddingBottom:"hide",minHeight:"hide"},a,(function(){n.siblings(".mega-sub-menu").css("display",""),n.parent().removeClass("mega-toggle-on").triggerHandler("close_panel")}))}else t&&n.siblings(".mega-sub-menu").css("display","none").delay(i.settings.effect_speed).queue((function(){e(this).css("display","").dequeue()})),n.siblings(".mega-sub-menu").find(".widget_media_video video").each((function(){this.player.pause()})),n.parent().removeClass("mega-toggle-on").triggerHandler("close_panel"),i.addAnimatingClass(n.parent())},i.calculateDynamicSubmenuWidths=function(n){if(n.parent().hasClass("mega-menu-megamenu")&&n.parent().parent().hasClass("max-mega-menu")&&i.settings.panel_width&&e(i.settings.panel_width).length>0)if(i.isDesktopView()){var t=s.offset(),a=e(i.settings.panel_width).offset();n.siblings(".mega-sub-menu").css({width:e(i.settings.panel_width).outerWidth(),left:a.left-t.left+"px"})}else n.siblings(".mega-sub-menu").css({width:"",left:""});if(n.parent().hasClass("mega-menu-megamenu")&&n.parent().parent().hasClass("max-mega-menu")&&i.settings.panel_inner_width&&e(i.settings.panel_inner_width).length>0){var l=0;l=e(i.settings.panel_inner_width).length?parseInt(e(i.settings.panel_inner_width).width(),10):parseInt(i.settings.panel_inner_width,10);var m=parseInt(n.siblings(".mega-sub-menu").innerWidth(),10);i.isDesktopView()&&l>0&&l<m?n.siblings(".mega-sub-menu").css({paddingLeft:(m-l)/2+"px",paddingRight:(m-l)/2+"px"}):n.siblings(".mega-sub-menu").css({paddingLeft:"",paddingRight:""})}},i.bindClickEvents=function(){var t=!1;e(document).on({touchmove:function(e){t=!0},touchstart:function(e){t=!1}}),e(document).on("click touchend",(function(n){t||"collapse"!==i.settings.document_click||e(n.target).closest(".max-mega-menu li").length||e(n.target).closest(".mega-menu-toggle").length||(i.hideAllPanels(),i.hideMobileMenu()),t=!1}));var a=e("> a.mega-menu-link",o).add(g);a.on("touchend.megamenu",(function(e){"hover_intent"===i.settings.event&&i.unbindHoverIntentEvents(),"hover"===i.settings.event&&i.unbindHoverEvents()})),a.not("[data-has-click-event]").on("click.megamenu",(function(n){if(!s.parent().hasClass("mega-keyboard-navigation"))return i.isDesktopView()&&e(this).parent().hasClass("mega-toggle-on")&&e(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")?"go"===i.settings.second_click?void 0:void n.preventDefault():void(t||i.isMobileView()&&e(this).parent().hasClass("mega-hide-sub-menu-on-mobile")||("go"!==i.settings.second_click&&!e(this).parent().hasClass("mega-click-click-go")||void 0===e(this).attr("href")?(n.preventDefault(),e(this).parent().hasClass("mega-toggle-on")?i.hidePanel(e(this),!1):i.showPanel(e(this))):e(this).parent().hasClass("mega-toggle-on")||(n.preventDefault(),i.showPanel(e(this)))))})),g.each((function(){e(this).attr("data-has-click-event","true")})),"disabled"===i.settings.second_click&&a.off("click.megamenu"),e(".mega-close-after-click:not(.mega-menu-item-has-children) > a.mega-menu-link",n).on("click",(function(){i.hideAllPanels(),i.hideMobileMenu()}))},i.bindHoverEvents=function(){o.on({"mouseenter.megamenu":function(){i.unbindClickEvents(),e(this).hasClass("mega-toggle-on")||i.showPanel(e(this).children("a.mega-menu-link"))},"mouseleave.megamenu":function(){!e(this).hasClass("mega-toggle-on")||e(this).hasClass("mega-disable-collapse")||e(this).parent().parent().hasClass("mega-menu-tabbed")||i.hidePanel(e(this).children("a.mega-menu-link"),!1)}})},i.bindHoverIntentEvents=function(){o.hoverIntent({over:function(){i.unbindClickEvents(),e(this).hasClass("mega-toggle-on")||i.showPanel(e(this).children("a.mega-menu-link"))},out:function(){!e(this).hasClass("mega-toggle-on")||e(this).hasClass("mega-disable-collapse")||e(this).parent().parent().hasClass("mega-menu-tabbed")||i.hidePanel(e(this).children("a.mega-menu-link"),!1)},timeout:i.settings.hover_intent_timeout,interval:i.settings.hover_intent_interval})},i.bindKeyboardEvents=function(){s.parent().on("keyup.megamenu",(function(n){var t=n.keyCode||n.which,a=e(n.target);9===t&&(s.parent().addClass("mega-keyboard-navigation"),a.parent().parent().is(".max-mega-menu")&&i.hideAllPanels())})),s.parent().on("keydown.megamenu",(function(n){var t=n.keyCode||n.which,a=e(n.target);if(32===t&&a.is(".mega-menu-link")&&s.parent().hasClass("mega-keyboard-navigation")&&(n.preventDefault(),a.parent().is(o)&&(a.parent().hasClass("mega-toggle-on")&&!a.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")?i.hidePanel(a):i.showPanel(a))),32===t&&a.is("mega-indicator")&&s.parent().hasClass("mega-keyboard-navigation")&&(n.preventDefault(),a.parent().parent().hasClass("mega-toggle-on")&&!a.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")?i.hidePanel(a.parent()):i.showPanel(a.parent())),27===t&&s.parent().hasClass("mega-keyboard-navigation")){var m=0!==e("> .mega-toggle-on",s).length;e("> .mega-toggle-on",s).find("[tabindex]:visible").first().focus(),i.hideAllPanels(),i.isMobileView()&&!m&&(i.hideMobileMenu(),e(".mega-menu-toggle-block, button.mega-toggle-animated",l).first().focus())}if(13===t&&s.parent().hasClass("mega-keyboard-navigation")){if(a.hasClass("mega-menu-toggle-block")&&(l.hasClass("mega-menu-open")?i.hideMobileMenu():i.showMobileMenu()),a.hasClass("mega-indicator"))return void(a.closest("li.mega-menu-item").hasClass("mega-toggle-on")&&!a.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")?i.hidePanel(a.parent()):i.showPanel(a.parent()));if(a.parent().is(o)){if(a.is("[href]")&&0!==a.siblings(".mega-indicator[tabindex]:visible").length)return;if(!1===a.is("[href]"))return void(a.parent().hasClass("mega-toggle-on")&&!a.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")?i.hidePanel(a):i.showPanel(a));if(a.parent().hasClass("mega-toggle-on")&&!a.closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed"))return;n.preventDefault(),i.showPanel(a)}}if(39===t&&i.isDesktopView()&&s.parent().hasClass("mega-keyboard-navigation")&&s.hasClass("mega-menu-horizontal")){n.preventDefault();var g=e("> .mega-toggle-on",s).nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first();0===g.length&&(g=e(":focus",s).parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first()),0===g.length&&(g=e(":focus",s).parent().parent().nextAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").first()),i.hideAllPanels(),g.focus()}if(37===t&&i.isDesktopView()&&s.parent().hasClass("mega-keyboard-navigation")&&s.hasClass("mega-menu-horizontal")){n.preventDefault();var u=e("> .mega-toggle-on",s).prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last();0===u.length&&(u=e(":focus",s).parent().prevAll("li.mega-menu-item:visible").find("> a.mega-menu-link, .mega-search input[type=text]").last()),0===u.length&&(u=e(":focus",s).parent()),i.hideAllPanels(),u.focus()}})),s.parent().on("focusout.megamenu",(function(e){s.parent().hasClass("mega-keyboard-navigation")&&setTimeout((function(){s.parent().find(":focus").length>0||(s.parent().removeClass("mega-keyboard-navigation"),i.hideAllPanels(),i.hideMobileMenu())}),10)}))},i.unbindAllEvents=function(){e("ul.mega-sub-menu, li.mega-menu-item, li.mega-menu-row, li.mega-menu-column, a.mega-menu-link, .mega-indicator",n).off().unbind()},i.unbindClickEvents=function(){e("> a.mega-menu-link",o).not(g).off("click.megamenu touchend.megamenu")},i.unbindHoverEvents=function(){o.unbind("mouseenter.megamenu mouseleave.megamenu")},i.unbindHoverIntentEvents=function(){o.unbind("mouseenter mouseleave").removeProp("hoverIntent_t").removeProp("hoverIntent_s")},i.unbindKeyboardEvents=function(){s.parent().off("keyup.megamenu keydown.megamenu focusout.megamenu")},i.unbindMegaMenuEvents=function(){"hover_intent"===i.settings.event&&i.unbindHoverIntentEvents(),"hover"===i.settings.event&&i.unbindHoverEvents(),i.unbindClickEvents(),i.unbindKeyboardEvents()},i.bindMegaMenuEvents=function(){i.unbindMegaMenuEvents(),i.isDesktopView()&&"hover_intent"===i.settings.event&&i.bindHoverIntentEvents(),i.isDesktopView()&&"hover"===i.settings.event&&i.bindHoverEvents(),i.bindClickEvents(),i.bindKeyboardEvents()},i.checkWidth=function(){i.isMobileView()&&"desktop"===s.data("view")&&i.switchToMobile(),i.isDesktopView()&&"mobile"===s.data("view")&&i.switchToDesktop(),i.calculateDynamicSubmenuWidths(e("> li.mega-menu-megamenu > a.mega-menu-link",s))},i.reverseRightAlignedItems=function(){!e("body").hasClass("rtl")&&s.hasClass("mega-menu-horizontal")&&s.append(s.children("li.mega-item-align-right").get().reverse())},i.addClearClassesToMobileItems=function(){e(".mega-menu-row",s).each((function(){e("> .mega-sub-menu > .mega-menu-column:not(.mega-hide-on-mobile)",e(this)).filter(":even").addClass("mega-menu-clear")}))},i.initDesktop=function(){s.data("view","desktop"),i.bindMegaMenuEvents(),i.initIndicators()},i.switchToDesktop=function(){s.data("view","desktop"),i.bindMegaMenuEvents(),i.reverseRightAlignedItems(),i.hideAllPanels(),i.hideMobileMenu(!0)},i.initMobile=function(){i.switchToMobile()},i.switchToMobile=function(){s.data("view","mobile"),i.bindMegaMenuEvents(),i.initIndicators(),i.reverseRightAlignedItems(),i.addClearClassesToMobileItems(),i.hideAllPanels(),i.expandMobileSubMenus()},i.initToggleBar=function(){l.on("click",(function(n){e(n.target).is(".mega-menu-toggle, .mega-menu-toggle-custom-block *, .mega-menu-toggle-block, .mega-menu-toggle-animated-block, .mega-menu-toggle-animated-block *, .mega-toggle-blocks-left, .mega-toggle-blocks-center, .mega-toggle-blocks-right, .mega-toggle-label, .mega-toggle-label span")&&(n.preventDefault(),e(this).hasClass("mega-menu-open")?i.hideMobileMenu():i.showMobileMenu())}))},i.initIndicators=function(){e(".mega-indicator",s).not("[data-has-click-event]").on("click.megamenu",(function(n){n.preventDefault(),n.stopPropagation(),e(this).closest(".mega-menu-item").hasClass("mega-toggle-on")?e(this).closest("ul.mega-sub-menu").parent().hasClass("mega-menu-tabbed")&&!i.isMobileView()||i.hidePanel(e(this).parent(),!1):i.showPanel(e(this).parent(),!1)})),e(".mega-indicator",s).each((function(){e(this).attr("data-has-click-event","true")}))},i.hideMobileMenu=function(n){n=n||!1,(l.is(":visible")||n)&&(a=setTimeout((function(){e("body").removeClass(s.attr("id")+"-mobile-open"),e("html").removeClass(s.attr("id")+"-off-canvas-open")}),i.settings.effect_speed_mobile),e(".mega-toggle-label, .mega-toggle-animated",l).attr("aria-expanded","false"),"slide"!==i.settings.effect_mobile||n?(s.css({width:"",left:"",display:""}),l.removeClass("mega-menu-open")):s.animate({height:"hide"},i.settings.effect_speed_mobile,(function(){s.css({width:"",left:"",display:""}),l.removeClass("mega-menu-open")})),s.triggerHandler("mmm:hideMobileMenu"))},i.showMobileMenu=function(){l.is(":visible")&&(clearTimeout(a),e("body").addClass(s.attr("id")+"-mobile-open"),i.expandMobileSubMenus(),"slide_left"!==i.settings.effect_mobile&&"slide_right"!==i.settings.effect_mobile||e("html").addClass(s.attr("id")+"-off-canvas-open"),e(".mega-toggle-label, .mega-toggle-animated",l).attr("aria-expanded","true"),"slide"===i.settings.effect_mobile&&s.animate({height:"show"},i.settings.effect_speed_mobile),l.addClass("mega-menu-open"),i.toggleBarForceWidth(),s.triggerHandler("mmm:showMobileMenu"))},i.toggleBarForceWidth=function(){if(e(i.settings.mobile_force_width).length&&("slide"===i.settings.effect_mobile||"disabled"===i.settings.effect_mobile)){var n=l.offset(),t=e(i.settings.mobile_force_width).offset();s.css({width:e(i.settings.mobile_force_width).outerWidth(),left:t.left-n.left+"px"})}},i.init=function(){s.triggerHandler("before_mega_menu_init"),i.settings=e.extend({},m,t),s.removeClass("mega-no-js"),i.initToggleBar(),"true"===i.settings.unbind_events&&i.unbindAllEvents(),e(window).on("load",(function(){i.calculateDynamicSubmenuWidths(e("> li.mega-menu-megamenu > a.mega-menu-link",s))})),i.isDesktopView()?i.initDesktop():i.initMobile(),e(window).resize((function(){i.checkWidth()})),s.triggerHandler("after_mega_menu_init")},i.init()},e.fn.maxmegamenu=function(n){return this.each((function(){if(void 0===e(this).data("maxmegamenu")){var t=new e.maxmegamenu(this,n);e(this).data("maxmegamenu",t)}}))},e((function(){e(".max-mega-menu").maxmegamenu()}))}(jQuery);