let elementoImagens = document.getElementById("imagens");
let elementoNome = document.getElementById("name");
let elementoLogin = document.getElementById("login");
let elementoLocal = document.getElementById("location");
let elementoSeguidores = document.getElementById("followers");
let elementoRepositoriosPublicos = document.getElementById("public_repos");
let elementoBio = document.getElementById("bio");

let variable = document.getElementById("root");
async function buscaDados() {
  console.log("carregando...");
  try {
    variable.innetText = "carregando...";
    const response = await fetch(
      "https://api.github.com/users/thiago-saturnino"
    );
    const dados = await response.json();
    console.log(dados);
    elementoImagens.innerHTML = "<img src=" + dados?.avatar_url + ".jpg>";
    elementoNome.innerHTML = `Nome: ${dados?.name} `;
    elementoLogin.innerHTML = `Login: ${dados?.login} `;
    elementoLocal.innerHTML = `Local: ${dados?.location} `;
    elementoSeguidores.innerHTML = `Seguidores: ${dados?.followers} `;
    elementoRepositoriosPublicos.innerHTML = `Repositórios Públicos: ${dados?.public_repos} `;
    elementoBio.innerHTML = `Bio: ${dados?.bio} `;
  } catch (e) {
  } finally {
  }
}

buscaDados();
