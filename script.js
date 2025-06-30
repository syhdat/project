document.addEventListener('DOMContentLoaded',function(){
const animateOnScrollElements = document.querySelectorAll(
  '.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right'
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    } else {
      entry.target.classList.remove('animated');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

animateOnScrollElements.forEach(element => {
  observer.observe(element);
});
});

