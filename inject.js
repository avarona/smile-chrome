console.log(location)
console.log(window)
console.log(chrome)
const path = location.pathname + location.search;
if (location.host === 'www.amazon.com') {
  location.replace('https://smile.amazon.com' + path)
}
