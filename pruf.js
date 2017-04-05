$(document).ready(function(){
	var lienzo = document.getElementById("lienzo");
	var clear = document.createElement("div");
	clear.className = "cleaner";
	var click = false;
	var jugador1 = 0;
	var jugador2 = 0;
	var definirOroEscenario = [ null, 
		
		[,{ horizontal : null , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : null , vertical : null}] ,
		[,{ horizontal : null , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : null , vertical : true}] ,
		[,{ horizontal : null , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : null , vertical : true}] ,
		[,{ horizontal : null , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : null , vertical : true}] ,
		[,{ horizontal : null , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : true , vertical : true}, { horizontal : null , vertical : true}] ,
		[,{ horizontal : null , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : true , vertical : null}, { horizontal : null , vertical : null}]

	];

	function crearLoza(posx,posy){
		var loza = document.createElement("div");
		loza.id = "loza"+posx+posy;
		loza.className = "loza";
		var lozaText = document.createElement("div");
		lozaText.className = "lozaText";
		loza.appendChild(lozaText);
		return loza;
	};

	function crearPista(){
		for (var i = 1; i = 6; i++) {
			for (var j = 1; j = 6; j++) {
				lienzo.appendChild(crearLoza(i,j));
			};
			lienzo.appendChild(clear);
		};
	};

	function marcar(){

		for (var i = 1; i = 6; i++) {
		//	for (var j = 1; j = 6; j++) {
				$("#loza"+i+1).click(function(){
					if ($("#loza"+i+1+" div").is(":empty")) {
						$("#loza"+i+1+" div").append(document.createTextNode("O"));
					};
				});
		//	};
		};
	};

	function crearPista6x6(){
		lienzo.appendChild(crearLoza(1,1));
		lienzo.appendChild(crearLoza(1,2));
		lienzo.appendChild(crearLoza(1,3));
		lienzo.appendChild(crearLoza(1,4));
		lienzo.appendChild(crearLoza(1,5));
		lienzo.appendChild(crearLoza(1,6));
		lienzo.appendChild(clear);
		lienzo.appendChild(crearLoza(2,1));
		lienzo.appendChild(crearLoza(2,2));
		lienzo.appendChild(crearLoza(2,3));
		lienzo.appendChild(crearLoza(2,4));
		lienzo.appendChild(crearLoza(2,5));
		lienzo.appendChild(crearLoza(2,6));
		lienzo.appendChild(clear);
		lienzo.appendChild(crearLoza(3,1));
		lienzo.appendChild(crearLoza(3,2));
		lienzo.appendChild(crearLoza(3,3));
		lienzo.appendChild(crearLoza(3,4));
		lienzo.appendChild(crearLoza(3,5));
		lienzo.appendChild(crearLoza(3,6));
		lienzo.appendChild(clear);
		lienzo.appendChild(crearLoza(4,1));
		lienzo.appendChild(crearLoza(4,2));
		lienzo.appendChild(crearLoza(4,3));
		lienzo.appendChild(crearLoza(4,4));
		lienzo.appendChild(crearLoza(4,5));
		lienzo.appendChild(crearLoza(4,6));
		lienzo.appendChild(clear);
		lienzo.appendChild(crearLoza(5,1));
		lienzo.appendChild(crearLoza(5,2));
		lienzo.appendChild(crearLoza(5,3));
		lienzo.appendChild(crearLoza(5,4));
		lienzo.appendChild(crearLoza(5,5));
		lienzo.appendChild(crearLoza(5,6));
		lienzo.appendChild(clear);
		lienzo.appendChild(crearLoza(6,1));
		lienzo.appendChild(crearLoza(6,2));
		lienzo.appendChild(crearLoza(6,3));
		lienzo.appendChild(crearLoza(6,4));
		lienzo.appendChild(crearLoza(6,5));
		lienzo.appendChild(crearLoza(6,6));
		lienzo.appendChild(clear);

	}

	function queMarca(){
		if (click) {
			$("#jugadorActual").css("left", "0px");
			return "O";
		}
		else{			
			$("#jugadorActual").css("left", "150px");
			return "R";
		};
	}

	function marcar6x6(){

		$("#loza"+1+1).click(function(){
			if ($("#loza"+1+1+" div").is(":empty")) {
				$("#loza"+1+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+1+2).click(function(){
			if ($("#loza"+1+2+" div").is(":empty")) {
				$("#loza"+1+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+1+3).click(function(){
			if ($("#loza"+1+3+" div").is(":empty")) {
				$("#loza"+1+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+1+4).click(function(){
			if ($("#loza"+1+4+" div").is(":empty")) {
				$("#loza"+1+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+1+5).click(function(){
			if ($("#loza"+1+5+" div").is(":empty")) {
				$("#loza"+1+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+1+6).click(function(){
			if ($("#loza"+1+6+" div").is(":empty")) {
				$("#loza"+1+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+1).click(function(){
			if ($("#loza"+2+1+" div").is(":empty")) {
				$("#loza"+2+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+2).click(function(){
			if ($("#loza"+2+2+" div").is(":empty")) {
				$("#loza"+2+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+3).click(function(){
			if ($("#loza"+2+3+" div").is(":empty")) {
				$("#loza"+2+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+4).click(function(){
			if ($("#loza"+2+4+" div").is(":empty")) {
				$("#loza"+2+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+5).click(function(){
			if ($("#loza"+2+5+" div").is(":empty")) {
				$("#loza"+2+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+2+6).click(function(){
			if ($("#loza"+2+6+" div").is(":empty")) {
				$("#loza"+2+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+1).click(function(){
			if ($("#loza"+3+1+" div").is(":empty")) {
				$("#loza"+3+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+2).click(function(){
			if ($("#loza"+3+2+" div").is(":empty")) {
				$("#loza"+3+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+3).click(function(){
			if ($("#loza"+3+3+" div").is(":empty")) {
				$("#loza"+3+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+4).click(function(){
			if ($("#loza"+3+4+" div").is(":empty")) {
				$("#loza"+3+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+5).click(function(){
			if ($("#loza"+3+5+" div").is(":empty")) {
				$("#loza"+3+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+3+6).click(function(){
			if ($("#loza"+3+6+" div").is(":empty")) {
				$("#loza"+3+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+1).click(function(){
			if ($("#loza"+4+1+" div").is(":empty")) {
				$("#loza"+4+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+2).click(function(){
			if ($("#loza"+4+2+" div").is(":empty")) {
				$("#loza"+4+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+3).click(function(){
			if ($("#loza"+4+3+" div").is(":empty")) {
				$("#loza"+4+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+4).click(function(){
			if ($("#loza"+4+4+" div").is(":empty")) {
				$("#loza"+4+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+5).click(function(){
			if ($("#loza"+4+5+" div").is(":empty")) {
				$("#loza"+4+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+4+6).click(function(){
			if ($("#loza"+4+6+" div").is(":empty")) {
				$("#loza"+4+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+1).click(function(){
			if ($("#loza"+5+1+" div").is(":empty")) {
				$("#loza"+5+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+2).click(function(){
			if ($("#loza"+5+2+" div").is(":empty")) {
				$("#loza"+5+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+3).click(function(){
			if ($("#loza"+5+3+" div").is(":empty")) {
				$("#loza"+5+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+4).click(function(){
			if ($("#loza"+5+4+" div").is(":empty")) {
				$("#loza"+5+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+5).click(function(){
			if ($("#loza"+5+5+" div").is(":empty")) {
				$("#loza"+5+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+5+6).click(function(){
			if ($("#loza"+5+6+" div").is(":empty")) {
				$("#loza"+5+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+1).click(function(){
			if ($("#loza"+6+1+" div").is(":empty")) {
				$("#loza"+6+1+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+2).click(function(){
			if ($("#loza"+6+2+" div").is(":empty")) {
				$("#loza"+6+2+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+3).click(function(){
			if ($("#loza"+6+3+" div").is(":empty")) {
				$("#loza"+6+3+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+4).click(function(){
			if ($("#loza"+6+4+" div").is(":empty")) {
				$("#loza"+6+4+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+5).click(function(){
			if ($("#loza"+6+5+" div").is(":empty")) {
				$("#loza"+6+5+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});

		$("#loza"+6+6).click(function(){
			if ($("#loza"+6+6+" div").is(":empty")) {
				$("#loza"+6+6+" div").append(queMarca);
				click = !click;
				comprobarORO();
			};
		});
	};

	function puntuar(){
		if(click){jugador1++;}else{jugador2++;};
		console.log("Jugador1 = "+jugador1+" - Jugador2 = "+jugador2);
		mostrarPuntajes();
	}

	function comprobarORO_CASILLA(fila , colum, sentido){
		if (sentido == "h") {
			if ($("#loza"+fila+colum+" div").text() == "R" && $("#loza"+fila+(colum-1) +" div").text() == "O" && $("#loza"+fila+(colum+1) +" div").text() == "O" && definirOroEscenario[fila][colum].horizontal) {
				$("#loza"+fila+colum).css("background-color", "#FFB71C"); $("#loza"+fila+(colum-1) ).css("background-color", "#FFB71C"); $("#loza"+fila+(colum+1) ).css("background-color", "#FFB71C");
				$("#loza"+fila+colum+" div").css("color", "#FF3D1C"); $("#loza"+fila+(colum-1)+" div").css("color", "#FF3D1C"); $("#loza"+fila+(colum+1) +" div").css("color", "#FF3D1C");
				puntuar();
				$("#loza"+fila+colum+" div").html("R");
				definirOroEscenario[fila][colum].horizontal = false;
			}
		} else{
			if ($("#loza"+fila+colum+" div").text() == "R" && $("#loza"+(fila-1)+colum+" div").text() == "O" && $("#loza"+(fila+1)+colum+" div").text() == "O" && definirOroEscenario[fila][colum].vertical){
				$("#loza"+fila+colum).css("background-color", "#FFB71C"); $("#loza"+(fila-1)+colum).css("background-color", "#FFB71C"); $("#loza"+(fila+1)+colum).css("background-color", "#FFB71C");
				$("#loza"+fila+colum+" div").css("color", "#FF3D1C"); $("#loza"+(fila-1)+colum+" div").css("color", "#FF3D1C"); $("#loza"+(fila+1)+colum+" div").css("color", "#FF3D1C");
				puntuar();
				$("#loza"+fila+colum+" div").html("R");
				definirOroEscenario[fila][colum].vertical = false;
			}
		};
	};

	function comprobarORO(){
		comprobarORO_CASILLA(1,2,"h");
		comprobarORO_CASILLA(1,3,"h");
		comprobarORO_CASILLA(1,4,"h");
		comprobarORO_CASILLA(1,5,"h");

		comprobarORO_CASILLA(2,1,"v");
		comprobarORO_CASILLA(2,2,"h");
		comprobarORO_CASILLA(2,2,"v");
		comprobarORO_CASILLA(2,3,"h");
		comprobarORO_CASILLA(2,3,"v");
		comprobarORO_CASILLA(2,4,"h");
		comprobarORO_CASILLA(2,4,"v");
		comprobarORO_CASILLA(2,5,"h");
		comprobarORO_CASILLA(2,5,"v");
		comprobarORO_CASILLA(2,6,"v");

		comprobarORO_CASILLA(3,1,"v");
		comprobarORO_CASILLA(3,2,"h");
		comprobarORO_CASILLA(3,2,"v");
		comprobarORO_CASILLA(3,3,"h");
		comprobarORO_CASILLA(3,3,"v");
		comprobarORO_CASILLA(3,4,"h");
		comprobarORO_CASILLA(3,4,"v");
		comprobarORO_CASILLA(3,5,"h");
		comprobarORO_CASILLA(3,5,"v");
		comprobarORO_CASILLA(3,6,"v");

		comprobarORO_CASILLA(4,1,"v");
		comprobarORO_CASILLA(4,2,"h");
		comprobarORO_CASILLA(4,2,"v");
		comprobarORO_CASILLA(4,3,"h");
		comprobarORO_CASILLA(4,3,"v");
		comprobarORO_CASILLA(4,4,"h");
		comprobarORO_CASILLA(4,4,"v");
		comprobarORO_CASILLA(4,5,"h");
		comprobarORO_CASILLA(4,5,"v");
		comprobarORO_CASILLA(4,6,"v");

		comprobarORO_CASILLA(5,1,"v");
		comprobarORO_CASILLA(5,2,"h");
		comprobarORO_CASILLA(5,2,"v");
		comprobarORO_CASILLA(5,3,"h");
		comprobarORO_CASILLA(5,3,"v");
		comprobarORO_CASILLA(5,4,"h");
		comprobarORO_CASILLA(5,4,"v");
		comprobarORO_CASILLA(5,5,"h");
		comprobarORO_CASILLA(5,5,"v");
		comprobarORO_CASILLA(5,6,"v");

		comprobarORO_CASILLA(6,2,"h");
		comprobarORO_CASILLA(6,3,"h");
		comprobarORO_CASILLA(6,4,"h");
		comprobarORO_CASILLA(6,5,"h");

	};

	function crearPuntajes(){
		var puntajeJugador1 = document.createElement("div");
		puntajeJugador1.id = "puntajeJugador1";
		puntajeJugador1.appendChild(document.createTextNode(jugador1));
		lienzo.appendChild(puntajeJugador1);

		var puntajeJugador2 = document.createElement("div");
		puntajeJugador2.id = "puntajeJugador2";
		puntajeJugador2.appendChild(document.createTextNode(jugador2));
		lienzo.appendChild(puntajeJugador2);

		mostrarJugadorActual();
		lienzo.appendChild(clear);
	};
	function mostrarPuntajes(){
		$("#puntajeJugador1").text(jugador1);
		$("#puntajeJugador2").text(jugador2);
	};

	function mostrarJugadorActual(){
		var jugadorActual = document.createElement("div");
		jugadorActual.id = "jugadorActual";
		lienzo.appendChild(jugadorActual);

	};


	function finalizarJuego(){

		if (true) {

		};
	};

	function optenerGanador(){

	};

	function estanTodasLasCasillasLlenas(){
		if (!($("#loza"+1+1+" div").is(":empty")) && !($("#loza"+1+2+" div").is(":empty")) ) {
			!($("#loza"+i+1+" div").is(":empty"))
		} else{return false;};
	};

	//definirOroEscenario();
	crearPista6x6();
	marcar6x6();
	crearPuntajes();
	//(function(){}());

});