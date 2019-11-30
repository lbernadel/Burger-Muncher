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

$(".eat").click((event) => {

    let id = $(event.target).parent().attr('data-id')

    $.ajax ({
        url: `/api/burgers/${id}`,
        method: "PUT",
        data: {
            isEaten: 1
        }
    }).then(() => {
        location.reload()
    }).catch(err => {
        console.log(err)
    });
});