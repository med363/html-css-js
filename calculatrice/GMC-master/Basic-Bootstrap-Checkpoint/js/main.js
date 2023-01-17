$('.interests i').on('mouseenter', (e) => {
    console.log('enter')
    $(e.currentTarget.nextSibling).toggleClass('show')
})
$('.interests i').on('mouseleave', (e) => {
    console.log('leave')
    $(e.currentTarget.nextSibling).toggleClass('show')
})

console.log('just testing');