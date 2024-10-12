// get my DOM nodes from the page
const thumbnailContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

displayImage.src = "./assets/wolf-high.jpg";
displayImage.alt = "./assets/Howling Wolf";

// a variable that represents the current possition in the array
let imgIndex = 0;

// an array of asset images and information about them
const images = [
  {
    src: "./assets/wolf-high.jpg",
    srcset: "./assets/wolf-low.jpg 2x, ./assets/wolf-med.jpg 3x",
    alt: "Howling Wolf",
    aria: {
      label: "Wolf howling at the moon",
      role: "img", // Example ARIA attribute
    },
  },
  {
    src: "./assets/moon-high.jpg",
    srcset: "./assets/moon-low.jpg 2x, ./assets/moon-med.jpg 3x",
    alt: "Moon and hoop",
    aria: {
      label: "Moon with a basketball hoop",
      role: "img",
    },
  },
  {
    src: "./assets/camping-high.jpg",
    srcset: "./assets/camping-low.jpg 2x, ./assets/camping-med.jpg 3x",
    alt: "Camping van and moon",
    aria: {
      label: "A camper van under the moonlight",
      role: "img",
    },
  },
  {
    src: "./assets/deer-high.jpg",
    srcset: "./assets/deer-low.jpg 2x, ./assets/deer-med.jpg 3x",
    alt: "Deer at night",
    aria: {
      label: "Deer standing under the night sky",
      role: "img",
    },
  },
  {
    src: "./assets/dragon-high.jpg",
    srcset: "./assets/dragon-low.jpg 2x, ./assets/dragon-med.jpg 3x",
    alt: "Flying dragon",
    aria: {
      label: "A dragon flying in the sky",
      role: "img",
    },
  },
  {
    src: "./assets/jellyfishes-high.jpg",
    srcset: "./assets/jellyfishes-low.jpg 2x, ./assets/jellyfishes-med.jpg 3x",
    alt: "Three Jellyfish",
    aria: {
      label: "Three jellyfish swimming in the ocean",
      role: "img",
    },
  },
];

// loop through our images array and put our thumbnails onto the page
for (let i = 0; i < images.length; i++) {
  // create a new DOM Node img
  const img = document.createElement("img");

  // add the src and alt to the img
  img.src = images[i].src;
  img.alt = images[i].alt;
  img.tabIndex = 0;

  // add a click event listener to the image in thumbnail
  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
    displayImage.setAttribute("aria-label", images[imgIndex].aria.label); // Set ARIA label
    displayImage.setAttribute("role", images[imgIndex].aria.role); // Set ARIA role
    imgIndex = i;
  });

  //add a keydown event listener to select image using "Space"
  img.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Space") {
      displayImage.src = images[i].src;
      displayImage.alt = images[i].alt;
      displayImage.setAttribute("aria-label", images[imgIndex].aria.label); // Set ARIA label
      displayImage.setAttribute("role", images[imgIndex].aria.role); // Set ARIA role
      imgIndex = i;
      console.log(e.key);
    }
  });
  // put the image on the page
  thumbnailContainer.appendChild(img);
}

//Iterate through Array using "keydown" event listener using arrow keys
document.body.addEventListener("keydown", function (e) {
  console.log(e.key);

  // If right arrow is pressed
  if (e.key === "ArrowRight") {
    imgIndex++;
    if (imgIndex >= images.length) {
      // Reset to first image if exceeds the last
      imgIndex = 0;
    }

    displayImage.src = images[imgIndex].src;
    displayImage.alt = images[imgIndex].alt;

    // If left arrow is pressed
  } else if (e.key === "ArrowLeft") {
    imgIndex--;
    if (imgIndex < 0) {
      // Loop back to last image if going before the first
      imgIndex = images.length - 1;
    }
    displayImage.src = images[imgIndex].src;
    displayImage.alt = images[imgIndex].alt;
  }
});
