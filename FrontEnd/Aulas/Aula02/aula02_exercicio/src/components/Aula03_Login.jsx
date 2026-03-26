import React, { useState } from 'react';

const Aula03_Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    return (
        <div style={estilos.loginConteudo}>
            <img style={estilos.logo} src="https://cdn.bs9.com.br/upload/dn_arquivo/2024/05/37.jpg" alt="Logo" />
            <h1 style={{ ...estilos.label, color: "rgba(255, 0, 17, 0.93)" }}>Login</h1>
            <input 
                style={estilos.input} 
                type="email" 
                placeholder="Digite o Email Aqui:" 
                onChange={(event) => setEmail(event.target.value)} 
                value={email}
            />
            <input 
                style={estilos.input} 
                type="password" 
                placeholder="Digite a Senha Aqui:" 
                onChange={(event) => setSenha(event.target.value)} 
                value={senha}
            />
            <button style={estilos.botao}>Entrar</button>
        </div>
    )
}
/** @type {Object.<string, import('react').CSSProperties>} */
const estilos = {
    loginConteudo : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        width : '300px',
        margin : '10px auto',
        backgroundColor: '#fff',
        padding : '20px',
        boxShadow : '0px 4px 6px rgba(0, 0, 0, 0.2)',
        gap : '5px'
    },
    logo: {
        height: '50px'
    },
    label: {
        display: 'block',
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    },
    botao: {
        width: '100%',
        padding: '10px',
        cursor: 'pointer'
    }
}

export default Aula03_Login