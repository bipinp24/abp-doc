const loadHeader = async () => {
  const headerURL = '/header.plain.html'
  const headerMountPoint = document.querySelector('header')
  const res = await fetch(headerURL)
  const headerMarkup = await res.text()
  headerMountPoint.innerHTML += headerMarkup
}

loadHeader()
