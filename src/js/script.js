document.getElementById('button').addEventListener('click', () => {
 let encontrarCep = document.getElementById('encontrar-cep').value

    async function mostrarText(){
        let url =  `https://viacep.com.br/ws/${encontrarCep}/json/`
        let respostaUrl = await fetch(url)

        let json = await respostaUrl.json()

        document.getElementById('bairro').value = json.bairro

        document.getElementById('rua').value = json.logradouro

        document.getElementById('municipio').value = json.localidade

        document.getElementById('uf').value = json.uf
        }
        
    mostrarText()

})

