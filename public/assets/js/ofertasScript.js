$(document).ready(function(){
/*Ofertas Laborales*/
   $("#fecha-publicacion").datepicker({language:"es",format:"dd/mm/yyyy",todayBtn:true,endDate:new Date,autoclose:true});
   $(".app-sidebar__user").removeClass("active");
   $(".no-postulado").css("display","none");
   $(".no-coincide").css("display","none");
   $(".no-sugerido").css("display","none");
   $(".no-ofertas").css("display","none");
   var sugeridas=$(".card-ofertas-sugeridas").toArray().length; 
   var postulados=$(".card-ofertas-postulados").toArray().length;
   paginateOfertas("sugeridos");
   $("#sugeridos").click(function(){
      $('[name="card_ofertas_totales"]').hide();
      $('[name="card_ofertas_postulados"]').hide();
      $("#postulados").removeClass("active");
      $("#todos").removeClass("active");
      $("#sugeridos").addClass("active");
      $(".filtros-card").next().children().children().slice(0).addClass("sug");
      $(".filtros-card").next().children().children().slice(0).removeClass("post");
      $(".filtros-card").next().children().children().slice(0).removeClass("todo");

      $(".card-ofertas-totales").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-totales").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".card-ofertas-postulados").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-postulados").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".no-sugerido").css("display","none");
      var cantidadCardSu = $(".card-ofertas-sugeridas").length;
      $(".avisos-oferta").html(cantidadCardSu);
      paginateOfertas("sugeridos");
      if(cantidadCardSu>6){
         $(".card-ofertas-sugeridas").slice(6).parent().parent().parent().removeClass("ol-visible");
         $(".card-ofertas-sugeridas").slice(6).parent().parent().parent().addClass("ol-invisible");
      }
      if(sugeridas>0){
         $(".card-ofertas-sugeridas").slice(0,6).parent().parent().parent().removeClass("ol-invisible");
         $(".card-ofertas-sugeridas").slice(0,6).parent().parent().parent().addClass("ol-visible");
         $(".no-sugerido").parent().parent().parent().css("display","none");
      }else{
         if ($(window).width()<=768) {
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-sugerido").css("display","block");
            $(".no-ofertas").css("display","none");
            $(".no-postulado").css("display","none");
         }else{
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-sugerido").css("display","block");
            $(".no-ofertas").css("display","none");
            $(".no-postulado").css("display","none");
         }
      }
   });
   $("#postulados").click(function(){
      $('[name="card_ofertas_totales"]').hide();
      $('[name="card_ofertas_sugeridas"]').hide();
      $("#postulados").addClass("active");
      $("#todos").removeClass("active");
      $("#sugeridos").removeClass("active");
      $(".filtros-card").next().children().children().slice(0).removeClass("sug");
      $(".filtros-card").next().children().children().slice(0).removeClass("todo");
      $(".filtros-card").next().children().children().slice(0).addClass("post");
      $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".card-ofertas-totales").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-totales").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".no-sugerido").css("display","none");
      var cantidadCardPo = $(".card-ofertas-postulados").length;
      $(".avisos-oferta").html(cantidadCardPo);
      paginateOfertas("postulados");
      if(cantidadCardPo>6){
         $(".card-ofertas-postulados").slice(6).parent().parent().parent().removeClass("ol-visible");
         $(".card-ofertas-postulados").slice(6).parent().parent().parent().addClass("ol-invisible");
      }
      if(cantidadCardPo>0){
         $(".card-ofertas-postulados").slice(0,6).parent().parent().parent().removeClass("ol-invisible");
         $(".card-ofertas-postulados").slice(0,6).parent().parent().parent().addClass("ol-visible");
         $(".no-postulado").parent().parent().parent().css("display","none");
      }else{
         if ($(window).width()<=768) {
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-postulado").css("display","block");
            $(".no-ofertas").css("display","none");
         }else{
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-postulado").css("display","block");
            $(".no-ofertas").css("display","none");
         }
      }
   });
   $("#todos").click(function(){
      $('[name="card_ofertas_sugeridas"]').hide();
      $('[name="card_ofertas_postulados"]').hide();
      $("#postulados").removeClass("active");
      $("#todos").addClass("active");
      $("#sugeridos").removeClass("active");
      $(".filtros-card").next().children().children().slice(0).removeClass("sug");
      $(".filtros-card").next().children().children().slice(0).removeClass("post");
      $(".filtros-card").next().children().children().slice(0).addClass("todo");
      $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".card-ofertas-postulados").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".card-ofertas-postulados").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".no-sugerido").css("display","none");
      var cantidadCardTo = $(".card-ofertas-totales").length;
      $(".avisos-oferta").html(cantidadCardTo);
      paginateOfertas("todos");
      if(cantidadCardTo>6){
         $(".card-ofertas-totales").slice(6).parent().parent().parent().removeClass("ol-visible");
         $(".card-ofertas-totales").slice(6).parent().parent().parent().addClass("ol-invisible");
      }
      if(cantidadCardTo>0){
         $(".card-ofertas-totales").slice(0,6).parent().parent().parent().removeClass("ol-invisible");
         $(".card-ofertas-totales").slice(0,6).parent().parent().parent().addClass("ol-visible");
         $(".no-postulado").parent().parent().parent().css("display","none");
      }else{
         if ($(window).width()<=768) {
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-ofertas").css("display","block");
            $(".no-postulado").css("display","none");
            $(".no-sugerido").css("display","none");
         }else{
            $(".no-postulado").parent().parent().parent().css("display","flex");
            $(".no-ofertas").css("display","block");
            $(".no-postulado").css("display","none");
            $(".no-sugerido").css("display","none");
         }
      }
   });
   $("#todos").trigger("click");
   /*Fin OL*/
});
function paginateOfertas(cat){
   var cantidadSu = $(".card-ofertas-sugeridas").length;
   var cantidadPo = $(".card-ofertas-postulados").length;
   var todos = $(".card-ofertas-totales").length;;
   $(".paginate_num").remove();
   var pos = $(".pagination li").length-2;
   if (cat =="sugeridos") {
      //$(".paginate_button.next").attr("onclick","sugeridosSiguiente()");
      var pag = cantidadSu/6;
      for(var i =pag;i>0;i--){
         if(cantidadSu % 6 == 0){
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i)+')">'+Math.trunc(i)+'</a></li>');
         }else{
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i+1)+')">'+Math.trunc(i+1)+'</a></li>');
         }
      }
   }
   if (cat =="postulados") {
      var pag = cantidadPo/6;
      //$(".paginate_button.next").attr("onclick","postuladosSiguiente()");
      //$(".paginate_button.next").attr("onclick","postuladosSiguiente()");
      for(var i =pag;i>0;i--){
         if(cantidadPo % 6 == 0){
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i)+')">'+Math.trunc(i)+'</a></li>');
         }else{
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i+1)+')">'+Math.trunc(i+1)+'</a></li>');
         }
      }
   }
   if (cat =="todos") {
      var pag = todos/6;
      //$(".paginate_button.next").attr("onclick","todosSiguiente()");
      for(var i =pag;i>0;i--){
         if(todos % 6 == 0){
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i)+')">'+Math.trunc(i)+'</a></li>');
         }else{
            $('.pagination li').eq(pos).after('<li class="paginate_button paginate_num"><a onclick="cambia_pag('+Math.trunc(i+1)+')">'+Math.trunc(i+1)+'</a></li>');
         }
      }
      var cont = $(".paginate_num").length;
      if (cont>5) {
         

      }
   }
}
function cambia_pag(num){
   var suge =  $(".filtros-card").next().children().children().hasClass("sug");
   var postu = $(".filtros-card").next().children().children().hasClass("post");
   var todo = $(".filtros-card").next().children().children().hasClass("todo");
   var pag = (num*6);
   if(suge){
      $(".filtros-card").next().find(".card-ofertas-sugeridas").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".filtros-card").next().find(".card-ofertas-sugeridas").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-sugeridas").slice((pag-6),(pag)).parent().parent().parent().addClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-sugeridas").slice((pag-6),(pag)).parent().parent().parent().removeClass("ol-invisible")
   }else if (postu) {
      $(".filtros-card").next().find(".card-ofertas-postulados").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".filtros-card").next().find(".card-ofertas-postulados").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-postulados").slice((pag-6),(pag)).parent().parent().parent().addClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-postulados").slice((pag-6),(pag)).parent().parent().parent().removeClass("ol-invisible")
   }else if(todo){
      $(".filtros-card").next().find(".card-ofertas-totales").slice(0).parent().parent().parent().addClass("ol-invisible");
      $(".filtros-card").next().find(".card-ofertas-totales").slice(0).parent().parent().parent().removeClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-totales").slice((pag-6),(pag)).parent().parent().parent().addClass("ol-visible");
      $(".filtros-card").next().find(".card-ofertas-totales").slice((pag-6),(pag)).parent().parent().parent().removeClass("ol-invisible");
   }
}
$("#ofertas_next").on("click",function(){
   var suge =  $(".filtros-card").next().children().children().hasClass("sug");
   var postu = $(".filtros-card").next().children().children().hasClass("post");
   var todo = $(".filtros-card").next().children().children().hasClass("todo");
   if(suge){
      var card = $(".card-ofertas-sugeridas").parent().parent().parent(".ol-visible").last();
      var pos = card.index();
      if(card.next().find(".card-ofertas-sugeridas").length>=1){
         var fin = $(".card-ofertas-sugeridas").parent().parent().parent(".ol-invisible").last().index();
         var f=0;
         if((pos+7)>fin){
            f=fin+1;
         }else{
            f=pos+7;
         }
         $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).removeClass("ol-invisible");
      }
   }else if(postu){
      var card = $(".card-ofertas-postulados").parent().parent().parent(".ol-visible").last();
      var pos = card.index();
      if(card.next().find(".card-ofertas-postulados").length>=1){
         var fin = $(".card-ofertas-postulados").parent().parent().parent(".ol-invisible").last().index();
         var f=0;
         if((pos+7)>fin){
            f=fin+1;
         }else{
            f=pos+7;
         }
         $(".card-ofertas-postulados").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-postulados").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).removeClass("ol-invisible");
      }
   }else if(todo){
      var card = $(".card-ofertas-totales").parent().parent().parent(".ol-visible").last();
      var pos = card.index();
      if(card.next().find(".card-ofertas-totales").length>=1){
         var fin = $(".card-ofertas-totales").parent().parent().parent(".ol-invisible").last().index();
         var f=0;
         if((pos+7)>fin){
            f=fin+1;
         }else{
            f=pos+7;
         }
         $(".card-ofertas-totales").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-totales").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos+1),f).removeClass("ol-invisible");
      }
   }
});
$("#ofertas_prev").on("click",function(){
   var suge =  $(".filtros-card").next().children().children().hasClass("sug");
   var postu = $(".filtros-card").next().children().children().hasClass("post");
   var todo = $(".filtros-card").next().children().children().hasClass("todo");
   if(suge){
      var card = $(".card-ofertas-sugeridas").parent().parent().parent(".ol-visible").first();
      var pos = card.index();
      if(card.prev().find(".card-ofertas-sugeridas").length>=1){
         $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-sugeridas").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).removeClass("ol-invisible");
      }
   }else if(postu){
      var card = $(".card-ofertas-postulados").parent().parent().parent(".ol-visible").first();
      var pos = card.index();
      if(card.prev().find(".card-ofertas-postulados").length>=1){
         $(".card-ofertas-postulados").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-postulados").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).removeClass("ol-invisible");
      }
   }else if(todo){
      var card = $(".card-ofertas-totales").parent().parent().parent(".ol-visible").first();
      var pos = card.index();
      if(card.prev().find(".card-ofertas-totales").length>=1){
         $(".card-ofertas-totales").slice(0).parent().parent().parent().addClass("ol-invisible");
         $(".card-ofertas-totales").slice(0).parent().parent().parent().removeClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).addClass("ol-visible");
         $(".filtros-card").next().children().children().slice((pos-6),pos).removeClass("ol-invisible");
      }
   }
});