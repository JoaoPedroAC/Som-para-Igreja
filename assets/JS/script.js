document.body.onload = function () {
	// Vai mostrar na tag h3 as frases abaixo
	function writeInH3() {
		const h3 = document.getElementsByTagName('h3');
		const obj = [
			'abertura até a parte da bruxa',
			'os bixos vão começar a entrar',
			'terminando a peça',
		];
		for (let i = 0; i < obj.length; i++) {
			h3[i].innerText = obj[i].toUpperCase();
		}
	}
	writeInH3();

	// Vai mostrar na tag h4 as frases abaixo
	function writeInH4() {
		const h4 = document.getElementsByTagName('h4');
		const obj = [
			'jardim',
			'música alegre',
			'suspense da bruxa',
			'preguiça',
			'pantera rosa',
			'rato',
			'raposa',
			'leão',
			'fogo',
			'ventania',
			'música triste',
			'aleluia',
			'corre bruxa',
			'pantera rosa',
			'música de encerramento',
		];
		for (let i = 0; i < obj.length; i++) {
			h4[i].innerText = `${i + 1} - ${obj[i].toUpperCase()}`;
		}
	}
	writeInH4();
};
