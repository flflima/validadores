function esconderMsgs() {
	var mensagens = document.getElementsByClassName("mensagem");
	for (var i = 0; i < mensagens.length; i++) {
		// transformar em classe CSS
		mensagens[i].innerHTML = "";
		mensagens[i].style.visibility = "hidden";
	}
}

function validarCampoVazio(idCampo) {
	var campo = document.getElementById(idCampo);
	
	if (campo.value === "") {
		mensagemCampoInvalido(idCampo);
	} else {
		esconderMsgs();
	}
}

function mensagemCampoInvalido(idCampo) {
	var msg = document.getElementById("msg_" + idCampo);
	
	// transformar em classe CSS
	msg.innerHTML = "Campo Inválido";
	msg.style.visibility = "visible";
	msg.style.color = "red";
	msg.style.fontWeight = "bold";
	msg.style.margin = "2px 0 0 0";
}

function validarCPF(idCampo) {
	var cpf = document.getElementById(idCampo).value;
	
	if (cpf.length < 11 || cpf.length != 11) {
		mensagemCampoInvalido(idCampo);
		return;
	}
	
	var digitos = [];

	var limite = cpf.length;
	
	var cont = Math.pow(10, limite - 1);
	
	for (var i = 0; i < limite; i++) {
		digitos[i] = parseInt(cpf / cont);
		cpf = cpf % cont;
		cont =  cont / 10;
	}
	
	console.log("Dígitos do CPF: " + digitos);

}