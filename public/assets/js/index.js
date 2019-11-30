$("#submitBurger").on("submit", event => {
    event.preventDefault()
    
    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data:{ burger_name: $("#burgerName").val().trim()}

    }).then( res => {
        location.reload()    
    });
});

$(".eat").click(() => {

    let id = $(this).parent().attr('data-id')

    $.ajax ({
        url: `/api/burgers/${id}`,
        method: "PUT",
        data: {
            isEaten: true
        }
    }).then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err)
        location.reload()
    });
});