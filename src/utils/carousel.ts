import apiFetch from "../utils/apiFetch";

document.addEventListener("astro:page-load", async () => {
	interface ApiData {
		id: number;
		autor: string;
		frase: string;
		imagen?: string;
	}
	const data: ApiData[] = await apiFetch();

	const btnLeft = document.getElementById("btnLeft");
	const btnRight = document.getElementById("btnRight");

	const frase = document.getElementById("frase");
	const autor = document.getElementById("autor");
	const img = document.getElementById("img");

	let index = 0;

	if (frase) frase.innerHTML = data[index].frase;
	if (autor) autor.innerHTML = data[index].autor;
	if (img && data[index].imagen)
		img.setAttribute("src", data[index].imagen || "");

	if (btnLeft)
		btnLeft.addEventListener("click", () => {
			index--;
			if (index <= 0) index = data.length - 1;
			if (frase) frase.innerHTML = data[index].frase;
			if (autor) autor.innerHTML = data[index].autor;
		});

	if (btnRight)
		btnRight.addEventListener("click", () => {
			index++;
			if (index === data.length) index = 0;
			if (frase) frase.innerHTML = data[index].frase;
			if (autor) autor.innerHTML = data[index].autor;
		});
});
