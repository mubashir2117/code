$("#input").on('keydown', function (e) {
    if (e.keyCode == 13) {
        $("#search").click();
    }
})
    $("#search").click(function () {
        $("#row").html('');
        input = $("#input").val();
        const url = `http://www.omdbapi.com/?s=${input}&apikey=704c6ce7`;
        $.ajax({
            url: url,
            type: "GET",
        dataType: "JSON",
        success: function (accept) {
            for (i of accept.Search) {
                $("#row").append(
                    `<div class="card" style="width: 18rem; margin:auto">
             <img class="card-img-top" src="${i.Poster}" alt="Card image cap">
             <div class="card-body">
                 <h5 class="card-title">${i.Title}</h5>
                 <p class="card-text">${i.Year}</p>
                 <p class="card-text">${i.Type}</p>
                 <a href="#" class="btn btn-primary">${i.imdbID}</a>
                 </div>
                 </div>`
                 )
                }
            },
            error: function (accept) {
                console.log(accept)
            }
        })
        
        
})

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '0.5s';
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '0.5s';
    }
});