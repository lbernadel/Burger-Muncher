$("#submitBurger").on("submit", event => {
    event.preventDefault()
    
    const newBurger = {
        burger_name: $("#burger_name").val().trim()
    }

    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: newBurger
    }).then( res => {
        console.log(res)
    })
})