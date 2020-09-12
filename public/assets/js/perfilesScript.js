$(document).ready(function(){
	$("#tabla-fono").addClass("ol-invisible");
	$("#tabla-fono").prev().addClass("ol-invisible");
	$("#tabla-curriculum").addClass("ol-invisible");
	$("#tabla-curriculum").prev().addClass("ol-invisible");
	$("#tabla-ubicacion").addClass("ol-invisible");
	$("#tabla-ubicacion").prev().addClass("ol-invisible");
	$("#tabla-password").addClass("ol-invisible");
	$("#tabla-password").prev().addClass("ol-invisible");
	$("button.btn-modal").first().addClass("activo");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-blanco.svg");
});
$("#editCurriculum").click(function(){
	$("#tabla-curriculum").addClass("ol-visible");
	$("#tabla-curriculum").prev().addClass("ol-visible");
	$("#tabla-curriculum").removeClass("ol-invisible");
	$("#tabla-curriculum").prev().removeClass("ol-invisible");
	$("#tabla-ubicacion").addClass("ol-invisible");
	$("#tabla-ubicacion").prev().addClass("ol-invisible");
	$("#tabla-ubicacion").removeClass("ol-visible");
	$("#tabla-ubicacion").prev().removeClass("ol-visible");
	$("#tabla-personal").addClass("ol-invisible");
	$("#tabla-personal").prev().addClass("ol-invisible");
	$("#tabla-personal").removeClass("ol-visible");
	$("#tabla-personal").prev().removeClass("ol-visible");
	$("#tabla-password").addClass("ol-invisible");
	$("#tabla-password").prev().addClass("ol-invisible");
	$("#tabla-password").removeClass("ol-visible");
	$("#tabla-password").prev().removeClass("ol-visible");
	$("#tabla-fono").addClass("ol-invisible");
	$("#tabla-fono").prev().addClass("ol-invisible");
	$("#tabla-fono").removeClass("ol-visible");
	$("#tabla-fono").prev().removeClass("ol-visible");
	$("button.btn-modal").removeClass("activo");
	$(this).addClass("activo");
	$("#editCurriculum").children().attr("src","../assets/images/SPAimages/Icon-user-curiculum-blanco.svg");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-2.svg");
	$("#editTelefono").children().attr("src","../assets/images/SPAimages/icon-user-telefono-2.svg");
	$("#editDireccion").children().attr("src","../assets/images/SPAimages/icon-user-direccion-2.svg");
	$("#editPassword").children().attr("src","../assets/images/SPAimages/Icon-user-password-2.svg");
});
$("#editInfo").click(function(){
	$("#tabla-personal").addClass("ol-visible");
	$("#tabla-personal").prev().addClass("ol-visible");
	$("#tabla-personal").removeClass("ol-invisible");
	$("#tabla-personal").prev().removeClass("ol-invisible");
	$("#tabla-ubicacion").addClass("ol-invisible");
	$("#tabla-ubicacion").prev().addClass("ol-invisible");
	$("#tabla-ubicacion").removeClass("ol-visible");
	$("#tabla-ubicacion").prev().removeClass("ol-visible");
	$("#tabla-curriculum").addClass("ol-invisible");
	$("#tabla-curriculum").prev().addClass("ol-invisible");
	$("#tabla-curriculum").removeClass("ol-visible");
	$("#tabla-curriculum").prev().removeClass("ol-visible");
	$("#tabla-password").addClass("ol-invisible");
	$("#tabla-password").prev().addClass("ol-invisible");
	$("#tabla-password").removeClass("ol-visible");
	$("#tabla-password").prev().removeClass("ol-visible");
	$("#tabla-fono").addClass("ol-invisible");
	$("#tabla-fono").prev().addClass("ol-invisible");
	$("#tabla-fono").removeClass("ol-visible");
	$("#tabla-fono").prev().removeClass("ol-visible");
	$("button.btn-modal").removeClass("activo");
	$(this).addClass("activo");
	$("#editCurriculum").children().attr("src","../assets/images/SPAimages/Icon-user-curiculum-2.svg");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-blanco.svg");
	$("#editTelefono").children().attr("src","../assets/images/SPAimages/icon-user-telefono-2.svg");
	$("#editDireccion").children().attr("src","../assets/images/SPAimages/icon-user-direccion-2.svg");
	$("#editPassword").children().attr("src","../assets/images/SPAimages/Icon-user-password-2.svg");
});
$("#editTelefono").click(function(){
	$("#tabla-fono").addClass("ol-visible");
	$("#tabla-fono").prev().addClass("ol-visible");
	$("#tabla-fono").removeClass("ol-invisible");
	$("#tabla-fono").prev().removeClass("ol-invisible");
	$("#tabla-ubicacion").addClass("ol-invisible");
	$("#tabla-ubicacion").prev().addClass("ol-invisible");
	$("#tabla-ubicacion").removeClass("ol-visible");
	$("#tabla-ubicacion").prev().removeClass("ol-visible");
	$("#tabla-personal").addClass("ol-invisible");
	$("#tabla-personal").prev().addClass("ol-invisible");
	$("#tabla-personal").removeClass("ol-visible");
	$("#tabla-personal").prev().removeClass("ol-visible");
	$("#tabla-password").addClass("ol-invisible");
	$("#tabla-password").prev().addClass("ol-invisible");
	$("#tabla-password").removeClass("ol-visible");
	$("#tabla-password").prev().removeClass("ol-visible");
	$("#tabla-curriculum").addClass("ol-invisible");
	$("#tabla-curriculum").prev().addClass("ol-invisible");
	$("#tabla-curriculum").removeClass("ol-visible");
	$("#tabla-curriculum").prev().removeClass("ol-visible");
	$("button.btn-modal").removeClass("activo");
	$(this).addClass("activo");
	$("#editCurriculum").children().attr("src","../assets/images/SPAimages/Icon-user-curiculum-2.svg");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-2.svg");
	$("#editTelefono").children().attr("src","../assets/images/SPAimages/icon-user-telefono-blanco.svg");
	$("#editDireccion").children().attr("src","../assets/images/SPAimages/icon-user-direccion-2.svg");
	$("#editPassword").children().attr("src","../assets/images/SPAimages/Icon-user-password-2.svg");
});
$("#editDireccion").click(function(){
	$("#tabla-ubicacion").addClass("ol-visible");
	$("#tabla-ubicacion").prev().addClass("ol-visible");
	$("#tabla-ubicacion").removeClass("ol-invisible");
	$("#tabla-ubicacion").prev().removeClass("ol-invisible");
	$("#tabla-curriculum").addClass("ol-invisible");
	$("#tabla-curriculum").prev().addClass("ol-invisible");
	$("#tabla-curriculum").removeClass("ol-visible");
	$("#tabla-curriculum").prev().removeClass("ol-visible");
	$("#tabla-personal").addClass("ol-invisible");
	$("#tabla-personal").prev().addClass("ol-invisible");
	$("#tabla-personal").removeClass("ol-visible");
	$("#tabla-personal").prev().removeClass("ol-visible");
	$("#tabla-password").addClass("ol-invisible");
	$("#tabla-password").prev().addClass("ol-invisible");
	$("#tabla-password").removeClass("ol-visible");
	$("#tabla-password").prev().removeClass("ol-visible");
	$("#tabla-fono").addClass("ol-invisible");
	$("#tabla-fono").prev().addClass("ol-invisible");
	$("#tabla-fono").removeClass("ol-visible");
	$("#tabla-fono").prev().removeClass("ol-visible");
	$("button.btn-modal").removeClass("activo");
	$(this).addClass("activo");
	$("#editCurriculum").children().attr("src","../assets/images/SPAimages/Icon-user-curiculum-2.svg");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-2.svg");
	$("#editTelefono").children().attr("src","../assets/images/SPAimages/icon-user-telefono-2.svg");
	$("#editDireccion").children().attr("src","../assets/images/SPAimages/icon-user-direccion-blanco.svg");
	$("#editPassword").children().attr("src","../assets/images/SPAimages/Icon-user-password-2.svg");
});
$("#editPassword").click(function(){
	$("#tabla-password").addClass("ol-visible");
	$("#tabla-password").prev().addClass("ol-visible");
	$("#tabla-password").removeClass("ol-invisible");
	$("#tabla-password").prev().removeClass("ol-invisible");
	$("#tabla-curriculum").addClass("ol-invisible");
	$("#tabla-curriculum").prev().addClass("ol-invisible");
	$("#tabla-curriculum").removeClass("ol-visible");
	$("#tabla-curriculum").prev().removeClass("ol-visible");
	$("#tabla-personal").addClass("ol-invisible");
	$("#tabla-personal").prev().addClass("ol-invisible");
	$("#tabla-personal").removeClass("ol-visible");
	$("#tabla-personal").prev().removeClass("ol-visible");
	$("#tabla-ubicacion").addClass("ol-invisible");
	$("#tabla-ubicacion").prev().addClass("ol-invisible");
	$("#tabla-ubicacion").removeClass("ol-visible");
	$("#tabla-ubicacion").prev().removeClass("ol-visible");
	$("#tabla-fono").addClass("ol-invisible");
	$("#tabla-fono").prev().addClass("ol-invisible");
	$("#tabla-fono").removeClass("ol-visible");
	$("#tabla-fono").prev().removeClass("ol-visible");
	$("button.btn-modal").removeClass("activo");
	$(this).addClass("activo");
	$("#editCurriculum").children().attr("src","../assets/images/SPAimages/Icon-user-curiculum-2.svg");
	$("#editInfo").children().attr("src","../assets/images/SPAimages/icon-user-registro-2.svg");
	$("#editTelefono").children().attr("src","../assets/images/SPAimages/icon-user-telefono-2.svg");
	$("#editDireccion").children().attr("src","../assets/images/SPAimages/icon-user-direccion-2.svg");
	$("#editPassword").children().attr("src","../assets/images/SPAimages/Icon-user-password-blanco.svg");
});

