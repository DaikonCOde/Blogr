const elements = [...document.querySelectorAll(".animation")];

let options = {
  threshold: 0.25
}

function ObserverObjec (element) {
  element.forEach(e => {
    let target = e.target;
    if(e.isIntersecting) {
      let classAnimation = target.dataset.animation;
      target.classList.add(classAnimation)
      observer.unobserve(target);
    }
  })
}

const observer = new IntersectionObserver(ObserverObjec, options);

elements.forEach(element => {
  observer.observe(element);
})