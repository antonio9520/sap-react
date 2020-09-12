function notificacion(titulo,mensaje,tipo){
    PNotify.defaultStack.maxOpen = Infinity;
    PNotify.defaultStack.modal = false;
    if (tipo=="Danger") {
        PNotify.error({
            title: titulo,
            text: mensaje,
            styling: 'custom',
            delay: 3000,
            icon: 'iconoSap'
        });
        $(".custom-error").children().next(".custom-content").css("background","red");
    }else if(tipo=="Success"){
        PNotify.success({
            title: titulo,
            text: mensaje,
            styling: 'custom',
            delay: 3000,
            icon: 'iconoSap'
        });
        $(".custom-success").children().next(".custom-content").css("background","green");
    }else if(tipo=="Info"){
        PNotify.info({
            title: titulo,
            text: mensaje,
            styling: 'custom',
            delay: 3000,
            icon: 'iconoSap'
        });
        $(".custom-info").children().next(".custom-content").css("background","blue");
    }else if(tipo=="Warning"){
        PNotify.notice({
            title: titulo,
            text: mensaje,
            styling: 'custom',
            delay: 3000,
            icon: 'iconoSap',
            sticker:true
        });
        $(".custom-notice").children().next(".custom-content").css("background","Yellow");
        $(".custom-notice").children().next(".custom-content").children().css("color","Black");
        $(".custom-notice").children().next(".custom-content").children().next().css("color","Black");
    }
}

$('#myButtonMM').on('click',function(){
    notificacion('Titulo para Danger','Mensaje Danger','Danger');
});
$('#myButtonSD').on('click',function(){
    notificacion('Titulo para Success','Mensaje Success','Success');
});
$('#cert').on('click',function(){
    notificacion('Titulo para Info','Mensaje Info','Info');
});
$('#com').on('click',function(){
    notificacion('Titulo para Warning','Mensaje Warning','Warning');
});