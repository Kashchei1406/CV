export function scrollTo(value) {
    const offsetElement = Number.isInteger(value) ? value : value.offsetTop;
    window.scrollTo({
        top: offsetElement,
        behavior: "smooth"})
}
