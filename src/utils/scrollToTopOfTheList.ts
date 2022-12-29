export default function (pageNo: number) {
  window.scrollTo({
    top: pageNo === 1 ? 0 : 300,
    behavior: 'smooth',
  });
}
