!function(a){a(document).ready((function(){a(".navbarprimary .dropdowntoggle").click((function(){return a(this).parent("li").hasClass("navbarprimary-open")?a(this).parent("li").removeClass("navbarprimary-open"):a(this).parent("li").addClass("navbarprimary-open"),a(this).children("a").children("span").hasClass("fa-chevron-circle-down")?(a(this).children("a").children("span").removeClass("fa-chevron-circle-down"),a(this).children("a").children("span").addClass("fa-chevron-circle-right")):(a(this).children("a").children("span").removeClass("fa-chevron-circle-right"),a(this).children("a").children("span").addClass("fa-chevron-circle-down")),!1}));var e=a(".navbarprimary .navbar-collapse a");for(i=0,len=e.length;i<len;i++)e[i].addEventListener("focus",r,!0),e[i].addEventListener("blur",r,!0);function r(){for(var a=this;-1===a.className.indexOf("navbar-nav");)"li"===a.tagName.toLowerCase()&&(-1!==a.className.indexOf("focus")?a.className=a.className.replace(" focus",""):a.className+=" focus"),a=a.parentElement}}))}(jQuery);