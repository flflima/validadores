function inicializar() {
	esconderMsgs();
}

function esconderMsgs() {
	var mensagens = document.getElementsByClassName("mensagem");
	for (var i = 0; i < mensagens.length; i++) {
		// transformar em classe CSS
		mensagens[i].innerHTML = "";
		mensagens[i].style.visibility = "hidden";
	}
}

function validarCampoVazio() {	
	if (this.value === "") {
		mensagemCampoInvalido(this.id);
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

function validarCPF() {
	esconderMsgs();
	
	var cpf = this.value;
	var idCampo = this.id;
	
	if (!validarTamanhoTexto(cpf, idCampo)) {
		return;
	}
	
	var digitos = obterDigitosCPF(cpf);

	var todosDigitosIguais = true;
	
	for (var i = 0; i < digitos.length - 1; i++) {
		if (digitos[i] !== digitos[i + 1]) {
			todosDigitosIguais = false;
		} 
	}
	
	if (todosDigitosIguais) {
		mensagemCampoInvalido(idCampo);
		return;
	}
}

function validarTamanhoTexto(texto, id) {
	//TODO tornar variavel o tamanho
	var textoTamanhoValido = texto.length === 11;
	
	if (textoTamanhoValido) {
		return true;
	} else {
		mensagemCampoInvalido(id);		
	}
}

function obterDigitosCPF(cpf) {	
	var limite = cpf.length;
	
	var cont = Math.pow(10, limite - 1);
	
	var digitos = [];
	
	for (var i = 0; i < limite; i++) {
		digitos[i] = parseInt(cpf / cont);
		cpf = cpf % cont;
		cont =  cont / 10;
	}
	
	console.log("Dígitos do CPF: " + digitos);
	
	return digitos;
}

window.onload = inicializar;

document.getElementById("cmp_vazio").onblur = validarCampoVazio;

document.getElementById("cmp_cpf").onblur = validarCPF;