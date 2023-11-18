const scrollToId = (id) => {
    let elementToScroll = document.getElementById(id);

    elementToScroll.scrollIntoView({
        behavior: 'smooth'
    });
}


document.querySelectorAll('#btn-main').forEach(item => item.addEventListener('click', ()=> scrollToId('main')))
document.querySelectorAll('#btn-about').forEach(item => item.addEventListener('click', ()=> scrollToId('about')))
document.querySelectorAll('#btn-gallery').forEach(item => item.addEventListener('click', ()=> scrollToId('gallery')))
document.querySelectorAll('#btn-new').forEach(item => item.addEventListener('click', ()=> scrollToId('news')))
document.querySelectorAll('#btn-contact').forEach(item => item.addEventListener('click', ()=> scrollToId('contact')))


function initMap() {
    var pos = { lat: 50.5003733677649, lng: 30.76062916609908, }
    let options = {
        center: pos,
        zoom: 16
    }

    let map = new google.maps.Map(document.getElementById('map'), options)

    let marker = new google.maps.Marker({
        position: pos,
        map: map,
    })
}


initMap()