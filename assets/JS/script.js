document.body.onload = function () {
	const h = document.getElementsByTagName('h3');
// Vai mostrar na tag h3 as frases abaixo
	function writeInH3() {
		const obj = [
			'sons das entradas',
			'sons dos personagens',
			'sons de algumas ações',
		];
		for (let i = 0; i < obj.length; i++) {
			h[i].innerText = obj[i].toUpperCase();
		}
	}
	writeInH3();
};
