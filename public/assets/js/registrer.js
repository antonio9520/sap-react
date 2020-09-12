function cambioReg(val){
    var a = document.getElementById("optrut");
    var a1 = document.getElementById("formrut");
    var b = document.getElementById("optpas");
    var b1 = document.getElementById("formpas");

    var c = document.getElementById("optrutred");
    var c1 = document.getElementById("formrutred");
    var d = document.getElementById("optpasred");
    var d1 = document.getElementById("formpasred");

    v1 = document.getElementById("rut");
	v2 = document.getElementById("nom");
	v3 = document.getElementById("ape");
	v4 = document.getElementById("tel");
	v5 = document.getElementById("ema");
	v6 = document.getElementById("est");

	v01 = document.getElementById("nropas");
	v02 = document.getElementById("nompas");
	v03 = document.getElementById("apepas");
	v04 = document.getElementById("telpas");
	v05 = document.getElementById("emapas");
	v06 = document.getElementById("estpas");

	vr1 = document.getElementById("rutred");
	vr2 = document.getElementById("nomred");
	vr3 = document.getElementById("apered");
	vr4 = document.getElementById("telred");
	vr5 = document.getElementById("emared");
	vr6 = document.getElementById("estred");

	vr01 = document.getElementById("nropasred");
	vr02 = document.getElementById("nompasred");
	vr03 = document.getElementById("apepasred");
	vr04 = document.getElementById("telpasred");
	vr05 = document.getElementById("emapasred");
	vr06 = document.getElementById("estpasred");

    if(val==1){
        a.className ="boton-reg active";
        a1.style.display ="block";
        v01.value="";
        v02.value="";
        v03.value="";
        v04.value="";
        v05.value="";
        v06.selectedIndex="0";
        b.className ="boton-reg unactive";
        b1.style.display ="none";
    }
    if(val==2){
        b.className ="boton-reg active";
        b1.style.display ="block";
        v1.value="";
        v2.value="";
        v3.value="";
        v4.value="";
        v5.value="";
        v6.selectedIndex="0";
        a.className ="boton-reg unactive";
        a1.style.display ="none";
    }
    if(val==3){
        c.className ="boton-reg active";
        c1.style.display ="block";
        vr01.value="";
        vr02.value="";
        vr03.value="";
        vr04.value="";
        vr05.value="";
        vr06.selectedIndex="0";
        d.className ="boton-reg unactive";
        d1.style.display ="none";
    }
    if(val==4){
        d.className ="boton-reg active";
        d1.style.display ="block";
        vr1.value="";
        vr2.value="";
        vr3.value="";
        vr4.value="";
        vr5.value="";
        vr6.selectedIndex="0";
        c.className ="boton-reg unactive";
        c1.style.display ="none";
    }
}


