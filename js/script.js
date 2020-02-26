let songName = []
let songArtist = []
let songLength = []
let image = []
let link = []

$("#add").click(function(){
    songArtist.push($("#artist").val());
    songArtist.forEach(function(artist){
        $("#artists").append(artist);
    })

    songName.push($("#song").val());
    songName.forEach(function(song){
        $("#songs").append(song);
    })

    songLength.push($("#length").val());
    songLength.forEach(function(length){
        $("#lengths").append(length);
    })

    image.push($("#images").val());
    image.forEach(function(picture){
        $("#images").append(picture);
    })

    link.push($("#link").val());
    link.forEach(function(links){
        $("#links").append(links);
    })
})

