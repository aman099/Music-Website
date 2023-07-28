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

const music = new Audio("../audio/eminem/1.mp3");

const songs = [
  {
    id: "1",
    songName: `Mockinbord <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/1.jpg",
  },
  {
    id: "2",
    songName: `Haile's Revenge <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/2.jpg",
  },
  {
    id: "3",
    songName: `My Name Is.. <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/3.jpg",
  },
  {
    id: "4",
    songName: `Not Afraid <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/4.jpg",
  },
  {
    id: "5",
    songName: `Without Me <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/5.jpg",
  },
  {
    id: "6",
    songName: `Till I Collapse <br />
    <div class="subtitle">Eminem ft. Nate Dogg</div>`,
    poster: "../img/eminem/6.jpg",
  },
  {
    id: "7",
    songName: `Godzilla <br />
    <div class="subtitle">Eminem ft. Juice World</div>`,
    poster: "../img/eminem/7.jpg",
  },
  {
    id: "8",
    songName: `Lose Yourself <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/8.jpg",
  },
  {
    id: "9",
    songName: `Phenomenal <br />
    <div class="subtitle">Eminem</div>`,
    poster: "../img/eminem/9.jpg",
  },
  {
    id: "10",
    songName: `Venom <br />
    <div class="subtitle">Eminem ft. Mack10</div>`,
    poster: "../img/eminem/10.jpg",
  },
  {
    id: "11",
    songName: `Why We Thugs <br />
    <div class="subtitle">Eminem ft. Ice Cube</div>`,
    poster: "../img/eminem/11.jpg",
  },
  {
    id: "12",
    songName: `Smoke Some Weed <br />
    <div class="subtitle">Eminem ft. Ice Cube</div>`,
    poster: "../img/eminem/12.jpg",
  },
  {
    id: "13",
    songName: `Gangsta's Paradise <br />
    <div class="subtitle">Koolio</div>`,
    poster: "../img/eminem/13.jpg",
  },
  {
    id: "14",
    songName: `Ghetto Bird <br />
    <div class="subtitle">Ice Cube</div>`,
    poster: "../img/eminem/14.jpg",
  },
  {
    id: "15",
    songName: `You Know How We Do It <br />
    <div class="subtitle">Eminem ft. Ice Cube</div>`,
    poster: "../img/eminem/15.jpg",
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
  <img src="${poster}" alt="" />
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
    music.src = `../audio/eminem/${index}.mp3`;
    poster_master_play.src = `../img/eminem/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `../audio/eminem/${index}.mp3`;

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
  music.src = `../audio/eminem/${index}.mp3`;
  poster_master_play.src = `../img/eminem/${index}.jpg`;
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
  music.src = `../audio/eminem/${index}.mp3`;
  poster_master_play.src = `../img/eminem/${index}.jpg`;
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
  music.src = `../audio/eminem/${index}.mp3`;
  poster_master_play.src = `../img/eminem/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/eminem/${index}.mp3`;

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
  music.src = `../audio/eminem/${index}.mp3`;
  poster_master_play.src = `../img/eminem/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/eminem/${index}.mp3`;

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
  music.src = `../audio/eminem/${index}.mp3`;
  poster_master_play.src = `../img/eminem/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");
  download_music.href = `../audio/eminem/${index}.mp3`;

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
