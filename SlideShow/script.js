const Prev = document.querySelector("#prev");

const Next = document.querySelector("#next");

const slider = document.querySelector(".slider");

let Images = document.querySelectorAll(".image");

const ImageWidth = Images[0].clientWidth;

let index = 1;

console.log(ImageWidth);

slider.style.transform = `translateX(${-ImageWidth * index}px)`;

slider.addEventListener("transitionend", () => {
  if (Images[index].id === "FirstImage") {
    slider.style.transition = "none";
    index = 1;

    slider.style.transform = `translateX(${index * -ImageWidth}px)`;
  }
  if (Images[index].id === "LastImage") {
    slider.style.transition = "none";
    index = Images.length - 2;

    slider.style.transform = `translateX(${index * -ImageWidth}px)`;
  }
});

const MoveNext = () => {
  if (index >= Images.length - 1) return;

  index++;

  slider.style.transition = "all 0.5s";

  slider.style.transform = `translateX(${index * -ImageWidth}px)`;
};

const MovePrev = () => {
  Images = document.querySelectorAll(".image");

  console.log(index);

  if (index <= 0) return;

  index--;

  slider.style.transition = "all 0.5s";

  slider.style.transform = `translateX(${index * -ImageWidth}px)`;
};

Next.addEventListener("click", MoveNext);

Prev.addEventListener("click", MovePrev);
