import { estilos } from "../style/Estilos";
import React, { useState } from 'react';

const Aula07_Perfil = () => {
    const [seguindo, setSeguindo] = useState(false);
    
    return(
        <div style={estilos.perfilContainer}>
            <div style={estilos.Avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRakrmlyax9zhc0b8sEoZWMIltLrqohUV7cBw&s" style={estilos.Avatar} alt="" />
            </div>
            <div className="InfoUsuario">
                <h2 style={{textAlign: 'center'}}>Panca Barbearia</h2>
                <p style={{textAlign: 'center'}}>Siga a melhor barbearia da região!</p>
            </div>
            <button 
                style={seguindo ? { ...estilos.BotaoSeguir, backgroundColor: 'green' } : estilos.BotaoSeguir} 
                onClick={() => setSeguindo(!seguindo)}
            >
                {seguindo ? 'Seguindo' : 'Seguir'}
            </button>
        </div>
    )
}
export default Aula07_Perfil