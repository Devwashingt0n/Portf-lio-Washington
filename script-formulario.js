///BLOCO DE ESTILIZAÇÃO DOS ELEMENTOS DO FORMULÁRIO///

///Variáveis com seletores dos elementos do formulário//

let formCampoInfo = document.querySelectorAll(".form_campo-info");
let formCampoLabel = document.querySelectorAll(".form_campo-label");
let formCampoInfoMensagem = document.querySelector(".form_campo-info-mensagem")
let formCampolabelMensagem = document.querySelector(".form_campo-label-mensagem");
let inputsForm = document.querySelectorAll('.input_form-contato');
let textareaForm = document.querySelector('.textarea_form-contato');

/// Aplica uma classe de estilo aos elementos CampoLabel e CampoInfo se os Inputs estiverem em foco.

inputsForm.forEach((input, index) => {
	input.addEventListener('focus', () => {
		formCampoLabel[index].classList.add('label-ativo');
		formCampoInfo[index].classList.add('form_campo-info-ativo');
	})
});

/// Remove a classe de estilo aplicada anteriormente aos elementos CampoLabel e CampoInfo quando os inputs perderem o foco.

inputsForm.forEach((input, index) => {
	input.addEventListener('blur', () => {
		formCampoLabel[index].classList.remove('label-ativo');
		formCampoInfo[index].classList.remove('form_campo-info-ativo');
	})
});

/// Aplica uma classe de estilo aos elementos FormCampoLabelMensagem e FormCampoInfoMensagem quando o textarea estiver em foco. 

textareaForm.addEventListener('focus', () => {
	formCampolabelMensagem.classList.add('label-ativo');
	formCampoInfoMensagem.classList.add('form_campo-info-ativo')
});

/// Remove a classe de estilo aplicada anteriormente aos elementos FormCampoLabelMensagem e FormCampoInfoMensagem quando o textarea perder o foco. 

textareaForm.addEventListener('blur', () => {
	formCampolabelMensagem.classList.remove('label-ativo');
	formCampoInfoMensagem.classList.remove('form_campo-info-ativo');
});

/// FIM DO BLOCO DE ESTILIZAÇÃO DOS ELEMENTOS DO FORMULÁRIO///

//VALIDAÇÕES E EXIBICÃO DE MENSAGENS///

const formContato = document.querySelector(".form-contato");
const formName = document.getElementById('form-name');
const formEmail = document.getElementById('form-email');
const formAssunto = document.getElementById('form-assunto');
const headerForm = document.querySelector(".header-form");
const mensagemEnviada = document.querySelector('.mensagem-enviada');
const mensagemErroCampoVazio = document.querySelectorAll(".mensagem_erro-campoVazio");

formContato.addEventListener("submit", (event) => {
	event.preventDefault();
	verificarNome();
	verificarEmail();
	verificarAssunto();
	exibeMensagemEnviada();
})

function verificarNome() {
	const nomeUsuarioValue = formName.value;
	if (nomeUsuarioValue == "") {
		formCampoInfo[0].classList.add("form_campo-info-erro");
		formCampoLabel[0].classList.add("label-erro")
		mensagemErroCampoVazio[0].style.display = 'block';
	} else {
		formCampoInfo[0].classList = 'form_campo-info';
		formCampoLabel[0].classList = 'form_campo-label';
		mensagemErroCampoVazio[0].style.display = 'none';
	}
	;
}

function verificarEmail() {
	const emailUsuarioValue = formEmail.value;
	if (emailUsuarioValue === "") {
		formCampoInfo[1].classList.add("form_campo-info-erro");
		formCampoLabel[1].classList.add("label-erro")
		mensagemErroCampoVazio[1].style.display = 'block';
	} else {
		formCampoInfo[1].classList = 'form_campo-info';
		formCampoLabel[1].classList = 'form_campo-label';
		mensagemErroCampoVazio[1].style.display = 'none';
	}

}

function verificarAssunto() {
	const assuntoUsuarioValue = formAssunto.value;
	if (assuntoUsuarioValue == "") {
		formCampoInfo[2].classList.add("form_campo-info-erro");
		formCampoLabel[2].classList.add("label-erro")
		mensagemErroCampoVazio[2].style.display = 'block';
	} else {
		formCampoInfo[2].classList = 'form_campo-info';
		formCampoLabel[2].classList = 'form_campo-label';
		mensagemErroCampoVazio[2].style.display = 'none';
	}
	;
}

function exibeMensagemEnviada() {
	if (formName.value != '' && formEmail.value != '' && formAssunto.value != '') {
		mensagemEnviadaComSucesso();
	}
}

function mensagemEnviadaComSucesso() {
	formContato.style.display = 'none';
	headerForm.style.display = 'none';
	mensagemEnviada.style.display = 'flex';
}
