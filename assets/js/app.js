
//DOM elementlerini değişkenlere aktarıyoruz

const image = document.querySelector("#cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const background = document.getElementById("background");
const musicListContainer = document.getElementById("music-list");

// Music

// müzik listesi (json) 
const songs = [
  {
    name: "1",
    displayName: "Mecbursun",
    artist: "Sertap Erener",
    cover:
      "https://upload.wikimedia.org/wikipedia/tr/c/c8/Lal.JPG",
  },
  {
    name: "2",
    displayName: "Kuzu Kuzu",
    artist: "Tarkan",
    cover:
      "https://upload.wikimedia.org/wikipedia/tr/4/40/600px-%285%29tarkan_-_karma_a.jpg",
  },
  {
    name: "3",
    displayName: "Seni Dert Etmeler",
    artist: "Madrigal",
    cover:
      "https://www.radyomega.fm/wp-content/uploads/2020/04/MADRIGAL-600.jpg",
  },
  {
    name: "4",
    displayName: "Yıllar Utansın",
    artist: "Müslüm Gürses",
    cover: "https://data.opus3a.com/product_photo/17/17f175a62c126ef7def9abd39244d823/max/0c41e94589451a8cb27f2375fda7dde9.jpg",
    
  },
  {
    name: "5",
    displayName: "Gözleri Fettan Güzel",
    artist: "Mustafa Keser",
    cover:
      "https://imgrosetta.mynet.com.tr/file/12981935/12981935-500x500.png",
  },
  {
    name: "6",
    displayName: "Hep Yaşın 19",
    artist: "MFÖ",
    cover:
      "https://images.genius.com/5a42ceddf94de5a2e4eeaa55847f2249.640x640x1.jpg",
  },
  {
    name: "7",
    displayName: "Karabiberim",
    artist: "Serdar Ortaç",
    cover:
      "https://productimages.hepsiburada.net/s/8/375/9034703732786.jpg",
  },
  {
    name: "8",
    displayName: "Baksana Talihe ",
    artist: "Ajda Pekkan",
    cover: "https://upload.wikimedia.org/wikipedia/tr/thumb/f/fc/Ajda_Pekkan_1996.png/250px-Ajda_Pekkan_1996.png",
   
  },
  {
    name: "9",
    displayName: "Şinanay",
    artist: "Sezen Aksu",
    cover:
      "https://i1.sndcdn.com/artworks-000672737908-mgtync-t500x500.jpg",
  },
  {
    name: "10",
    displayName: "A Canım",
    artist: "Mabel Matiz",
    cover: "https://i1.sndcdn.com/artworks-000121850308-idsrho-t500x500.jpg"
  },
  {
    name: "11",
    displayName: "Nasır",
    artist: "Melike Şahin",
    cover:
      "https://static.birgun.net/resim/haber-ici-resim/2021/03/22/sahne-hayali-ayakta-tutuyor-855333-1.jpg",
  },
  {
    name: "12",
    displayName: "Dünyadan Uzak",
    artist: "Sakiler",
    cover: "https://cdns-images.dzcdn.net/images/artist/ec19c0d9833a020d55585f2f87186064/500x500.jpg",
    
  },
  {
    name: "13",
    displayName: "Tatilde",
    artist: "Ziynet Sali",
    cover:
      "https://cdns-images.dzcdn.net/images/artist/3365121d97767674c9a940dc5ab1a944/500x500.jpg",
  },
  {
    name: "14",
    displayName: "Öpücem",
    artist: "Simge Sağın",
    cover:
      "https://www.kosanadam.com.tr/wp-content/uploads/2016/08/simge-sagin-konser-organizasyonu.jpg",
  },
  {
    name: "15",
    displayName: "Çak Bi Selam",
    artist: "Ayşe Hatun",
    cover:
      "https://mcdn01.gittigidiyor.net/55596/tn50/555961019_tn50_3.jpg",
  },
  {
    name: "16",
    displayName: "Ya Ya Ya",
    artist: "Hande Yener",
    cover: "https://foto.haberler.com/haber/2017/01/25/2016-nin-yildizi-hande-yener-oldu-9196372_6328_amp.jpg",
    
  },
  {
    name: "17",
    displayName: "Vaziyetler",
    artist: "Sıla",
    cover:
      "https://i1.sndcdn.com/artworks-000088002577-h0n6eb-t500x500.jpg",
  },
  {
    name: "18",
    displayName: "Yalnız Çiçek",
    artist: "Aleyna Tilki",
    cover:
      "https://www.visitafyon.org/uploaded/500x500/19082019-071830.jpg",
  },
  

];


// oynatma kontrolü
let isPlaying = false;


// play butonuyla sarkıyı başlatıyoruz
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause butonuyla sarkıyı başlatıyoruz.
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong())); //play ve pause dinleyici event 

// Update DOM
// playerdaki sarkıcı ismi ve sarkıyı değiştiren kodlar bütünü xd
//player üzerindeki görüntüyüü değiştirmecee
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `/assets/music/${song.name}.mp3`;
  changeCover(song.cover); 
}
//calan sarkıyı backgrounda yansıtma 
function changeCover(cover) {
  image.classList.remove("active");
  setTimeout(() => {
    image.src = cover;
    image.classList.add("active");
  }, 100);
  background.src = cover;
}


// calan sarkıyı array listteki 0. indexten başlat
let songIndex = 0;

// calan sarkıyı index değerine göre bir eksilterek önceki şarkıya döner.
function prevSong() {
  songIndex--;
  if (songIndex < 0) { // eğer ilk sarkıdaysa en sona döner
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// calan sarkıyı index değerine göre bir arttırarak önceki şarkıya döner.
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) { // eğer son sarkıdaysa en başa döner
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
// calan sarkının bilgilerini dom"a aktarır resim falan filan
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = `0${durationSeconds}`;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const { duration } = music;
  music.currentTime = (clickX / width) * duration;
}


// başta yazdığımız eventleri burada listeleyip butonlara bastıgımızda sayfamızda güncelliyoruz
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);

// sayfa yüklenince yeni element olusturup music list clasına aktarıyoruz
window.onload = function () {
  songs.forEach((song) => {
    let playLink = document.createElement("a");
    playLink.id = song.name;
    playLink.onclick = function (event) {
      loadSong(song);
      playSong();
    };
    let textArtist = document.createElement("h3");
    let textSongName = document.createElement("p");
    let img = document.createElement("img");
    textArtist.innerHTML = song.artist;
    textSongName.innerHTML = song.displayName;
    img.src = song.cover;
    playLink.appendChild(img);
    playLink.appendChild(textArtist);
    playLink.appendChild(textSongName);
    musicListContainer.appendChild(playLink);
  });
};

