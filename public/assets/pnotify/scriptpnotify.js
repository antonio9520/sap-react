document.getElementById('Notificaciones').onclick = function () {
    PNotify.notice({
        title: 'Titulo de Pnotify',
        text: 'Just to let you know, something happened.',
        styling: 'custom',
        delay: 2000,
        icon: 'iconoSap'
    });
};
/*
function notify() {
    PNotify.notice({
        title: 'Titulo de Pnotify',
        text: 'Just to let you know, something happened.',
        styling: 'custom',
        delay: 2000,
        icon: 'far fa-file-image fa-3x'
    });
}*/