import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


iziToast.settings({
  position: "topRight",
  iconColor: "#fff",
  messageColor: "#fff",
});

const form = document.querySelector(".form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = e.target.elements["search-text"].value.trim();
    if (!query) {
        iziToast.warning({ title: "Warning", message: "Please enter a search query!" });
        return;
    }
    gallery.innerHTML = "";
    loader.classList.remove("hidden");
    try {
        const images = await fetchImages(query);
        if (images.length === 0) {
            iziToast.error({ title: "Error", message: "No images found. Try another query." });
        } else {
            renderGallery(images);
        }
    } catch (error) {
        iziToast.error({ title: "Error", message: "Failed to fetch images." });
    } finally {
        loader.classList.add("hidden");
    }
});



