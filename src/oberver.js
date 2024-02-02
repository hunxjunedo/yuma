let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};
let callback = (entries, observer) => {
  entries.forEach((entry) => {
   alert(entry)
  });
};
  
  let observer = new IntersectionObserver(callback, options);
  let target = document.querySelector(".filler");
observer.observe(target);