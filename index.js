const ROOT_URL = "https://api.unsplash.com/";
const accessKey = "AEQnZ7RjXrjnDwAHRKGLtPPvtcpqCutQV7y-MCl1-w8";

let imgGrid = document.querySelector('.img-grid');

const addToGrid = (photos) => {
  console.log(photos);
  photos.forEach((photo) => {
    let el = document.createElement("div");
    el.style.backgroundColor = photo.color;
    el.innerHTML = `<img src=${photo.urls.regular} height="200" width="200"/>`;
    console.log(el)
    imgGrid.appendChild(el);
  });
};

const loadMore = () => {
  let photos = [];
  fetch(`${ROOT_URL}/photos/random?client_id=${accessKey}&count=15`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      photos.push(...data);
      addToGrid(photos);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    loadMore();
  }
});

loadMore();
