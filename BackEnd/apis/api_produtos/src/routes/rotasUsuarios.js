import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios`
        const usuarios = await BD.query(query);
        res.json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

router.post('/usuarios', async (req, res) => {
    console.log("Recebido POST /usuarios:", req.body);
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json("Preencha todos os campos (nome, email, senha)");
    }

    try {
        const verificarEmail = await BD.query(`SELECT * FROM usuarios WHERE email = $1`, [email]);
        if (verificarEmail.rows.length > 0) {
            return res.status(400).json("O email já está cadastrado");
        }
        const comando = `INSERT INTO usuarios(nome, email, senha) VALUES ($1, $2, $3) RETURNING *`;
        const valores = [nome, email, senha];
        const resultado = await BD.query(comando, valores);
        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json("Erro interno no servidor: " + error.message);
    }
});

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;
    console.log(`Recebido PUT /usuarios/${id_usuario}:`, req.body);
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        const verificarEmail = await BD.query(`SELECT * FROM usuarios WHERE email = $1 AND id_usuario <> $2`, [email, id_usuario]);
        if (verificarEmail.rows.length > 0) {
            return res.status(400).json("O email já está sendo usado por outro usuário");
        }
        const query = `UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id_usuario = $4 RETURNING *`;
        const resultado = await BD.query(query, [nome, email, senha, id_usuario]);
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.patch('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body;
    console.log(`Recebido PATCH /usuarios/${id_usuario}:`, req.body);
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        if (email !== undefined) {
            const verificarEmail = await BD.query(`SELECT * FROM usuarios WHERE email = $1 AND id_usuario <> $2`, [email, id_usuario]);
            if (verificarEmail.rows.length > 0) {
                return res.status(400).json("O email já está sendo usado por outro usuário");
            }
        }
        const campos = [];
        const valores = [];
        let contador = 1;
        if (nome !== undefined) { campos.push(`nome = $${contador}`); valores.push(nome); contador++; }
        if (email !== undefined) { campos.push(`email = $${contador}`); valores.push(email); contador++; }
        if (senha !== undefined) { campos.push(`senha = $${contador}`); valores.push(senha); contador++; }
        if (campos.length === 0) {
            return res.status(400).json("Nenhum campo para atualizar");
        }
        valores.push(id_usuario);
        const comando = `UPDATE usuarios SET ${campos.join(', ')} WHERE id_usuario = $${contador} RETURNING *`;
        const resultado = await BD.query(comando, valores);
        return res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.delete('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        const verificarProdutos = await BD.query(`SELECT * FROM produtos WHERE id_usuario = $1`, [id_usuario]);
        if (verificarProdutos.rows.length > 0) {
            return res.status(400).json("Não é possível deletar. O usuário possui produtos vinculados.");
        }
        const comando = `DELETE FROM usuarios WHERE id_usuario = $1`;
        await BD.query(comando, [id_usuario]);
        res.status(200).json("Usuário deletado com sucesso");
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.post('/login', async (req, res) => {
    if (!email || !senha) {
        return res.status(400).json("Preencha todos os campos (email, senha)");
    }
    try {
        const comando = 'SELECT id_usuario, nome, email, senha FROM USUARIO WHERE email = 1$'
        const resultado = await BD.query(comando, [email]);
        if (resultado.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
        const usuario = resultado.rows[0];
        if (usuario.senha !== senha) {
            return res.status(400).json("Senha incorreta");
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
