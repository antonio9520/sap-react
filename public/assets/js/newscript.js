jQuery(document).ready(function(){
   $("#termino").datepicker({language:"es",format:"dd/mm/yyyy",todayBtn:true});
   $("#inicio").datepicker({language:"es",format:"dd/mm/yyyy",todayBtn:true});
   
   $('#certificado').change(function(){
      var nombre = document.getElementById('certificado').files[0].name;
      var tamano = document.getElementById('certificado').files[0].size;
      var size = Math.round(tamano/1000);
      var ext = nombre.split('.').pop();
      document.getElementById('cert').innerHTML=nombre;
      document.getElementById('formato').innerHTML='Archivo '+ext+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+size+'KB';
      document.getElementById('eliminafile').style.display='block';
   });
   $('#cv-perfil').change(function(){
      var nombre = document.getElementById('cv-perfil').files[0].name;
      var tamano = document.getElementById('cv-perfil').files[0].size;
      var size = Math.round(tamano/1000);
      var ext = nombre.split('.').pop();
      document.getElementById('file-perfil').innerHTML=nombre;
   });
   $("#elimina-cv-perfil").on("click",function(){
      document.getElementById('file-perfil').innerHTML='Subir Archivo';
      document.getElementById('cv-perfil').value=null;
   });
   $('.obs').click(function(){
      $('.obs').style.border ="1px solid #C1C1C1;";
   });
});
function eliminar(){
   document.getElementById('cert').innerHTML='Seleccione Archivo';
   document.getElementById('certificado').value=null;
   document.getElementById('formato').innerHTML='';
   document.getElementById('eliminafile').style.display='none';
}
function eliminarestudio(){
   var respuesta=confirm('¿Seguro deseas eliminar este estudio?');
   if (respuesta) {
      alert('Estudio eliminado con exito!');
   }

}
jQuery(document).ready(function(){
   $('select').change(function(){
         $(this).addClass("selecionado");
   });
   $('input').change(function(){
         $(this).addClass("selecionado");
   });
   $('textarea').change(function(){
         $(this).addClass("selecionado");
   });
   $(".cancelar").on("click",function(){
      $("#tipoest").prop('selectedIndex',0);
      $("#tipoest").removeClass("selecionado");
      $("#prof").prop('selectedIndex',0);
      $("#prof").removeClass("selecionado");
      $("#casa").prop('selectedIndex',0);
      $("#casa").removeClass("selecionado");
      $("#areas").prop('selectedIndex',0);
      $("#areas").removeClass("selecionado");
      $("#inicio").prop('selectedIndex',0);
      $("#inicio").removeClass("selecionado");
      $("#termino").prop('selectedIndex',0);
      $("#termino").removeClass("selecionado");
      $("#promedio").removeClass("selecionado");
      $("#pais").removeClass("selecionado");
      $("#observaciones").removeClass("selecionado");
      eliminar();
      $(".closes").trigger("click");
   });


});

function getMouse(elem,evt){
   return{
      x : evt.clientX,
      y : evt.clientY
   }
}


