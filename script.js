$('.notif-header span').text($('.notif-unread').length)
$('.notif.notif-unread .post-desc').after('<div class="dot"></div>')

$('.notif-header p').on('click', (event) => {

    if (event.target.textContent === "Mark all as read") {
        event.target.textContent = "Mark all as unread"

        if ($('.notif').hasClass('notif-unread')) {
            $('.notif.notif-unread').addClass('notif-read')
            $('.notif.notif-unread').removeClass('notif-unread')
            $('.dot').css('display', 'none')
        }
    }
    else {
        event.target.textContent = "Mark all as read"
        $('.dot').remove()

        if ($('.notif').hasClass('notif-read')) {
            $('.notif.notif-read').addClass('notif-unread')
            $('.notif.notif-read').removeClass('notif-read')
            $('.dot').css('display', 'inline-block')
        }

        //  console.log($('.dot'))
        $('.notif.notif-unread .post-desc').after('<div class="dot"></div>')
    }

    $('.notif-header span').text($('.notif-unread').length)
})

$('.notif').on('click', (event) => {

    if (event.target.classList.contains('notif-unread')) {

        event.target.classList.remove('notif-unread')
        event.target.classList.add('notif-read')
        event.target.querySelector('.dot').remove()

        let unreadLength = $('.notif-unread').length
        $('.notif-header span').text(unreadLength)
        // console.log("Length " + unreadLength)
        if (unreadLength <= 0) {
            $('.notif-header p').text("Mark all as unread")
        }
    }
})
