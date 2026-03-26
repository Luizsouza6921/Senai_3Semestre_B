export const estilos = {
    universal: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: "'Roboto', sans-serif",
    },
    body: {
        background: 'linear-gradient(#1354A5 0%, #041832 33%, #041832 66%, #01080E 100%)',
        backgroundAttachment: 'fixed',
        padding: '5%',
    }, 
    container: {
        borderRadius: 24,
        border: '1px solid #0400ffff',
        width: '100%',
        display: 'flex',
    },
    h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#fff',
    },
    p: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
    },
    conteudo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5%',
        gap: '20px',
        padding: '20px',
        width: '100%',
        height: '100%',
        
    },
    informacoes: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
    },
    titulo: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#fff',
        
    },
    mensagem: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#fff',
    },
    chute: {
        width: '500px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '10px',
        border: '2px solid #ccc',
        outline: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
    },
    button: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: '200px',
        padding: '10px 20px',
        marginTop: '10px',
        marginBottom: '10px',
        gap: '10px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#0400ffff',
        color: '#fff',
        transition: 'background-color 0.2s ease',


    },
    imagem: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    botoes: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
    },
}

export default estilos