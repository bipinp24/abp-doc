const loadHeader = async () => {
    const headerURL = '/header.plain.html'
    const res = await fetch(headerURL)
    const headerMarkup = await res.text()
    console.log(headerMarkup)
}


loadHeader()
