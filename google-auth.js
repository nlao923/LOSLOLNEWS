// google-auth.js

function onGoogleSignIn(googleUser) {
    // Aqui você pode obter informações do usuário do objeto googleUser
    // Exemplo: var profile = googleUser.getBasicProfile();
    alert("Autenticação bem-sucedida com o Google!");
}

function onSignIn() {
    gapi.auth2.getAuthInstance().signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId());
        console.log("Nome: " + profile.getName());
        console.log("Email: " + profile.getEmail());
    });
}

gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: '340633522342-kqkkvmudpe2bsndo75shtcpgmh9iqhft.apps.googleusercontent.com'
    });
});
