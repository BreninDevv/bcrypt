import bcrypt from "bcrypt";

async function cadastroUsuario(senha) {
  const hash = await bcrypt.hash(senha, 10);
  console.log(senha, hash);
  return hash;
}

function loginUsuario() {}

function fluxoUsuario() {
  const hash = cadastroUsuario("1234");

  const login = loginUsuario();
}
fluxoUsuario();
