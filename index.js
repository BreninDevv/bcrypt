import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conectado ao banco");
  } catch (error) {
    console.log("error", error);
  }
}

async function cadastroUsuario(senha) {
  const hash = bcrypt.hash(senha, 10);
  return hash;
}

async function loginUsuario(senha, hashSenha) {
  const verify = await bcrypt.compare(senha, hashSenha);
  return verify;
}

async function fluxoUsuario() {
  const hash = await cadastroUsuario("1234");

  const login = await loginUsuario("1234", hash);

  console.log(login);
}
connectDb();
fluxoUsuario();
