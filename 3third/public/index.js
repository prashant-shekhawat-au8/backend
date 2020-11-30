console.log("object")
var newsArray = []

//paging
var state = {

    "page": 1,
    "rows": 30,
    "window":5,
}
function pagination(querySet, page, row) {

    var trimStart = (page - 1) * row
    var trimEnd = trimStart + row
    var trimData = querySet.slice(trimStart, trimEnd)

    var pages = Math.ceil(querySet.length / row)
    return {
        "querySet": trimData,
        "pages": pages
    }

}

fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        $(".main").append(`<div class="wait">please wait</div>`)
        for (i of json) {

            fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    newsArray.push(json)
                    
                })

        }
        setTimeout(function () {
           
             renderHTML(newsArray); }, 5000);
    })


function renderHTML(newsArray) {
    document.querySelector(".wait").innerHTML=``
    var pagi = pagination(newsArray, state.page, state.rows)

    console.log(pagi)
    var c = 0
    for (json of pagi.querySet) {


        let unix_timestamp = json.time
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
        c++;

        $(".parent").append(` <div class="heading">
     <h3> ${c}.</h3>
     <a href=${json.url}  target="_blank">${json.title}</a>
 </div>
 <div class="data">
     <span>${json.score} points by </span>
 <span>${json.by}</span>
     <span>${formattedTime} hour ago</span>
     <span> | hide | </span>
     <span style="display: none;">${json.kids}</span>
     <span class="comment1" onClick="handleComment(event)" >Comment</span>
 </div>`)

    }
    addButton(pagi.pages)
}

function addButton(pages) {
    document.querySelector(".button").innerHTML = ``
    for (var i = 1; i <= pages; i++) {
        $(".button").append(`<button onClick="handlepageclick(event)" >${i}</button>`)
    }
    $(".button").append(`<div class="kuch">more pages and  button will apppear as data loads</div>`)
}
function handlepageclick(event) {
    var data5 = event.target.textContent
    state.page = data5
    console.log(state.page)
    document.querySelector(".parent").innerHTML = ``
    
    renderHTML(newsArray)
}

//
function checkValidHash() {
    if (window.location.hash !== "#home" && window.location.hash !== "#individual") {
        window.location.hash = "#home"
    }
}

function renderPage(hashValue) {
    document.querySelector(hashValue).style.display = "block"
    if (hashValue == "#home") {

    }
}
function init() {
    checkValidHash();
    renderPage(window.location.hash);
}

window.addEventListener("hashchange", function (event) {
    console.log(window.location.hash)
    checkValidHash();
    document.querySelector("#home").style.display = "none"
    document.querySelector("#individual").style.display = "none"
    renderPage(window.location.hash)

})
init();


function handleComment(event) {
    document.querySelector(".main3").innerHTML = ``
    var com = event.target.previousSibling.previousSibling.textContent
    var comc = com.split(",");
    for (i of comc) {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                renderIndividual(json)
                console.log(json)

            })
    }
}


function renderIndividual(json) {

    window.location.hash = "#individual"
    $(".main3").append(`
    <h4 class="head"> Comment by ${json.by}</h4>
    <div class="commentindividual">${json.text}</div></br>
    `)

}