module.exports = (app, texto) => {
	function salvar(req, res) {
		res.send('Produto > salvar > ' + texto)
	}

	function obter(req, res) {
		res.send('Produto > obter > ' + texto)
	}

	app.post('/usuario', salvar)
	app.get('/usuario', obter)

	return {salvar, obter}
}