function tooltipsResponsive(x) {
   if (x.matches) { // If media query matches
      $(document).ready(function(){
         $(".today").css("display","block");
      $("#tipoest").hover(function(){
         document.getElementById("selecttipo").style.marginTop="13px";
         document.getElementById("selecttipo").style.marginLeft="5px";
         document.getElementById("selecttipo").style.visibility="visible";
      },function(){
         document.getElementById("selecttipo").style.marginTop="0";
         document.getElementById("selecttipo").style.marginLeft="0";
         document.getElementById("selecttipo").style.visibility="hidden";
      });
      $("#prof").hover(function(){
         document.getElementById("selectprof").style.marginTop="50px";
         document.getElementById("selectprof").style.marginLeft="5px";
         document.getElementById("selectprof").style.visibility="visible";
      },function(){
         document.getElementById("selectprof").style.marginTop="0";
         document.getElementById("selectprof").style.marginLeft="0";
         document.getElementById("selectprof").style.visibility="hidden";
      });
      $("#casa").hover(function(){
         document.getElementById("selectcasa").style.marginTop="90px";
         document.getElementById("selectcasa").style.marginLeft="5px";
         document.getElementById("selectcasa").style.visibility="visible";
      },function(){
         document.getElementById("selectcasa").style.marginTop="0";
         document.getElementById("selectcasa").style.marginLeft="0";
         document.getElementById("selectcasa").style.visibility="hidden";
      });
      $("#areas").hover(function(){
         document.getElementById("selectarea").style.marginTop="130px";
         document.getElementById("selectarea").style.marginLeft="5px";
         document.getElementById("selectarea").style.visibility="visible";
      },function(){
         document.getElementById("selectarea").style.marginTop="0";
         document.getElementById("selectarea").style.marginLeft="0";
         document.getElementById("selectarea").style.visibility="hidden";
      });
      $("#inicio").hover(function(){
         document.getElementById("selectinicio").style.marginTop="160px";
         document.getElementById("selectinicio").style.marginLeft="5px";
         document.getElementById("selectinicio").style.visibility="visible";
      },function(){
         document.getElementById("selectinicio").style.marginTop="0";
         document.getElementById("selectinicio").style.marginLeft="0";
         document.getElementById("selectinicio").style.visibility="hidden";
      });
      $("#termino").hover(function(){
         document.getElementById("selectermino").style.marginTop="200px";
         document.getElementById("selectermino").style.marginLeft="5px";
         document.getElementById("selectermino").style.visibility="visible";
      },function(){
         document.getElementById("selectermino").style.marginTop="0";
         document.getElementById("selectermino").style.marginLeft="0";
         document.getElementById("selectermino").style.visibility="hidden";
      });
      $("#promedio").hover(function(){
         document.getElementById("prom").style.marginTop="235px";
         document.getElementById("prom").style.marginLeft="5px";
         document.getElementById("prom").style.visibility="visible";
      },function(){
         document.getElementById("prom").style.marginTop="0";
         document.getElementById("prom").style.marginLeft="0";
         document.getElementById("prom").style.visibility="hidden";
      });
      $("#pais").hover(function(){
         document.getElementById("inputpais").style.marginTop="270px";
         document.getElementById("inputpais").style.marginLeft="5px";
         document.getElementById("inputpais").style.visibility="visible";
      },function(){
         document.getElementById("inputpais").style.marginTop="0";
         document.getElementById("inputpais").style.marginLeft="0";
         document.getElementById("inputpais").style.visibility="hidden";
      });
      $("#egresado").hover(function(){
         document.getElementById("estadoegresado").style.marginTop="330px";
         document.getElementById("estadoegresado").style.marginLeft="55px";
         document.getElementById("estadoegresado").style.visibility="visible";
      },function(){
         document.getElementById("estadoegresado").style.marginTop="0";
         document.getElementById("estadoegresado").style.marginLeft="0";
         document.getElementById("estadoegresado").style.visibility="hidden";
      });
      $(".eg").hover(function(){
         document.getElementById("estadoegresado").style.marginTop="330px";
         document.getElementById("estadoegresado").style.marginLeft="55px";
         document.getElementById("estadoegresado").style.visibility="visible";
      },function(){
         document.getElementById("estadoegresado").style.marginTop="0";
         document.getElementById("estadoegresado").style.marginLeft="0";
         document.getElementById("estadoegresado").style.visibility="hidden";
      });
      $("#titulado").hover(function(){
         document.getElementById("estadotitulado").style.marginTop="330px";
         document.getElementById("estadotitulado").style.marginLeft="80px";
         document.getElementById("estadotitulado").style.visibility="visible";
      },function(){
         document.getElementById("estadotitulado").style.marginTop="0";
         document.getElementById("estadotitulado").style.marginLeft="0";
         document.getElementById("estadotitulado").style.visibility="hidden";
      });
      $(".tit").hover(function(){
         document.getElementById("estadotitulado").style.marginTop="330px";
         document.getElementById("estadotitulado").style.marginLeft="80px";
         document.getElementById("estadotitulado").style.visibility="visible";
      },function(){
         document.getElementById("estadotitulado").style.marginTop="0";
         document.getElementById("estadotitulado").style.marginLeft="0";
         document.getElementById("estadotitulado").style.visibility="hidden";
      });
      $("#estudiando").hover(function(){
         document.getElementById("estadoestudiando").style.marginTop="430px";
         document.getElementById("estadoestudiando").style.marginLeft="20px";
         document.getElementById("estadoestudiando").style.visibility="visible";
      },function(){
         document.getElementById("estadoestudiando").style.marginTop="0";
         document.getElementById("estadoestudiando").style.marginLeft="0";
         document.getElementById("estadoestudiando").style.visibility="hidden";
      });
      $(".est").hover(function(){
         document.getElementById("estadoestudiando").style.marginTop="430px";
         document.getElementById("estadoestudiando").style.marginLeft="20px";
         document.getElementById("estadoestudiando").style.visibility="visible";
      },function(){
         document.getElementById("estadoestudiando").style.marginTop="0";
         document.getElementById("estadoestudiando").style.marginLeft="0";
         document.getElementById("estadoestudiando").style.visibility="hidden";
      });
      $("#nofinalizado").hover(function(){
         document.getElementById("estadonofinalizado").style.marginTop="430px";
         document.getElementById("estadonofinalizado").style.marginLeft="50px";
         document.getElementById("estadonofinalizado").style.visibility="visible";
      },function(){
         document.getElementById("estadonofinalizado").style.marginTop="0";
         document.getElementById("estadonofinalizado").style.marginLeft="0";
         document.getElementById("estadonofinalizado").style.visibility="hidden";
      });
      $(".nofin").hover(function(){
         document.getElementById("estadonofinalizado").style.marginTop="430px";
         document.getElementById("estadonofinalizado").style.marginLeft="50px";
         document.getElementById("estadonofinalizado").style.visibility="visible";
      },function(){
         document.getElementById("estadonofinalizado").style.marginTop="0";
         document.getElementById("estadonofinalizado").style.marginLeft="0";
         document.getElementById("estadonofinalizado").style.visibility="hidden";
      });
      $("#observaciones").hover(function(){
         document.getElementById("inputobse").style.marginTop="460px";
         document.getElementById("inputobse").style.marginLeft="5px";
         document.getElementById("inputobse").style.visibility="visible";
      },function(){
         document.getElementById("inputobse").style.marginTop="0";
         document.getElementById("inputobse").style.marginLeft="0";
         document.getElementById("inputobse").style.visibility="hidden";
      });
      $("#cert").hover(function(){
         document.getElementById("selectcerti").style.marginTop="650px";
         document.getElementById("selectcerti").style.marginLeft="5px";
         document.getElementById("selectcerti").style.visibility="visible";
      },function(){
         document.getElementById("selectcerti").style.marginTop="0";
         document.getElementById("selectcerti").style.marginLeft="0";
         document.getElementById("selectcerti").style.visibility="hidden";
      });
      $(".cancelar").hover(function(){
         document.getElementById("cancela").style.marginTop="780px";
         document.getElementById("cancela").style.marginLeft="5px";
         document.getElementById("cancela").style.visibility="visible";
      },function(){
         document.getElementById("cancela").style.marginTop="0";
         document.getElementById("cancela").style.marginLeft="0";
         document.getElementById("cancela").style.visibility="hidden";
      });
      $("#guardar").hover(function(){
         document.getElementById("guard").style.marginTop="770px";
         document.getElementById("guard").style.marginLeft="200px";
         document.getElementById("guard").style.visibility="visible";
      },function(){
         document.getElementById("guard").style.marginTop="0";
         document.getElementById("guard").style.marginLeft="0";
         document.getElementById("guard").style.visibility="hidden";
      });
   });
  } else{
      $("#tipoest").hover(function(){
      document.getElementById("selecttipo").style.marginTop="93px";
      document.getElementById("selecttipo").style.marginLeft="23px";
      document.getElementById("selecttipo").style.visibility="visible";
   },function(){
      document.getElementById("selecttipo").style.marginTop="0";
      document.getElementById("selecttipo").style.marginLeft="0";
      document.getElementById("selecttipo").style.visibility="hidden";
   });
   $("#prof").hover(function(){
      document.getElementById("selectprof").style.marginTop="130px";
      document.getElementById("selectprof").style.marginLeft="25px";
      document.getElementById("selectprof").style.visibility="visible";
   },function(){
      document.getElementById("selectprof").style.marginTop="0";
      document.getElementById("selectprof").style.marginLeft="0";
      document.getElementById("selectprof").style.visibility="hidden";
   });
   $("#casa").hover(function(){
      document.getElementById("selectcasa").style.marginTop="170px";
      document.getElementById("selectcasa").style.marginLeft="25px";
      document.getElementById("selectcasa").style.visibility="visible";
   },function(){
      document.getElementById("selectcasa").style.marginTop="0";
      document.getElementById("selectcasa").style.marginLeft="0";
      document.getElementById("selectcasa").style.visibility="hidden";
   });
   $("#areas").hover(function(){
      document.getElementById("selectarea").style.marginTop="210px";
      document.getElementById("selectarea").style.marginLeft="25px";
      document.getElementById("selectarea").style.visibility="visible";
   },function(){
      document.getElementById("selectarea").style.marginTop="0";
      document.getElementById("selectarea").style.marginLeft="0";
      document.getElementById("selectarea").style.visibility="hidden";
   });
   $("#inicio").hover(function(){
      document.getElementById("selectinicio").style.marginTop="250px";
      document.getElementById("selectinicio").style.marginLeft="25px";
      document.getElementById("selectinicio").style.visibility="visible";
   },function(){
      document.getElementById("selectinicio").style.marginTop="0";
      document.getElementById("selectinicio").style.marginLeft="0";
      document.getElementById("selectinicio").style.visibility="hidden";
   });
   $("#termino").hover(function(){
      document.getElementById("selectermino").style.marginTop="250px";
      document.getElementById("selectermino").style.marginLeft="180px";
      document.getElementById("selectermino").style.visibility="visible";
   },function(){
      document.getElementById("selectermino").style.marginTop="0";
      document.getElementById("selectermino").style.marginLeft="0";
      document.getElementById("selectermino").style.visibility="hidden";
   });
   $("#promedio").hover(function(){
      document.getElementById("prom").style.marginTop="290px";
      document.getElementById("prom").style.marginLeft="25px";
      document.getElementById("prom").style.visibility="visible";
   },function(){
      document.getElementById("prom").style.marginTop="0";
      document.getElementById("prom").style.marginLeft="0";
      document.getElementById("prom").style.visibility="hidden";
   });
   $("#pais").hover(function(){
      document.getElementById("inputpais").style.marginTop="320px";
      document.getElementById("inputpais").style.marginLeft="25px";
      document.getElementById("inputpais").style.visibility="visible";
   },function(){
      document.getElementById("inputpais").style.marginTop="0";
      document.getElementById("inputpais").style.marginLeft="0";
      document.getElementById("inputpais").style.visibility="hidden";
   });
   $("#egresado").hover(function(){
      document.getElementById("estadoegresado").style.marginTop="380px";
      document.getElementById("estadoegresado").style.marginLeft="55px";
      document.getElementById("estadoegresado").style.visibility="visible";
   },function(){
      document.getElementById("estadoegresado").style.marginTop="0";
      document.getElementById("estadoegresado").style.marginLeft="0";
      document.getElementById("estadoegresado").style.visibility="hidden";
   });
   $(".eg").hover(function(){
      document.getElementById("estadoegresado").style.marginTop="380px";
      document.getElementById("estadoegresado").style.marginLeft="55px";
      document.getElementById("estadoegresado").style.visibility="visible";
   },function(){
      document.getElementById("estadoegresado").style.marginTop="0";
      document.getElementById("estadoegresado").style.marginLeft="0";
      document.getElementById("estadoegresado").style.visibility="hidden";
   });
   $("#titulado").hover(function(){
      document.getElementById("estadotitulado").style.marginTop="380px";
      document.getElementById("estadotitulado").style.marginLeft="105px";
      document.getElementById("estadotitulado").style.visibility="visible";
   },function(){
      document.getElementById("estadotitulado").style.marginTop="0";
      document.getElementById("estadotitulado").style.marginLeft="0";
      document.getElementById("estadotitulado").style.visibility="hidden";
   });
   $(".tit").hover(function(){
      document.getElementById("estadotitulado").style.marginTop="380px";
      document.getElementById("estadotitulado").style.marginLeft="105px";
      document.getElementById("estadotitulado").style.visibility="visible";
   },function(){
      document.getElementById("estadotitulado").style.marginTop="0";
      document.getElementById("estadotitulado").style.marginLeft="0";
      document.getElementById("estadotitulado").style.visibility="hidden";
   });
   $("#estudiando").hover(function(){
      document.getElementById("estadoestudiando").style.marginTop="380px";
      document.getElementById("estadoestudiando").style.marginLeft="155px";
      document.getElementById("estadoestudiando").style.visibility="visible";
   },function(){
      document.getElementById("estadoestudiando").style.marginTop="0";
      document.getElementById("estadoestudiando").style.marginLeft="0";
      document.getElementById("estadoestudiando").style.visibility="hidden";
   });
   $(".est").hover(function(){
      document.getElementById("estadoestudiando").style.marginTop="380px";
      document.getElementById("estadoestudiando").style.marginLeft="155px";
      document.getElementById("estadoestudiando").style.visibility="visible";
   },function(){
      document.getElementById("estadoestudiando").style.marginTop="0";
      document.getElementById("estadoestudiando").style.marginLeft="0";
      document.getElementById("estadoestudiando").style.visibility="hidden";
   });
   $("#nofinalizado").hover(function(){
      document.getElementById("estadonofinalizado").style.marginTop="380px";
      document.getElementById("estadonofinalizado").style.marginLeft="205px";
      document.getElementById("estadonofinalizado").style.visibility="visible";
   },function(){
      document.getElementById("estadonofinalizado").style.marginTop="0";
      document.getElementById("estadonofinalizado").style.marginLeft="0";
      document.getElementById("estadonofinalizado").style.visibility="hidden";
   });
   $(".nofin").hover(function(){
      document.getElementById("estadonofinalizado").style.marginTop="380px";
      document.getElementById("estadonofinalizado").style.marginLeft="205px";
      document.getElementById("estadonofinalizado").style.visibility="visible";
   },function(){
      document.getElementById("estadonofinalizado").style.marginTop="0";
      document.getElementById("estadonofinalizado").style.marginLeft="0";
      document.getElementById("estadonofinalizado").style.visibility="hidden";
   });
   $("#observaciones").hover(function(){
      document.getElementById("inputobse").style.marginTop="450px";
      document.getElementById("inputobse").style.marginLeft="25px";
      document.getElementById("inputobse").style.visibility="visible";
   },function(){
      document.getElementById("inputobse").style.marginTop="0";
      document.getElementById("inputobse").style.marginLeft="0";
      document.getElementById("inputobse").style.visibility="hidden";
   });
   $("#cert").hover(function(){
      document.getElementById("selectcerti").style.marginTop="620px";
      document.getElementById("selectcerti").style.marginLeft="25px";
      document.getElementById("selectcerti").style.visibility="visible";
   },function(){
      document.getElementById("selectcerti").style.marginTop="0";
      document.getElementById("selectcerti").style.marginLeft="0";
      document.getElementById("selectcerti").style.visibility="hidden";
   });
   $(".cancelar").hover(function(){
      document.getElementById("cancela").style.marginTop="775px";
      document.getElementById("cancela").style.marginLeft="25px";
      document.getElementById("cancela").style.visibility="visible";
   },function(){
      document.getElementById("cancela").style.marginTop="0";
      document.getElementById("cancela").style.marginLeft="0";
      document.getElementById("cancela").style.visibility="hidden";
   });
   $("#guardar").hover(function(){
      document.getElementById("guard").style.marginTop="775px";
      document.getElementById("guard").style.marginLeft="400px";
      document.getElementById("guard").style.visibility="visible";
   },function(){
      document.getElementById("guard").style.marginTop="0";
      document.getElementById("guard").style.marginLeft="0";
      document.getElementById("guard").style.visibility="hidden";
   });
  }
}

