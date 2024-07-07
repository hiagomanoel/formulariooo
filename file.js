function envio(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let idade = document.getElementById('idade').value;
    let seuGenero = document.querySelector("input[name='genero']:checked").value;
    
    alert('Seu nome é: ' + nome + '\n' 
    + 'Seu email é: ' + email + '\n'
    + 'Sua senha é: ' + senha + '\n'
    + 'Sua idade é: ' + idade + '\n'
    + 'Você é um(a): ' + seuGenero);
}
