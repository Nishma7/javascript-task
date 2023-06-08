var previous = document.querySelector("#pre");
var play = document.querySelector("#play");
var next = document.querySelector("#next");
var title = document.querySelector("#title");
var artist = document.querySelector("#artist");
var slider = document.querySelector("#duration_slider");
var track_image = document.querySelector("#track_image");

var timer;
var autoplay = 1;

var index_no=0;
var playing_songs=false;

var track = document.createElement('audio');

var allSongs = [
    {
        name : "First Song",
        path : "audio/vathi.mpeg",
        img : "Vaa-Vaathi.jpg",
        artist : "Danush"
    },
    {
        name : "Second Song",
        path : "audio/viduthalai.mpeg",
        img : "viduthalai.jpg",
        artist : "Soori"
    },
    {
        name : "Third Song",
        path : "audio/marian.mpeg",
        img : "marian.jpg",
        artist : "Danush"
    }
]

function load_track(index_no){
    clearInterval(timer);
    reset_slider();

    track.src = allSongs[index_no].path;
    title.innerHTML=allSongs[index_no].name;
    track_image.src=allSongs[index_no].img;
    artist.innerHTML=allSongs[index_no].artist;

    timer=setInterval(range_slider,1000);
    total.innerHTML=allSongs.length;
    present.innerHTML=index_no +1;
}

load_track(index_no);


function justplay(){
    if(playing_songs==false){
        playsong()
    }
    else{
        pausesong();
    }
}


function reset_slider(){
    slider.value=0;

}


function playsong(){
    track.play();
    playing_songs=true;
    play.innerHTML='<i class="fa fa-solid fa-pause"></i>';
}

function pausesong(){
    track.pause();
    playing_songs=false;
    play.innerHTML='<i class="fa fa-solid fa-play"></i>';
}

function next_song(){
   if(index_no < allSongs.length-1){
           index_no+=1;
           load_track(index_no);
           playing_songs();
   }
   else{
    index_no=0;
    load_track(index_no);
    playing_songs();
   }

}


function previous_song(){
    if(index_no > 0){
            index_no -=1;
            load_track(index_no);
            playing_songs();
    }
    else{
     index_no=allSongs.length;
     load_track(index_no);
     playing_songs();
    }
 
 }

 function change_duration(){
    slider_position= track.duration *(slider.value / 100);
    track.currentTime = slider_position;
 }
 