var x = window.matchMedia("(max-width: 768px)");
tooltipsResponsive(x); // Call listener function at run time
x.addListener(tooltipsResponsive); // Attach listener function on state changes

/*Regiones y Comunas*/
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
$(document).ready(function () {
   var iRegion = 0;
   var htmlRegion = '<option selected disabled value="0">Región</option>';
   var htmlComunas = '<option selected disabled value="0">Comuna</option>';
   jQuery.each(RegionesYcomunas.regiones, function () {
      htmlRegion = htmlRegion + '<option value="' + RegionesYcomunas.regiones[iRegion].NombreRegion + '">' + RegionesYcomunas.regiones[iRegion].NombreRegion + '</option>';
      iRegion++;
   });
   jQuery('#region').html(htmlRegion);
   jQuery('#comuna').html(htmlComunas);
});
function cambiacom(val) {
   var iRegiones = 0;
   var valorRegion = val;
   var htmlComuna = '<option selected disabled value="0">Comuna</option>';
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
   jQuery('#comuna').html(htmlComuna);
}



if ($(window).width()<=768) {
   $("#tabla-avisos tr td:nth-child(n+2)").on("click",function(){
      $("#ModalAviso").modal("show");
   });
}else{
   $("#tabla-avisos tr td").on("click",function(){
      $("#ModalAviso").modal("show");
   });
}


