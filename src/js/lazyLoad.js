export default function lazyLoad(targets) {
  const options = {
    rootMargin: '300px',
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.dataset.lazy;
        img.src = src;
        observer.unobserve(img);
      }
    });
  };

  const io = new IntersectionObserver(onEntry, options);

  targets.forEach(target => io.observe(target));
}
