$(document).ready(function(){
    
    function loadpage(page){
        $.ajax({
            url : page + '.html',
            success : function(data){
               $("#special").html(data)
               if(page === 'home'){
                datafetching()
               }
            }

        })
    }


    $("#home").click(function(e){
        e.preventDefault()
        loadpage("home")
    })

    $("#about").click(function(e){
        e.preventDefault()
        loadpage("about")
    })

    $("#contact").click(function(e){
        e.preventDefault()
        loadpage("contact")
    })

    $("#services").click(function(e){
        e.preventDefault(),
        loadpage("service")
    })

    loadpage("home")

    // $(".dropdown-menu a").click(function(e){
    //     e.preventDefault()
    //     loadpage(this.page)
    //     $(".dropdown-menu").removeClass('show')
    // })

    function datafetching() {
        $.ajax({
            url: "data.json",
            type: "get",
            success: function (user) {
                let myhtml = ""
                user.forEach(users => {
                    myhtml += `<div class="card" style="width: 18rem;margin:10px;">
  <img src="${users.p_image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${users.p_name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">buy the birds</a>
  </div>
</div>`
                })
                $("#myrow").html(myhtml)
            }
        })
    }
    datafetching()
})