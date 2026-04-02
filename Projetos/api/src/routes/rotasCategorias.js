import { Router } from "express";
import { BD } from "../../db.js";


const router = Router();

router.get('/categorias', async (req, res) => {
    try {
        const comando = `SELECT * FROM categorias WHERE ativo = true`;

        const categorias = await BD.query(comando);

        return res.status(200).json(categorias.rows);
    } catch (error) {
        console.error('Erro ao listar categorias:', error.message);
        res.status(500).json({error: 'Erro interno no servidor'});
    }
});


router.post('/categorias', async (req, res) => {
    const { nome, descricao, tipo, cor, icone, ativo = true} = req.body;

    try {
        const resultado = await BD.query(`
            INSERT INTO categorias (nome, descricao, tipo, cor, icone, ativo)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [nome, descricao, tipo, cor, icone, ativo]);

        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar categoria:', error);
        res.status(500).json("Erro interno no servidor: " + error.message);
    }
});

router.put('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const { nome, descricao, tipo, cor, icone, ativo} = req.body;

    try {
        const verificarCategoria = await BD.query(`SELECT * FROM categorias WHERE id_categoria = $1`, [id_categoria]);
        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({error: 'Categoria não encontrada'});
        }

        const query = `UPDATE categorias SET nome = $1, descricao = $2, tipo = $3, cor = $4, icone = $5, ativo = $6 WHERE id_categoria = $7 RETURNING *`;
        const resultado = await BD.query(query, [nome, descricao, tipo, cor, icone, ativo, id_categoria]);
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
        res.status(500).json({error: 'Erro interno no servidor'});
    }
});

router.patch('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const { nome, descricao, tipo, cor, icone, ativo } = req.body;

    console.log(`Recebido PATCH /categorias/${id_categoria}:`, req.body);

    try {
        const verificarCategoria = await BD.query(
            `SELECT * FROM categorias WHERE id_categoria = $1`,
            [id_categoria]
        );

        if (verificarCategoria.rows.length === 0) {
            return res.status(400).json("Categoria não encontrado");
        }

        
        const campos = Object.entries(req.body)
            .filter(([key, value]) => value !== undefined)
            .map(([key, value], index) => `${key} = $${index + 1}`)
            .join(', ');

        const valores = Object.values(req.body)
            .filter(value => value !== undefined);

        valores.push(id_categoria);

        
        const comando = `UPDATE categorias SET ${campos} WHERE id_categoria = $${valores.length} RETURNING *`;

        const resultado = await BD.query(comando, valores);

        return res.status(200).json(resultado.rows[0]);

    } catch (error) {
        console.error('Erro ao atualizar categoria:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.delete('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria } = req.params;
    try {
        const verificarCategoria = await BD.query(`SELECT * FROM categorias WHERE id_categoria = $1`, [id_categoria]);
        if (verificarCategoria.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        
        const comando = `UPDATE categorias SET ativo = false WHERE id_categoria = $1`;
        await BD.query(comando, [id_categoria]);
        res.status(200).json("Categoria deletado com sucesso");
    } catch (error) {
        console.error('Erro ao deletar categoria:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json("Preencha todos os campos (email, senha)");
    }
    try {
        const comando = 'SELECT id_usuario, nome, email, senha FROM usuarios WHERE email = $1'
        const resultado = await BD.query(comando, [email]);

        if (resultado.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        const usuario = resultado.rows[0];
        const senhaCorreta = bcrypt.compareSync(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(401).json("Senha incorreta");
        }
        res.status(200).json({
            message: "Login realizado com sucesso",
            usuario: {
                id_usuario: usuario.id_usuario,
                nome: usuario.nome,
                email: usuario.email
            }
        });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

export default router;
