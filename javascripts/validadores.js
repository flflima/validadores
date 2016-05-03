function esconderMsgs() {
	var mensagens = document.getElementsByClassName("mensagem");
	for (var i = 0; i < mensagens.length; i++) {
		mensagens[i].innerHTML = "";
		mensagens[i].style.visibility = "hidden";
	}
}

function validarCampoVazio(idCampo) {
	var campo = document.getElementById(idCampo);
	var msg = document.getElementById("msg_" + idCampo);
	
	if (campo.value === "") {
		msg.innerHTML = "Campo Inválido";
		msg.style.visibility = "visible";
		msg.style.color = "red";
		msg.style.fontWeight = "bold";
		msg.style.margin = "2px 0 0 0";
	} else {
		esconderMsgs();
	}
}