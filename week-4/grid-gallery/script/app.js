const requestSize = 100;
const app = document.querySelector("#app");

const URLS = Array(requestSize)
  .fill(requestSize)
  .map((_, index) => `https://picsum.photos/id/${index}/700`);

const validate = res => {
  if (!res.ok) throw Error(res.statusText);

  return res;
};

const getBlob = response => response.blob();

const build = responseAsBlob => {
  const src = URL.createObjectURL(responseAsBlob);

  app.classList.add("grid");

  app.innerHTML += `
  <div class='card'>
    <img src=${src} />
  </div>
  `;
};

const logger = err => console.error(err);

const render = urls => {
  for (let url of urls) {
    fetch(url)
      .then(validate)
      .then(getBlob)
      .then(build)
      .catch(logger);
  }

  const span = document.createElement("span");
  const img = document.createElement("img");
  span.appendChild(img);
  span.classList.add("modal");
  span.setAttribute("id", "modal");
  document.body.append(span);

  app.addEventListener("click", ({ target }) => {
    const modal = document.querySelector("#modal");

    modal.classList.toggle("active");
    modal.children[0].src = target.src;
  });
};

window.addEventListener("load", render(URLS));
