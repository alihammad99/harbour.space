export const sliding = {
  right: (position: number, gap: number) => {
    const width = window.innerWidth;
    const { box, cardWidth, totalSlides } = elements();

    if (width >= 1080 && position < totalSlides / 2 - cardWidth) {
      position += gap + cardWidth / 2;
    } else if (width < 1080) {
      position += gap + cardWidth;
    }
    moveSlider(box, position);
  },
  left: (position: number, gap: number) => {
    const width = window.innerWidth;
    const { box, cardWidth } = elements();
    if (width >= 1080 && position > 0) {
      position -= gap + cardWidth / 2;
    } else if (width < 1080 && position > 0) {
      position -= gap + cardWidth;
    }
    moveSlider(box, position);
  },
};

const moveSlider = (box: HTMLElement, position: number) => {
  box.style.transform = `translateX(-${position}px)`;
};

export const elements = () => {
  const box = document.querySelector(".slider-inner-box") as HTMLElement;
  const container = document.getElementById("slider-container") as HTMLElement;
  const firstChild = container.firstElementChild as HTMLElement;
  const cardWidth = firstChild.offsetWidth || 0;
  const childrenCount = container.childElementCount;
  const totalSlides = (cardWidth + 32) * childrenCount;
  return { box, childrenCount, container, cardWidth, totalSlides };
};
