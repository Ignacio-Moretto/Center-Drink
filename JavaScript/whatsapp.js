function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+54 9 3533 47-7349';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = 'Enviar'
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value
        let apellidos = document.querySelector('#apellidos').value
        let localidad = document.querySelector('#localidad').value
        let tipo = document.querySelector('#tipo').value
        let entrega = document.querySelector('#entrega').value
        let pago = document.querySelector('#pago').value
        let comentario = document.querySelector('#comentario').value
        let mensaje = 'send?phone=' + telefono + '&text=Mi nombre es: ' + nombre + ' ' + apellidos + '%0ASoy de la localidad: ' + localidad + '%0AQuiero realizar una compra para: ' + tipo + '%0AEntrega: ' + entrega + '%0AMétodo de pago: ' + pago + '%0AEsta es la información adicional: ' + comentario + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = 'Enviar'
        buttonSubmit.disabled = false
    }, 3000);
});