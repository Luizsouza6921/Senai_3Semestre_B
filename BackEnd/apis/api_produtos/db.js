import { Pool } from 'pg';

const BD = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'bd_produtos_3b'
});

const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log('Conexão estabelecida com sucesso!');
        cliente.release();
    } catch (error) {
        console.error('Erro ao estabelecer conexão:', error);
    }
}

export { BD, testarConexao };
