$(function() {
  $.fn.bootstrapPasswordMeter = function(options) {
    var settings = $.extend({
      minPasswordLength: 5,
      level0ClassName: 'bg-danger',
      level0Description: '',
      level1ClassName: 'bg-danger',
      level1Description: '',
      level2ClassName: 'bg-warning',
      level2Description: '',
      level3ClassName: 'bg-success',
      level3Description: '',
      level4ClassName: 'bg-success',
      level4Description: '',
      parentContainerClass: '.form-group'
    }, options || {});

    $("#contrasena").on("keyup", function() {
      var progressBar = $(this).closest(settings.parentContainerClass).find('.progress-bar');
      var progressBarWidth = 0;
      var progressBarDescription = '';
      if ($(this).val().length >= settings.minPasswordLength) {
        var zxcvbnObj = zxcvbn($(this).val());
        progressBar.removeClass(settings.level0ClassName)
          .removeClass(settings.level1ClassName)
          .removeClass(settings.level2ClassName)
          .removeClass(settings.level3ClassName)
          .removeClass(settings.level4ClassName);
        switch (zxcvbnObj.score) {
          case 0:
            progressBarWidth = 25;
            progressBar.addClass(settings.level0ClassName);
            progressBarDescription = settings.level0Description;
            break;
          case 1:
            progressBarWidth = 25;
            progressBar.addClass(settings.level1ClassName);
            progressBarDescription = settings.level1Description;
            break;
          case 2:
            progressBarWidth = 50;
            progressBar.addClass(settings.level2ClassName);
            progressBarDescription = settings.level2Description;
            break;
          case 3:
            progressBarWidth = 75;
            progressBar.addClass(settings.level3ClassName);
            progressBarDescription = settings.level3Description;
            break;
          case 4:
            progressBarWidth = 100;
            progressBar.addClass(settings.level4ClassName);
            progressBarDescription = settings.level4Description;
            break;
        }
      } else {
        progressBarWidth = 0;
        progressBarDescription = '';
      }
      progressBar.css('width', progressBarWidth + '%');
      progressBar.text(progressBarDescription);
    });
    $("#creaContrasena").on("keyup", function() {
      var progressBar = $(this).closest(settings.parentContainerClass).find('.progress-bar');
      var progressBarWidth = 0;
      var progressBarDescription = '';
      if ($(this).val().length >= settings.minPasswordLength) {
        var zxcvbnObj = zxcvbn($(this).val());
        progressBar.removeClass(settings.level0ClassName)
          .removeClass(settings.level1ClassName)
          .removeClass(settings.level2ClassName)
          .removeClass(settings.level3ClassName)
          .removeClass(settings.level4ClassName);
        switch (zxcvbnObj.score) {
          case 0:
            progressBarWidth = 25;
            progressBar.addClass(settings.level0ClassName);
            progressBarDescription = settings.level0Description;
            break;
          case 1:
            progressBarWidth = 25;
            progressBar.addClass(settings.level1ClassName);
            progressBarDescription = settings.level1Description;
            break;
          case 2:
            progressBarWidth = 50;
            progressBar.addClass(settings.level2ClassName);
            progressBarDescription = settings.level2Description;
            break;
          case 3:
            progressBarWidth = 75;
            progressBar.addClass(settings.level3ClassName);
            progressBarDescription = settings.level3Description;
            break;
          case 4:
            progressBarWidth = 100;
            progressBar.addClass(settings.level4ClassName);
            progressBarDescription = settings.level4Description;
            break;
        }
      } else {
        progressBarWidth = 0;
        progressBarDescription = '';
      }
      progressBar.css('width', progressBarWidth + '%');
      progressBar.text(progressBarDescription);
    });
  };
  $('#contrasena').bootstrapPasswordMeter({minPasswordLength:2});
  $('#creaContrasena').bootstrapPasswordMeter({minPasswordLength:2});
});

$("#btnCrearContrasena").on("click",function(){
  $(this).parent().parent().parent().parent().parent().parent().parent().addClass("hidden");
  $(this).parent().parent().parent().parent().parent().parent().parent().next().removeClass("hidden");
});
$("#AdnFluNextCrear").on("click",function(){
  var contrasena = $("#creaContrasena");
  var confirm = $("#creaContrasenaConfirm");
  if(contrasena.val().trim()!=''&&confirm.val().trim()!=''){
    if(contrasena.val()==confirm.val()){
      $(this).parent().parent().parent().parent().parent().parent().parent().addClass("hidden");
      $(this).parent().parent().parent().parent().parent().parent().parent().next().removeClass("hidden");
    }else{
      confirm.addClass("error-login");
    }
  }else if(contrasena.val().trim()==''){
    contrasena.addClass("error-login");
  }else if(confirm.val().trim()==''){
    confirm.addClass("error-login");
  }
});
$("#creaContrasena").on("blur",function(){
  if($(this).val().trim()==''){
    $(this).addClass("error-login");
  }else{
    $(this).removeClass("error-login");
  }
});
$("#creaContrasenaConfirm").on("blur",function(){
  if($(this).val().trim()==''){
    $(this).addClass("error-login");
  }else{
    $(this).removeClass("error-login");
  }
});