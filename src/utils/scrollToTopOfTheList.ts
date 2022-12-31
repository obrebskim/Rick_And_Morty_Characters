export default function (pageNo: number) {
  window.scrollTo({
    top: pageNo === 1 ? 0 : setScrollTo(),
    behavior: 'smooth',
  });
}

function setScrollTo(): number {
  const windowWidth: number = window.innerWidth;
  if (windowWidth < 768) return 240;
  else if (windowWidth < 912) return 340;
  else return 340;
}
