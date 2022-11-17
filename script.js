const markAllAsReadEvent = () => {

}

$('.notif-header p').on('click', (event) => {
    //sets unread text counter to 0.

    $('.notif-header span').text(0)

    // $('notif notif-unread').removeClass('.notif-unread')
    if ($('.notif').hasClass('notif-unread')) {
        $('.notif').removeClass('notif-unread')
    }
    //
})