function validate(val) {
	v1 = document.getElementById("rut");
	v2 = document.getElementById("nom");
	v3 = document.getElementById("ape");
	v4 = document.getElementById("tel");
	v5 = document.getElementById("ema");
	v6 = document.getElementById("est");
	v7 = document.getElementById("nac");	

	flag = true;

	if(val>=1 || val==0) {
		if(v1.value == "" || !ValidaRut(v1.value)) {

			v1.style.borderColor = "red";
			v1.style.animation="shake 0.5s";
			v1.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v1.style.borderColor = "green";
			v1.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=2 || val==0) {
		if(v2.value == "") {
			v2.style.borderColor = "red";
			v2.style.animation="shake 0.5s";
			v2.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v2.style.borderColor = "green";
			v2.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=3 || val==0) {
		if(v3.value == "") {
			v3.style.borderColor = "red";
			v3.style.animation="shake 0.5s";
			v3.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v3.style.borderColor = "green";
			v3.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=4 || val==0) {
		if(v4.value == "") {
			v4.style.borderColor = "red";
			v4.style.animation="shake 0.5s";
			v4.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v4.style.borderColor = "green";
			v4.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=5 || val==0) {
		if(v5.value == "" || !validarEmail(v5.value)) {
			v5.style.borderColor = "red";
			v5.style.animation="shake 0.5s";
			v5.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v5.style.borderColor = "green";
			v5.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=6 || val==0) {
		if(v6.value == "0") {
			v6.style.borderColor = "red";
			v6.style.animation="shake 0.5s";
			v6.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v6.style.borderColor = "green";
			v6.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=7 || val==0) {
		if(v7.value == "") {
			v7.style.borderColor = "red";
			v7.style.animation="shake 0.5s";
			v7.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v7.style.borderColor = "green";
			v7.style.background="#F3F8FD";
			flag = true;
		}
	}
	return flag;
}
function validateP(val) {
	v01 = document.getElementById("nropas");
	v02 = document.getElementById("nompas");
	v03 = document.getElementById("apepas");
	v04 = document.getElementById("telpas");
	v05 = document.getElementById("emapas");
	v06 = document.getElementById("estpas");
	v07 = document.getElementById("nacpas");	

	flag = true;

	if(val>=8 || val==0) {
		if(v01.value == "") {
			v01.style.borderColor = "red";
			v01.style.animation="shake 0.5s";
			v01.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v01.style.borderColor = "green";
			v01.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=9 || val==0) {
		if(v02.value == "") {
			v02.style.borderColor = "red";
			v02.style.animation="shake 0.5s";
			v02.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v02.style.borderColor = "green";
			v02.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=10 || val==0) {
		if(v03.value == "") {
			v03.style.borderColor = "red";
			v03.style.animation="shake 0.5s";
			v03.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v03.style.borderColor = "green";
			v03.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=11 || val==0) {
		if(v04.value == "") {
			v04.style.borderColor = "red";
			v04.style.animation="shake 0.5s";
			v04.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v04.style.borderColor = "green";
			v04.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=12 || val==0) {
		if(v05.value == "" || !validarEmail(v05.value)) {
			v05.style.borderColor = "red";
			v05.style.animation="shake 0.5s";
			v05.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v05.style.borderColor = "green";
			v05.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=13 || val==0) {
		if(v06.value == "0") {
			v06.style.borderColor = "red";
			v06.style.animation="shake 0.5s";
			v06.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v06.style.borderColor = "green";
			v06.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=14 || val==0) {
		if(v07.value == "") {
			v07.style.borderColor = "red";
			v07.style.animation="shake 0.5s";
			v07.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v07.style.borderColor = "green";
			v07.style.background="#F3F8FD";
			flag = true;
		}
	}

	return flag;
}

function validatered(val) {
	v1 = document.getElementById("rutred");
	v2 = document.getElementById("nomred");
	v3 = document.getElementById("apered");
	v4 = document.getElementById("telred");
	v5 = document.getElementById("emared");
	v6 = document.getElementById("estred");
	v7 = document.getElementById("nacred");

	flag = true;

	if(val>=1 || val==0) {
		if(v1.value == "" || !ValidaRut(v1.value)) {

			v1.style.borderColor = "red";
			v1.style.animation="shake 0.5s";
			v1.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v1.style.borderColor = "green";
			v1.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=2 || val==0) {
		if(v2.value == "") {
			v2.style.borderColor = "red";
			v2.style.animation="shake 0.5s";
			v2.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v2.style.borderColor = "green";
			v2.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=3 || val==0) {
		if(v3.value == "") {
			v3.style.borderColor = "red";
			v3.style.animation="shake 0.5s";
			v3.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v3.style.borderColor = "green";
			v3.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=4 || val==0) {
		if(v4.value == "") {
			v4.style.borderColor = "red";
			v4.style.animation="shake 0.5s";
			v4.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v4.style.borderColor = "green";
			v4.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=5 || val==0) {
		if(v5.value == "" || !validarEmail(v5.value)) {
			v5.style.borderColor = "red";
			v5.style.animation="shake 0.5s";
			v5.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v5.style.borderColor = "green";
			v5.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=6 || val==0) {
		if(v6.value == "0") {
			v6.style.borderColor = "red";
			v6.style.animation="shake 0.5s";
			v6.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v6.style.borderColor = "green";
			v6.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=7 || val==0) {
		if(v7.value == "") {
			v7.style.borderColor = "red";
			v7.style.animation="shake 0.5s";
			v7.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v7.style.borderColor = "green";
			v7.style.background="#F3F8FD";
			flag = true;
		}
	}

	return flag;
}

function validateredP(val) {

	v01 = document.getElementById("nropasred");
	v02 = document.getElementById("nompasred");
	v03 = document.getElementById("apepasred");
	v04 = document.getElementById("telpasred");
	v05 = document.getElementById("emapasred");
	v06 = document.getElementById("estpasred");
	v07 = document.getElementById("nacpasred");	

	flag = true;

	if(val>=8 || val==0) {
		if(v01.value == "") {
			v01.style.borderColor = "red";
			v01.style.animation="shake 0.5s";
			v01.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v01.style.borderColor = "green";
			v01.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=9 || val==0) {
		if(v02.value == "") {
			v02.style.borderColor = "red";
			v02.style.animation="shake 0.5s";
			v02.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v02.style.borderColor = "green";
			v02.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=10 || val==0) {
		if(v03.value == "") {
			v03.style.borderColor = "red";
			v03.style.animation="shake 0.5s";
			v03.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v03.style.borderColor = "green";
			v03.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=11 || val==0) {
		if(v04.value == "") {
			v04.style.borderColor = "red";
			v04.style.animation="shake 0.5s";
			v04.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v04.style.borderColor = "green";
			v04.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=12 || val==0) {
		if(v05.value == "" || !validarEmail(v05.value)) {
			v05.style.borderColor = "red";
			v05.style.animation="shake 0.5s";
			v05.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v05.style.borderColor = "green";
			v05.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=13 || val==0) {
		if(v06.value == "0") {
			v06.style.borderColor = "red";
			v06.style.animation="shake 0.5s";
			v06.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v06.style.borderColor = "green";
			v06.style.background="#F3F8FD";
			flag = true;
		}
	}

	if(val>=14 || val==0) {
		if(v07.value == "") {
			v07.style.borderColor = "red";
			v07.style.animation="shake 0.5s";
			v07.style.background="#FFF3F2";
			flag = false;
		}
		else {
			v07.style.borderColor = "green";
			v07.style.background="#F3F8FD";
			flag = true;
		}
	}

	return flag;
}

function validateGeo(val){
	v07 = document.getElementById("reg");
	v08 = document.getElementById("com");
	v09 = document.getElementById("dire");

	if(val>=13 || val==0) {
		if(v07.value == "0") {
			v07.style.borderColor = "red";
			v07.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v07.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=14 || val==0) {
		if(v08.value == "0") {
			v08.style.borderColor = "red";
			v08.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v08.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=15 || val==0) {
		if(v09.value == "") {
			v09.style.borderColor = "red";
			v09.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v09.style.borderColor = "green";
			flag = true;
		}
	}

	return flag;
}

function validateNivel(val){
	v10 = document.getElementById("niv");
	v11 = document.getElementById("explab");
	v12 = document.getElementById("expSAP");

	if(val>=16 || val==0) {
		if(v10.value == "0") {
			v10.style.borderColor = "red";

			v10.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v10.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=17 || val==0) {
		if(v11.value == "") {
			v11.style.borderColor = "red";
			v11.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v11.style.borderColor = "green";
			flag = true;
		}
	}

	if(val>=18 || val==0) {
		if(v12.value == "") {
			v12.style.borderColor = "red";
			v12.style.animation="shake 0.5s";
			flag = false;
		}
		else {
			v12.style.borderColor = "green";
			flag = true;
		}
	}

	return flag;
}

$(document).ready(function(){

var current_fs, next_fs, previous_fs;

$(".next").click(function(){

str1 = "next1";
str2 = "next2";
str3 = "next3";
str4 = "next4";
str8 = "next8";


if(!str2.localeCompare($(this).attr('id')) && document.getElementById("rut").value != "" && ValidaRut(document.getElementById("rut").value)) {
val21 = true;
}
else {
val21 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nom").value != "") {
val22 = true;
}
else {
val22 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("ape").value != "") {
val23 = true;
}
else {
val23 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("tel").value != "") {
val24 = true;
}
else {
val24 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("ema").value != "" && validarEmail(document.getElementById("ema").value)) {
val25 = true;
}
else {
val25 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("est").value != "0") {
val26 = true;
}
else {
val26 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nac").value != "") {
val27 = true;
}
else {
val27 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nropas").value != "") {
val021 = true;
}
else {
val021 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nompas").value != "") {
val022 = true;
}
else {
val022 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("apepas").value != "") {
val023 = true;
}
else {
val023 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("telpas").value != "") {
val024 = true;
}
else {
val024 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("emapas").value != "" && validarEmail(document.getElementById("emapas").value)) {
val025 = true;
}
else {
val025 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("estpas").value != "0") {
val026 = true;
}
else {
val026 = false;
}

if(!str2.localeCompare($(this).attr('id')) && document.getElementById("nacpas").value != "") {
val0027 = true;
}
else {
val0027 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("reg").value != "0") {
val027 = true;
}
else {
val027 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("com").value != "0") {
val028 = true;
}
else {
val028 = false;
}

if(!str3.localeCompare($(this).attr('id')) && document.getElementById("dire").value != "") {
val029 = true;
}
else {
val029 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("niv").value != "0") {
val030 = true;
}
else {
val030 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("explab").value != "") {
val031 = true;
}
else {
val031 = false;
}

if(!str4.localeCompare($(this).attr('id')) && document.getElementById("expSAP").value != "") {
val032 = true;
}
else {
val032 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("rutred").value != "" && ValidaRut(document.getElementById("rutred").value)) {
valr21 = true;
}
else {
valr21 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("nomred").value != "") {
valr22 = true;
}
else {
valr22 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("apered").value != "") {
valr23 = true;
}
else {
valr23 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("telred").value != "") {
valr24 = true;
}
else {
valr24 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("emared").value != "" && validarEmail(document.getElementById("emared").value)) {
valr25 = true;
}
else {
valr25 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("estred").value != "0") {
valr26 = true;
}
else {
valr26 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("nacred").value != "") {
valr27 = true;
}
else {
valr27 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("nropasred").value != "") {
valr021 = true;
}
else {
valr021 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("nompasred").value != "") {
valr022 = true;
}
else {
valr022 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("apepasred").value != "") {
valr023 = true;
}
else {
valr023 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("telpasred").value != "") {
valr024 = true;
}
else {
valr024 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("emapasred").value != "" && validarEmail(document.getElementById("emapasred").value)) {
valr025 = true;
}
else {
valr025 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("estpasred").value != "0") {
valr026 = true;
}
else {
valr026 = false;
}

if(!str8.localeCompare($(this).attr('id')) && document.getElementById("nacpasred").value != "") {
valr0027 = true;
}
else {
valr0027 = false;
}

if((!str1.localeCompare($(this).attr('id')) ) || 
(!str2.localeCompare($(this).attr('id')) && val21 == true && val22 == true && val23 == true && val24 == true && val25 == true && val26 == true && val27 == true) ||
(!str2.localeCompare($(this).attr('id')) && val021 == true && val022 == true && val023 == true && val024 == true && val025 == true && val026 == true && val0027 == true) ||
(!str3.localeCompare($(this).attr('id')) && val027 == true && val028 == true && val029 == true) ||
(!str4.localeCompare($(this).attr('id')) && val030 == true && val031 == true && val032 == true) || 
(!str8.localeCompare($(this).attr('id')) && valr21 == true && valr22 == true && valr23 == true && valr24 == true && valr25 == true && valr26 == true && valr27 == true) ||
(!str8.localeCompare($(this).attr('id')) && valr021 == true && valr022 == true && valr023 == true && valr024 == true && valr025 == true && valr026 == true && valr0027 == true) ) {

current_fs = $(this).parent().parent();
next_fs = $(this).parent().parent().next();

$(current_fs).removeClass("show");
$(next_fs).addClass("show");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

next_fs.css({
'display': 'block'
});
}
});
}


});

$(".prev").click(function(){

current_fs = $(this).parent().parent();
previous_fs = $(this).parent().parent().prev();

$(current_fs).removeClass("show");
$(previous_fs).addClass("show");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

previous_fs.css({
'display': 'block'
});
}
});
});

});





var RegionesYcomunas = {

	"regiones": [{
			"NombreRegion": "Arica y Parinacota",
			"comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
	},
		{
			"NombreRegion": "Tarapacá",
			"comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
	},
		{
			"NombreRegion": "Antofagasta",
			"comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
	},
		{
			"NombreRegion": "Atacama",
			"comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
	},
		{
			"NombreRegion": "Coquimbo",
			"comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
	},
		{
			"NombreRegion": "Valparaíso",
			"comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
	},
		{
			"NombreRegion": "Libertador Gral. Bernardo O’Higgins",
			"comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
	},
		{
			"NombreRegion": "Maule",
			"comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
	},
		{
			"NombreRegion": "Biobío",
			"comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
	},
		{
			"NombreRegion": "Araucanía",
			"comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria", ]
	},
		{
			"NombreRegion": "Los Ríos",
			"comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
	},
		{
			"NombreRegion": "Los Lagos",
			"comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
	},
		{
			"NombreRegion": "Aisén del Gral. Carlos Ibáñez del Campo",
			"comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
	},
		{
			"NombreRegion": "Magallanes y de la Antártica Chilena",
			"comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
	},
		{
			"NombreRegion": "Metropolitana de Santiago",
			"comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
	}]
}


jQuery(document).ready(function () {

	var iRegion = 0;
	var htmlRegion = '<option selected disabled value="0">Seleccione región</option>';
	var htmlComunas = '<option selected disabled value="0">Seleccione comuna</option>';

	jQuery.each(RegionesYcomunas.regiones, function () {
		htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
		iRegion++;
	});

	jQuery('#reg').html(htmlRegion);
	jQuery('#com').html(htmlComunas);
});

function cambiacom(val) {
	var iRegiones = 0;
	var valorRegion = val;
	var htmlComuna = '<option selected disabled value="0">Seleccione comuna</option>';
	jQuery.each(RegionesYcomunas.regiones, function () {
		if (RegionesYcomunas.regiones[iRegiones].NombreRegion == valorRegion) {
			var iComunas = 0;
			jQuery.each(RegionesYcomunas.regiones[iRegiones].comunas, function () {
				htmlComuna = htmlComuna + '<option value="' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '">' + RegionesYcomunas.regiones[iRegiones].comunas[iComunas] + '</option>';
				iComunas++;
			});
		}
		iRegiones++;
	});
	jQuery('#com').html(htmlComuna);
};

jQuery('#com').change(function () {
	if (jQuery(this).val() == 'sin-region') {
		alert('selecciones Región');
	} else if (jQuery(this).val() == 'sin-comuna') {
		alert('selecciones Comuna');
	}
});
jQuery('#reg').change(function () {
	if (jQuery(this).val() == 'sin-region') {
		alert('selecciones Región');
	}
});


function validarEmail(valor) {
	if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(valor)){
	return true;
	} else {
	return false;
	}
}

function ValidaRut( rut )
{
	var tmpstr = "";
	var crut = rut;
	if (crut.length> 0)
	{
		largo = crut.length;
		if ( largo <2 )
		{
			alert('rut inválido')
			return false;
		}
		for ( i=0; i <crut.length ; i++ )
		if ( crut.charAt(i) != ' ' && crut.charAt(i) != '.' && crut.charAt(i) != '-' )
		{
			tmpstr = tmpstr + crut.charAt(i);
		}
		rut = tmpstr;
		crut=tmpstr;
		largo = crut.length;
 
		if ( largo> 2 )
			rut = crut.substring(0, largo - 1);
		else
			rut = crut.charAt(0);
 
		dv = crut.charAt(largo-1);
 
		if ( rut == null || dv == null )
		return 0;
 
		var dvr = '0';
		suma = 0;
		mul  = 2;
 
		for (i= rut.length-1 ; i>= 0; i--)
		{
			suma = suma + rut.charAt(i) * mul;
			if (mul == 7)
				mul = 2;
			else
				mul++;
		}
 
		res = suma % 11;
		if (res==1)
			dvr = 'k';
		else if (res==0)
			dvr = '0';
		else
		{
			dvi = 11-res;
			dvr = dvi + "";
		}
 
		if ( dvr != dv.toLowerCase() )
		{
			return false;
		}
		return true;
	}
}

function registroRed(val){
	
	$(".bienvenida").removeClass("show");
	if (val==1) {
		window.location.href="RegistroRS.html?r="+'f';
	}
	if (val==2) {
		window.location.href="RegistroRS.html?r="+'g';
	}
	if (val==3) {
		window.location.href="RegistroRS.html?r="+'t';
	}
	if (val==4) {
		window.location.href="RegistroRS.html?r="+'l';
	}
	if (val==5) {
		window.location.href="RegistroRS.html?r="+'i';
	}
	$("#6").addClass("show");
}
function manual(){
	$('#2').addClass("show");
	$("#6").removeClass("show");
}

jQuery(document).ready(function(){
	
	$("#next6").click(function(){
		$('#7').addClass("show");
		$("#6").removeClass("show");	
	});
	$("#next7").click(function(){
		$('#8').addClass("show");
		$("#7").removeClass("show");	
	});
	$('.boton-registrate').click(function(){
		window.location.href="registrosteps.html";
	});
	$(".prev-login").click(function(){
		window.location.href="SapLogin.html";
	});
	$('.btn-back').click(function(){
		window.location.href="SapLogin.html";
	});
});

function getGET()
    {
        // capturamos la url
        var loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            var getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            var GET = getString.split('&');
            var get = {};
 
            // recorremos todo el array de valores
            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }


window.onload = function(){
    var valores=getGET();
    if(valores){
        for(var index in valores){
            if (valores[index]=='f') {
                $(".logosap").attr("src","../assets/img/icon-toconnect-facebook.svg");
                $("#redseleccionada").html("Facebook");
            }
            if (valores[index]=='g') {
                $(".logosap").attr("src","../assets/img/icon-toconnect-google.svg");
                $("#redseleccionada").html("Google");
            }
            if (valores[index]=='t') {
                $(".logosap").attr("src","../assets/img/icon-toconnect-twitter.svg");
                $("#redseleccionada").html("Twitter");
            }
            if (valores[index]=='l') {
                $(".logosap").attr("src","../assets/img/icon-toconnect-linkedin.svg");
                $("#redseleccionada").html("Linkedin");
            }
            if (valores[index]=='i') {
                $(".logosap").attr("src","../assets/img/icon-toconnect-instagram.svg");
                $("#redseleccionada").html("Instagram");
            }
        }
	}
}

$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});