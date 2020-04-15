(function($){
	$.fn.superfish = function(op){
		var sf = $.fn.superfish,
			c = sf.c,
			$arrow = $(['<span class="',c.arrowClass,'"> &#187;</span>'].join('')),
			over = function(){
				var $$ = $(this), menu = getMenu($$);
				clearTimeout(menu.sfTimer);
				$$.showSuperfishUl().siblings().hideSuperfishUl();
			},
			out = function(){
				var $$ = $(this), menu = getMenu($$), o = sf.op;
				clearTimeout(menu.sfTimer);
				menu.sfTimer=setTimeout(function(){
					o.retainPath=($.inArray($$[0],o.$path)>-1);
					$$.hideSuperfishUl();
					if (o.$path.length && $$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path);}
				},o.delay);	
			},
			getMenu = function($menu){
				var menu = $menu.parents(['ul.',c.menuClass,':first'].join(''))[0];
				sf.op = sf.o[menu.serial];
				return menu;
			},
			addArrow = function($a){ $a.addClass(c.anchorClass).append($arrow.clone()); };
			
		return this.each(function() {
			var s = this.serial = sf.o.length;
			var o = $.extend({},sf.defaults,op);
			o.$path = $('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){
				$(this).addClass([o.hoverClass,c.bcClass].join(' '))
					.filter('li:has(ul)').removeClass(o.pathClass);
			});
			sf.o[s] = sf.op = o;
			
			$('li:has(ul)',this)[($.fn.hoverIntent && !o.disableHI) ? 'hoverIntent' : 'hover'](over,out).each(function() {
				if (o.autoArrows) addArrow( $('>a:first-child',this) );
			})
			.not('.'+c.bcClass)
				.hideSuperfishUl();
			
			var $a = $('a',this);
			$a.each(function(i){
				var $li = $a.eq(i).parents('li');
			});
			o.onInit.call(this);
			
		}).each(function() {
			var menuClasses = [c.menuClass];
			if (sf.op.dropShadows  && !($.browser.msie && $.browser.version < 7)) menuClasses.push(c.shadowClass);
			$(this).addClass(menuClasses.join(' '));
		});
	};
	var sf = $.fn.superfish;
	sf.o = [];
	sf.op = {};
	sf.IE7fix = function(){
		var o = sf.op;
		if ($.browser.msie && $.browser.version > 6 && o.dropShadows && o.animation.opacity!=undefined)
			this.toggleClass(sf.c.shadowClass+'-off');
		};
	sf.c = {
		bcClass     : 'sf-breadcrumb',
		menuClass   : 'sf-js-enabled',
		anchorClass : 'sf-with-ul',
		arrowClass  : 'sf-sub-indicator',
		shadowClass : 'sf-shadow'
	};
	sf.defaults = {
		hoverClass	: 'sfHover',
		pathClass	: 'overideThisToUse',
		pathLevels	: 2,
		delay		: 1000,
		animation	: {height:'show'},
		speed		: 'normal',
		autoArrows	: false,
		dropShadows : false,
		disableHI	: false,		// true disables hoverIntent detection
		onInit		: function(){}, // callback functions
		onBeforeShow: function(){},
		onShow		: function(){},
		onHide		: function(){}
	};
	$.fn.extend({
		hideSuperfishUl : function(){
			var o = sf.op,
				not = (o.retainPath===true) ? o.$path : '';
			o.retainPath = false;
			var $ul = $(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass)
					.find('>ul').hide();
			o.onHide.call($ul);
			return this;
		},
		showSuperfishUl : function(){
			var o = sf.op,
				sh = sf.c.shadowClass+'-off',
				$ul = this.addClass(o.hoverClass)
					.find('>ul:hidden');
			sf.IE7fix.call($ul);
			o.onBeforeShow.call($ul);
			$ul.animate(o.animation,o.speed,function(){ sf.IE7fix.call($ul); o.onShow.call($ul); });
			return this;
		}
	});
})(jQuery);
/*---------------------*/
$(function(){
	$('.sf-menu').superfish({speed:'fast'});
});
(function($){
	
	//plugin's default options
	var settings = {
		prependTo: 'nav',				//insert at top of page by default
		switchWidth: 767,				//width at which to switch to select, and back again
		topOptionText: '导航菜单'	//default "unselected" state
	},
	
	menuCount = 0,						//used as a unique index for each menu if no ID exists
	uniqueLinks = [];					//used to store unique list items for combining lists
	//go to page
	function goTo(url){document.location.href = url;}
	
	//does menu exist?
	function menuExists(){return ($('.mnav').length) ? true : false;}
	//validate selector's matched list(s)
	function isList($this){
		var pass = true;
		$this.each(function(){
			if(!$(this).is('ul') && !$(this).is('ol')){
				pass=false;
			}
		});
		return pass;
	}//isList()
	//function to decide if mobile or not
	function isMobile(){return ($(document).width() <= settings.switchWidth);}
	
	//function to get text value of element, but not it's children
	function getText($item){return $.trim($item.clone().children('ul, ol').remove().end().text());}
	
	//function to check if URL is unique
	function isUrlUnique(url){return ($.inArray(url, uniqueLinks) === -1) ? true : false;}
	//function to create options in the select menu
	function createOption($item, $container, text){
		//if no text param is passed, use list item's text, otherwise use settings.groupPageText
		var $selected='', $disabled='', $sel_text='';
		
		if ($item.hasClass('current')) $selected='selected';
		if ($item.hasClass('disabled')) {
			if ($('.current').length) $disabled='disabled';
			else $disabled='selected';
		}
		
		$sel_text=$.trim(getText($item));
		$sel_text = $sel_text.replace('»', '');
		if ($item.parent('ul ul').length) $sel_text = ' – ' + $sel_text;
		if ($item.parent('ul ul ul').length) $sel_text = '– ' + $sel_text;
		if ($item.parent('ul ul ul ul').length) $sel_text = '– ' + $sel_text;
		if(!text){$('<option value="'+$item.find('a:first').attr('href')+'" ' + $selected + ' ' + $disabled + '>' + $sel_text +'</option>').appendTo($container);}
		else {$('<option value="'+$item.find('a:first').attr('href')+'" ' + $selected + ' ' + $disabled + '>'+text+'</option>').appendTo($container);}
	}//createOption()
	
	//function to create submenus
	function createGroup($group, $container){
		//loop through each sub-nav list
		$group.children('ul, ol').each(function(){
			$(this).children('li').each(function(){
				createOption($(this), $container);
				
				$(this).each(function(){
					var $li_ch = $(this),
						$container_ch =  $container;
					createGroup($li_ch, $container_ch);
				});
			});
		});
		
	}//createGroup()
	
	//function to create <select> menu
	function createSelect($menu){
		//create <select> to insert into the page
		var $select = $('<select id="mm'+menuCount+'" class="mnav">');
		menuCount++;
		
		//create default option if the text is set (set to null for no option)
		if(settings.topOptionText){createOption($('<li class="disabled"><a href="#">'+settings.topOptionText+'</a></li>'), $select);}
		
		//loop through first list items
		$menu.children('li').each(function(){
			var $li = $(this);
			//if nested select is wanted, and has sub-nav, add optgroup element with child options
			if($li.children('ul, ol').length){
				createOption($li, $select);
				createGroup($li, $select);
			}
			
			//otherwise it's a single level select menu, so build option
			else {createOption($li, $select);}
		});
		
		//add change event and prepend menu to set element
		$select
			.change(function(){goTo($(this).val());})
			.prependTo(settings.prependTo);
	}//createSelect()
	
	//function to run plugin functionality
	function runPlugin(){
		//menu doesn't exist
		if(isMobile() && !menuExists()){
			$menus.each(function(){
				createSelect($(this));
			});
		}
		//menu exists, and browser is mobile width
		if(isMobile() && menuExists()){
			$('.mnav').show();
			$menus.hide();
		}
		//otherwise, hide the mobile menu
		if(!isMobile() && menuExists()){
			$('.mnav').hide();
			$menus.show();
		}
	}//runPlugin()
	//plugin definition
	$.fn.mobileMenu = function(options){
		//override the default settings if user provides some
		if(options){$.extend(settings, options);}
		//check if user has run the plugin against list element(s)
		if(isList($(this))){
			$menus = $(this);
			runPlugin();
			$(window).resize(function(){runPlugin();});
		} else {
			alert('mobileMenu only works with <ul>/<ol>');
		}
	};//mobileMenu()
})(jQuery);
$(document).ready(function(){
	$('.sf-menu').mobileMenu();
});
$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,
	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},
	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
		var regM = /ipod|ipad|iphone/gi,
			result = ua.match(regM)
		if(!result) {
			$('.sf-menu li').each(function(){
				if($(">ul", this)[0]){
					$(">a", this).toggle(
						function(){
							return false;
						},
						function(){
							window.location.href = $(this).attr("href");
						}
					);
				} 
			})
		}
	}
});
var ua=navigator.userAgent.toLocaleLowerCase(),
	regV = /ipod|ipad|iphone/gi,
	result = ua.match(regV),
	userScale="";
if(!result){
	userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')
// Mobile Menu/banner
$(document).ready(function() {   
var isMobile = {
Android: function() {  
return navigator.userAgent.match(/Android/i) ? true : false;  
},  
BlackBerry: function() {  
return navigator.userAgent.match(/BlackBerry/i) ? true : false;  
},  
iOS: function() {  
return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;  
},  
Windows: function() {  
return navigator.userAgent.match(/IEMobile/i) ? true : false;  
},  
any: function() {  
return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());  
}}; 
if(screen.width>767 && screen.width<=960){		
$('.banner img[data-thumb]').each(function(){
$(this).attr("src", $(this).attr("data-thumb"));
});}; 
if( isMobile.any() )   {  
$(document).ready(function(){$("#menu_m").click(function(){$("#menu_list").toggle();});});
$(document).ready(function(){$('.banner img[data-mobile]').each(function(){$(this).attr("src", $(this).attr("data-mobile"));})});

}});