$(document).ready(function(){
   $("#tabla-avisos").DataTable({
      "ordering":false,
      "pageLength":6,
      "autoWidth":false,
      "lengthChange": false,
      
      "language":{
         "paginate":{
            "previous":'<img src="../assets/images/SPAimages/icon-pagination-back-blanco.svg" style="width:18px;max-width:18px;">',
            "next":'<img src="../assets/images/SPAimages/icon-pagination-forward-blanco.svg" style="width:18px;max-width:18px;">'
         },
         "info": "_TOTAL_ Avisos",
         "search": "",
         "searchPlaceholder": "Buscar...",
         "zeroRecords": "No se encontraron coincidencias",
         "emptyTable": "No hay avisos Disponibles",
         "infoEmpty": "0 Avisos",
         "infoFiltered": "Encontrados"
      }
   });
});

$(".btn-exp-next").click(function(){
   if($(this).parent().parent().parent().parent().next().length==1){
      $(this).parent().parent().parent().parent().css("display","none");
      $(this).parent().parent().parent().parent().next().css("display","table");   
   }
   
});
$(".btn-exp-back").click(function(){
   if($(this).parent().parent().parent().parent().prev().length==1){
      $(this).parent().parent().parent().parent().css("display","none");
      $(this).parent().parent().parent().parent().prev().css("display","table");
   }
});

$(".cert-next-card").click(function(){
   if($(this).parent().next().length==1){
      $(this).parent().css("display","none");
      $(this).parent().next().css("display","block");  
   }
});
$(".cert-back-card").click(function(){
   if($(this).parent().prev().length==1){
      $(this).parent().css("display","none");
      $(this).parent().prev().css("display","block");  
   }
});
$(".tra-back-card").click(function(){
   if($(this).parent().prev().length==1){
      $(this).parent().css("display","none");
      $(this).parent().prev().css("display","block");  
   }
});
$(".tra-next-card").click(function(){
   if($(this).parent().next().length==1){
      $(this).parent().css("display","none");
      $(this).parent().next().css("display","block");  
   }
});
