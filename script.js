$(document).ready(() => {

    $width_win = $(window).width();

    $.each($('.item'), (i, v) => {
        $quantity_el = i = i + 1;
        $div_el = v;

        for ($key in $data) {
            if ($key == $quantity_el) {
                $($div_el).css('backgroundImage', `url(${$data[$key]})`);
            }
        };

    });

    Start($width_win);

    function distributionItem($quantity_item) {
        $width_winItems = $('.items_carusel').width();
        $width_gap = parseInt($('.wrap').css('gap'));
        $width_item = (($width_winItems - ($width_gap * $quantity_item)) / $quantity_item).toFixed(4);
        $width_wrap = ($width_item * $quantity_el) + ($width_gap * $quantity_el);
        $('.wrap').css('width', `${$width_wrap}px`);
        $('.item').css('width', `${$width_item}px`);
        $scrollDistance = parseFloat($width_item) + parseFloat($width_gap);
        console.log($scrollDistance);
    };

    function disabledCarusel() {
        $('.scrollLeft, .scrolRight').css({
            disabled: true,
            opacity: 0.5,
            cursor: 'unset'
        });
        $('.wrap').css({
            width: '100%',
            justifyContent: 'space-around'
        });
        $width_winItems = $('.items_carusel').width();
        $width_gap = parseInt($('.wrap').css('gap'));
        $width_item = (($width_winItems / $quantity_el)).toFixed(3);
        $('.item').css('width', `${$width_item}px`);
    };

    function conditions($el) {
        if ($quantity_el > $el) {
            $quantity_item = $el;
            distributionItem($quantity_item);
        } else {
            disabledCarusel();
        }
    }

    function Start($width_win) {
        if ($width_win > 1025) {
            $el = 5;
            conditions($el);
        } else if ($width_win >= 801 && $width_win <= 1024) {
            $el = 4;
            conditions($el);
        } else if ($width_win >= 601 && $width_win <= 800) {
            $el = 3;
            conditions($el);
        } else if ($width_win >= 481 && $width_win <= 600) {
            $el = 2;
            conditions($el);
        } else {
            $el = 1;
            conditions($el);
        }
    };

    $(window).resize(() => {
        $('.wrap').css('left', 0);
        $width_win = $(window).width();
        Start($width_win);
    });
    if (parseInt($('.wrap').css('left')) == 0) {
        $('.scrolRight').prop('disabled', true).css('opacity', '0.5',);
    }

});

function clickLeft() {

    $('.wrap').animate({ 'left': `-=${$scrollDistance}px` }, 'slow');
    console.log(-parseFloat($('.wrap').css('right')));
    $('.scrolRight').prop('disabled', false).css('opacity', '1',);
    if ($el && ($scrollDistance.toFixed(1)) == (-parseFloat($('.wrap').css('right'))).toFixed(1)) {
        $('.scrollLeft').prop('disabled', true).css('opacity', '0.5',);
    }

};

function clickRight() {

    $('.wrap').animate({ 'left': `+=${$scrollDistance}px` }, 'slow');
    console.log(-parseFloat($('.wrap').css('left')).toFixed(1));
    $('.scrollLeft').prop('disabled', false).css('opacity', '1',);
    if ($scrollDistance.toFixed(1) == (-parseFloat($('.wrap').css('left'))).toFixed(1)) {
        $('.scrolRight').prop('disabled', true).css('opacity', '0.5',);
    }

};

function ourWorkVideo() {
    $('.position_fixed').css('display', 'flex');
    $('button').prop('disabled', true);
}
function ourWorkSkud() {
    $('.position_fixed').css('display', 'flex');
    $('button').prop('disabled', true);
}
function ourWorkElprod() {
    $('.position_fixed').css('display', 'flex');
    $('button').prop('disabled', true);
}

function closeCarusel() {
    $('.position_fixed').css('display', 'none');
    $('button').prop('disabled', false);
}
