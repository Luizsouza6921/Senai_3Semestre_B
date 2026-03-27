import { Pool } from 'pg';

const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'bd_finan_control_3b',
    port: 5432
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

