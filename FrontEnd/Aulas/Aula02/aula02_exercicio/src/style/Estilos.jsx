/** @type {Object.<string, import('react').CSSProperties>} */
export const estilos = {
    tituloModulo: {
        color: 'blue',
        fontWeight: 'bold'
    },
    descricaoModulo: {
        fontStyle: 'italic'
    },
    fundo: {
        backgroundColor: '#f3f4f6',
        minHeight: '100vh'
    },
    conteudo: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
    },
    listaAulas: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    cardAula: {
        backgroundColor: 'white',
        padding: '16px',
        borderRadius: '8px',
        width: '100%',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    filmes: {
    display: 'inline-block',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
},
cardFilme: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
},
   

    imagens_filme: {
        width: '300px',
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        border: '2px solid #ddd',
    },
    botao: {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        padding: '4px 4px',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s ease',
    },
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
        boxSizing: 'border-box',
        marginBottom: '10px'
    },
    botaoContainer: {
        display: 'flex',
        gap: '10px',
        marginTop: '10px'
    },
    perfilContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        margin: '20px auto'
    },
    Avatar: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        marginBottom: '15px',
        border: '2px solid blue',
    },
    BotaoSeguir: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease'
    },
    gridProdutos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '10px 0'
    },
    cardProduto: {
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '15px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        transition: 'transform 0.2s ease',
        border: '1px solid #eee'
    },
    imagemProduto: {
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    nomeProduto: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        margin: '0',
        color: '#333'
    },
    precoProduto: {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#2ecc71',
        margin: '5px 0'
    },
    badgeFrete: {
        backgroundColor: '#e8f5e9',
        color: '#2e7d32',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    categoriaBadge: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        color: '#666',
        letterSpacing: '0.5px'
    }
}
   