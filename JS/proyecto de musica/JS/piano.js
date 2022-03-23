//Guardamos las teclas en arrays que van a ser las que se van a presionar
const white_keys = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "-"];
const dark_keys = ["s", "d", "f", "g", "h", "j", "k"];

//obtenermos todos los elementos que tienen la clase key
const keys = document.querySelectorAll(".key");
const whitekeys = document.querySelectorAll(".key.white");
const darkkeys = document.querySelectorAll(".key.dark");

keys.forEach((key) => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;

  const whitekeyIndex = white_keys.indexOf(key);
  const darkkeyIndex = dark_keys.indexOf(key);
  if (whitekeyIndex >= 0) {
    playNote(whitekeys[whitekeyIndex]);
  }
  if (darkkeyIndex >= 0) {
    playNote(darkkeys[darkkeyIndex]);
  }
});

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0.2;
  noteAudio.play();

  key.classList.add("active-piano");
  setTimeout(() => {
    key.classList.remove("active-piano");
  }, 200);
  //   noteAudio.addEventListener("ended", () => {
  //     key.classList.remove("active");
  //   });
}