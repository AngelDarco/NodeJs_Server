import apiFetch from "../utils/apiFetch";

document.addEventListener("astro:page-load", async () => {
  interface ApiData {
    id: number;
    autor: string;
    frase: string;
    image?: string;
  }
  const data: ApiData[] = await apiFetch();

  const btnLeft = document.getElementById("btnLeft");
  const btnRight = document.getElementById("btnRight");

  const frase = document.getElementById("frase");
  const autor = document.getElementById("autor");
  const img = document.getElementById("img");

  let index = 0;

  // first load values
  if (frase) frase.innerHTML = data[index].frase;
  if (autor) autor.innerHTML = data[index].autor;
  if (img && data[index].image)
    img.setAttribute("src", data[index].image || "");

  // left arrow
  if (btnLeft)
    btnLeft.addEventListener("click", () => {
      index--;
      if (index < 0) index = data.length - 1;
      if (frase) frase.innerHTML = data[index].frase;
      if (autor) autor.innerHTML = data[index].autor;
      if (img)
        img.setAttribute("src", data[index].image || "/assets/midudev.jpg");
    });

  // right arrow
  if (btnRight)
    btnRight.addEventListener("click", () => {
      index++;
      if (index === data.length) index = 0;
      if (frase) frase.innerHTML = data[index].frase;
      if (autor) autor.innerHTML = data[index].autor;
      if (img)
        img.setAttribute("src", data[index].image || "/assets/midudev.jpg");
    });
});