$("#editarDireccion").on("click",function(){
	$(".agregar-direccion-perfil").addClass("ol-visible");
	$(".agregar-direccion-perfil").removeClass("ol-invisible");
	$("#tabla-ubicacion").find("input").removeAttr("readonly");
	$("#tabla-ubicacion").find("input").first().focus();
});
$("#editarInfoPerfil").on("click",function(){
	$("#tabla-personal").find("input").removeAttr("readonly");
	$("#tabla-personal").find("select").removeAttr("disabled");
	$("#tabla-personal").find("input").first().focus();
});
$("#editarTelefonoPerfil").on("click",function(){
	$("#tabla-fono").find("input").removeAttr("readonly");
	$("#tabla-fono").find("input").first().focus();
	$(".agregar-telefono-perfil").addClass("ol-visible");
	$(".agregar-telefono-perfil").removeClass("ol-invisible");
});
$("#editarPasswordPerfil").on("click",function(){
	$("#tabla-password").find("input").removeAttr("readonly");
	$("#tabla-password").find("input").first().focus();
});
$("#editarCurriculumPerfil").on("click",function(){
	$("#tabla-curriculum").find("input").removeAttr("disabled");
	$("#tabla-curriculum").find("#file-perfil").trigger("click");
});
$('#eliminar-tel-perfil').on("click",function(){
	if ($(this).index()>0) {
		$(this).parent().parent().remove();
	}else if($(this).index()==0){
		$(this).parent().prev().find("input").val("");
	}
});
$('#eliminar-dir-perfil').on("click",function(){
	$(this).parent().prev().find("input").val("");
	$(this).parent().parent().next().find("input").val("");
	$(this).parent().parent().next().next().find("input").val("");

});
$('.agregar-telefono-perfil').on("click",function(){
   var posicion = $("#tabla-fono tr").length-2;
   $('#tabla-fono > tbody > tr').last().before(telefonoNuevo());
});
$('.agregar-direccion-perfil').on("click",function(){
   var posicion = $("#tabla-ubicacion tr").length-2;
   $('#tabla-ubicacion > tbody > tr').last().before(ubicacionNueva());
});
function telefonoNuevo(tipo){
   var ele = '<tr>'+
   '<td>'+
   '<img src="../assets/images/SPAimages/icon-user-telefono.svg" class="img-edit-perfil">'+
   '</td>'+
   '<td>'+
   '<input type="text" name="telefono-perfil[]" id="telefono-perfil" class="dato-perfil" placeholder="Teléfono">'+
   '</td>'+
   '<td>'+
   '<button type="button" class="eliminar-ele-perfil" aria-label="eliminar"'+
   ' id="eliminar-ele-perfil" onclick="$(this).parent().parent().remove();">'+
   '<span aria-hidden="true">&times;</span>'+
   '</button>'+
   '</td>'+
   '</tr>';
   return ele;
}
function ubicacionNueva(){
	var nuevo = '<tr><td><br></td></tr><tr>'+
	'<td>'+
	'<img src="../assets/images/SPAimages/icon-user-direccion.svg" class="img-edit-perfil">'+
	'</td> <td>'+
	'<input type="text" name="direccion-perfil[]" id="direccion-perfil" class="dato-perfil" placeholder="Dirección" >'+
	'</td> <td>'+
	'<button type="button" class="eliminar-ele-perfil" aria-label="eliminar" id="eliminar-dir-perfil" onclick="eliminarUbicacion(this)">'+
	'<span aria-hidden="true">&times;</span>'+
	'</button>'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td>'+
	'<img src="../assets/images/SPAimages/icon-user-direccion.svg" class="img-edit-perfil">'+
	'</td>'+
	'<td>'+
	'<input type="text" name="direccion-perfil[]" id="direccion-perfil" class="dato-perfil" placeholder="Comuna" >'+
	'</td>'+
	'</tr>'+
	'<tr>'+
	'<td>'+
	'<img src="../assets/images/SPAimages/icon-user-direccion.svg" class="img-edit-perfil">'+
	'</td>'+
	'<td>'+
	'<input type="text" name="direccion-perfil[]" id="direccion-perfil" class="dato-perfil" placeholder="Región" >'+
	'</td>'+
	'</tr>';
	return nuevo;
}
function eliminarUbicacion(element){ 
	element.parentElement.parentElement.previousSibling.remove();
	element.parentElement.parentElement.nextSibling.nextSibling.remove();
	element.parentElement.parentElement.nextSibling.remove();
	element.parentElement.parentElement.remove();
}