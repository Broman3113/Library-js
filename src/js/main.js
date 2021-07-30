import $ from './lib/lib';

$('button').on('click', function () {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
})

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme1').addClass('hi'));

console.log($('.findme').eq(0).siblings());
