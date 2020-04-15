/* js Document */
/* Author: zq */
/* Time: 2014/10/9*/
/*鍏叡team*/
	var l = $(".team_list li").length;
   				 	
    $(".team_list ul").width(1124 * l);
    var newsIndex = 1;
    $(".team_r").click(function () {
        if (newsIndex < l) {
            var $wrap = $('.team_list ul')
            $wrap.stop(true, true).animate({
                marginLeft: -newsIndex * 140
            }, 800);
			$('.team_list ul li').eq(newsIndex).addClass('team_on').siblings().removeClass('team_on')
			var team_index = $('.team_list ul li').eq(newsIndex).attr('data-ask')
			$('.team_ask').html(team_index)
            newsIndex++
        }
       
    });
    $(".team_l").click(function () {
        if (newsIndex > 1) {
            var $wrap = $('.team_list ul')
            $wrap.stop(true, true).animate({
                marginLeft: -(newsIndex-2) * 140
            }, 800);
			$('.team_list ul li').eq(newsIndex-2).addClass('team_on').siblings().removeClass('team_on')
			var team_index = $('.team_list ul li').eq(newsIndex-2).attr('data-ask')
			$('.team_ask').html(team_index)
            newsIndex--
        }
        
    })		
	
	$('.team_list li').eq(0).addClass('team_on')
	var team_7Text = $('.team_list li:eq(0)').attr('data-ask')
	$('.team_ask').html(team_7Text)
	$('.team_list li').hover(function(){
		
		var team_text = $(this).attr('data-ask')
		$('.team_ask').html(team_text)
		
		$(this).addClass('team_on').siblings().removeClass('team_on')
		
		})			// JavaScript Document