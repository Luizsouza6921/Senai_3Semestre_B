import React, { useState } from 'react';
import { estilos } from "../style/Estilos";

const Aula04_Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const Login = () => {
        if (email === "sesisenai@gmail.com" && senha === "senai123") {
            setMensagem("Login Bem Sucedido!");
        } else {
            setMensagem("Email ou Senha Incorretos!");
        }
    };

    return (
        <div style={estilos.loginConteudo}>
            <img style={estilos.logo} src="https://cdn.bs9.com.br/upload/dn_arquivo/2024/05/37.jpg" alt="" />
            <h1 style={estilos.label}>Login</h1>
            <input type="text" style={estilos.input} placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" style={estilos.input} placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button style={estilos.botao} onClick={Login}>Entrar</button>
            <p>{mensagem}</p>
            <hr />
            <button onClick={() => setEmail("") || setSenha("") || setMensagem("")}>Limpar</button>
        </div>
    );
};


export default Aula04_Login;