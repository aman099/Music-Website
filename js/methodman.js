let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");

let pop_song = document.getElementsByClassName("pop_song")[0];
let artist_bx = document.getElementsByClassName("artist_bx")[0];

// Master-Play Section
let masterPlay = document.getElementById("masterPlay");
let playListPlay = Array.from(document.getElementsByClassName("playListPlay"));
// console.log(playListPlay);
let wave = document.getElementById("wave");
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");
let back = document.getElementById("back");
let next = document.getElementById("next");
let download_music = document.getElementById("download_music");

let shuffle = document.getElementsByClassName("shuffle")[0];
let index = 0;

const music = new Audio("../audio/methodman/1.mp3");

const songs = [
  {
    id: "1",
    songName: `Built For This <br />
    <div class="subtitle">Method Man ft. Freddie Gibbs, Street life (J Clyde Remix)</div>`,
    poster: "../img/methodman/1.jpg",
  },
  {
    id: "2",
    songName: `Grand Prix <br />
    <div class="subtitle">Method Man</div>`,
    poster: "../img/methodman/2.jpg",
  },
  {
    id: "3",
    songName: `Rite(2013) <br />
    <div class="subtitle">Method Man ft. Redman</div>`,
    poster: "../img/methodman/3.jpg",
  },
  {
    id: "4",
    songName: `Straight Gutta <br />
    <div class="subtitle">Method Man (feat. Redman, Hanz On, Streetlife)</div>`,
    poster: "../img/methodman/4.jpg",
  },
  {
    id: "5",
    songName: `The Purple Tape <br />
    <div class="subtitle">Method Man (feat. Raekwon, Inspectah Deck)</div>`,
    poster: "../img/methodman/5.jpg",
  },
  {
    id: "6",
    songName: `Who Next? <br />
    <div class="subtitle">Method Man</div>`,
    poster: "../img/methodman/6.jpg",
  },
  {
    id: "7",
    songName: `What's Happening?(Uncensored) <br />
    <div class="subtitle">Method Man (ft. Busta Rhymes)</div>`,
    poster: "../img/methodman/7.jpg",
  },
  {
    id: "8",
    songName: `Whateva Man <br />
    <div class="subtitle">Method Man (ft. Redman)</div>`,
    poster: "../img/methodman/8.jpg",
  },
  {
    id: "9",
    songName: `Triumph <br />
    <div class="subtitle">Method Man (ft. Wu-Tang-Clan, Cappadonna)</div>`,
    poster: "../img/methodman/9.jpg",
  },
  {
    id: "10",
    songName: `WestSide Connection <br />
    <div class="subtitle">Method Man (ft. 2Pac, Ice Cube, 50Cent)</div>`,
    poster: "../img/methodman/10.jpg",
  },
  {
    id: "11",
    songName: `Nas is Like <br />
    <div class="subtitle">Nas</div>`,
    poster: "../img/methodman/11.jpg",
  },
  {
    id: "12",
    songName: `Hella Stright <br />
    <div class="subtitle">Packy</div>`,
    poster: "../img/methodman/12.jpg",
  },
  {
    id: "13",
    songName: `Simon Says <br />
    <div class="subtitle">Method Man (ft. Pharoahe-Monch)</div>`,
    poster: "../img/methodman/13.jpg",
  },
  {
    id: "14",
    songName: `Cream <br />
    <div class="subtitle">Wu-Tang-Clan</div>`,
    poster: "../img/methodman/14.jpg",
  },
  {
    id: "15",
    songName: `Shorty Wanna Ride(Dirty) <br />
    <div class="subtitle">Young Buck</div>`,
    poster: "../img/methodman/15.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

// SearchBar Logics Start
let search_results = document.getElementsByClassName("search_results")[0];

songs.forEach((element) => {
  const { id, songName, poster } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;

  card.innerHTML = `
  <img nwa/src="${poster}" alt="" />
  <div class="content">
    ${songName}
  </div>
  `;
  search_results.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_results.getElementsByTagName("a");

  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content")[0];
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }

    if (input.value == 0) {
      search_results.style.display = "none";
    } else {
      search_results.style.display = "block";
    }
  }
});
// SearchBar Logics End

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});

pop_art_left.addEventListener("click", () => {
  artist_bx.scrollLeft -= 330;
});

pop_art_right.addEventListener("click", () => {
  artist_bx.scrollLeft += 330;
});

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgba(105, 105, 105, 0)";
  });
};

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `../audio/methodman/${index}.mp3`;
    poster_master_play.src = `../img/methodman/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `../audio/methodman/${index}.mp3`;

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });

    songTitles.forEach((elss) => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgba(105, 105, 105, 0.1)";
    makeAllPlays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active1");
  });
});

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);

  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});

back.addEventListener("click", (el) => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `../audio/methodman/${index}.mp3`;
  poster_master_play.src = `../img/methodman/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(105, 105, 105, 0.1)";
  makeAllPlays();
  playListPlay[index - 1].classList.remove("bi-play-circle-fill");
  playListPlay[index - 1].classList.add("bi-pause-circle-fill");
  // el.target.classList.remove("bi-play-circle-fill");
  // el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

next.addEventListener("click", (el) => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `../audio/methodman/${index}.mp3`;
  poster_master_play.src = `../img/methodman/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(105, 105, 105, 0.1)";
  makeAllPlays();
  playListPlay[index - 1].classList.remove("bi-play-circle-fill");
  playListPlay[index - 1].classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
});

shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.textContent = "repeat";
      break;

    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.textContent = "random";
      break;

    case "random":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.textContent = "next";
      break;
  }
});

const next_music = (el) => {
  // index++;
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `../audio/methodman/${index}.mp3`;
  poster_master_play.src = `../img/methodman/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/methodman/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(105, 105, 105, 0.1)";
  makeAllPlays();
  playListPlay[index - 1].classList.remove("bi-play-circle-fill");
  playListPlay[index - 1].classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

const repeat_music = (el) => {
  index;
  music.src = `../audio/methodman/${index}.mp3`;
  poster_master_play.src = `../img/methodman/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/methodman/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(105, 105, 105, 0.1)";
  makeAllPlays();
  playListPlay[index - 1].classList.remove("bi-play-circle-fill");
  playListPlay[index - 1].classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

const random_music = (el) => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `../audio/methodman/${index}.mp3`;
  poster_master_play.src = `../img/methodman/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/methodman/${index}.mp3`;

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });

  songTitles.forEach((elss) => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute("download", songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgba(105, 105, 105, 0.1)";
  makeAllPlays();
  playListPlay[index - 1].classList.remove("bi-play-circle-fill");
  playListPlay[index - 1].classList.add("bi-pause-circle-fill");
  wave.classList.add("active1");
};

music.addEventListener("ended", (el) => {
  let b = shuffle.innerHTML;

  switch (b) {
    case "repeat":
      repeat_music();
      break;

    case "next":
      next_music();
      break;

    case "random":
      random_music();
      break;
  }
});
