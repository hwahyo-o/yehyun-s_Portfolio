$(function () {
    $('.home').click(function () {
        $('.mainhome').fadeOut();
        $('.wrap').css({ 'display': 'flex' });
    })
    $('.home ul li').mouseenter(function () {
        $('.mainhome').fadeOut();
        $('.wrap').css({ 'display': 'flex' });
    })
})
// main home


$(function () {
    $('.tab ul').click(function () {
        $(this).addClass('active');
        $(this).find('div').addClass('on');
        $(this).siblings().removeClass('active');
        $(this).siblings().find('div').removeClass('on');
    });
})
// header


$(function () {
    $('.tab ul:nth-child(1)').click(function () {
        $('#indexfile').fadeOut();
        $('#myprofile').fadeIn();
    })
    $('.tab ul:nth-child(2)').click(function () {
        $('#myprofile').fadeOut();
        $('#indexfile').css({ 'display': 'block' });
        $('#indexfile').fadeIn();
    })
})
// container


$(function () {
    $('.aepro .studio li a p').mouseenter(function () {
        $('.aepro .indgroup, .aepro .studio').find('img').attr({ 'src': 'img/디렉터리2.png', 'alt': '디렉터리2' });
    })
    $('.aepro .2d li a p').mouseenter(function () {
        $('.aepro .indgroup, .aepro .2d').find('img').attr({ 'src': 'img/디렉터리2.png', 'alt': '디렉터리2' });
    })
    $('.xd .web li a p').mouseenter(function () {
        $('.xd .indgroup, .xd .web').find('img').attr({ 'src': 'img/디렉터리2.png', 'alt': '디렉터리2' });
    })
    $('.xd .mobile li a p').mouseenter(function () {
        $('.xd .indgroup, .xd .mobile').find('img').attr({ 'src': 'img/디렉터리2.png', 'alt': '디렉터리2' });
    })
    $('.aipo ul li a p').mouseenter(function () {
        $('.aipo').find('img').attr({ 'src': 'img/디렉터리2.png', 'alt': '디렉터리2' });
    })
    $('#indexfile div ul li p').mouseleave(function () {
        $('.aepro, .xd, .aipo').find('img').attr({ 'src': 'img/디렉터리1.png', 'alt': '디렉터리1' });
    })
})
// indexfile



$(function () {
    $('#indexfile div ul li a p').click(function () {
        $('.content').css({ 'display': 'block' });
        $('.content').scrollTop(0);
        $('.con, .desc2 .sauce, #video1 .desc3 .sauce, #anima1 .desc3 .sauce, #anima2 .desc3 .sauce').hide();
    })
    $('#indexfile p.1').click(function () {
        $('#video1').css({ 'display': 'block' });
    })
    $('#indexfile p.2').click(function () {
        $('#video2').css({ 'display': 'block' });
    })
    $('#indexfile p.3').click(function () {
        $('#anima1').css({ 'display': 'block' });
    })
    $('#indexfile p.4').click(function () {
        $('#anima2').css({ 'display': 'block' });
    })
    $('#indexfile p.5').click(function () {
        $('#design1').css({ 'display': 'block' });
    })
    $('#indexfile p.6').click(function () {
        $('#mob1').css({ 'display': 'block' });
    })
    $('#indexfile p.7').click(function () {
        $('#gra1').css({ 'display': 'block' });
    })
    $('#indexfile p.8').click(function () {
        $('#design2').css({ 'display': 'block' });
    })
    $('#indexfile p.9').click(function () {
        $('#design3').css({ 'display': 'block' });
    })
})
// .content 안의 내용물 팝업창 띄우기



$(document).ready(function() {
    $('#x').click(function() {
        // 모든 .con 요소 숨기기
        $('.content').hide();

        // 모든 video 요소 정지 및 리셋
        $('video').each(function() {
            this.pause(); // 재생 중지
            this.currentTime = 0; // 재생 위치 리셋
        });

        // 유튜브 iframe 정지하기
        $('#ytPlayer').attr('src', $('#ytPlayer').attr('src')); // src를 다시 설정하여 정지
    });
});

// .content 안의 비디오 일시정지 및 창 닫기



$(function () {
    $('.content .desc2 h3').click(function () {
        $('.desc2 .sauce').toggle();
    })
})
$(function () {
    $('#video1 .desc3 h3').click(function () {
        $('#video1 .desc3 .sauce').toggle();
    })
})
$(function () {
    $('#anima1 .desc3 h3').click(function () {
        $('#anima1 .desc3 .sauce').toggle();
    })
})
$(function () {
    $('#anima2 .desc3 h3').click(function () {
        $('#anima2 .desc3 .sauce').toggle();
    })
})