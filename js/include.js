jQuery(document).ready((function(d){d(".dropdown li").hover((function(){d(this).addClass("hover")}),(function(){d(this).removeClass("hover")})),d(".dropdown li:has(ul)").addClass("parent"),d("ul li:first-child").addClass("first-child"),d("ul li:last-child").addClass("last-child")}));