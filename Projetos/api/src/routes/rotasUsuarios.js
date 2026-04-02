import { Router } from "express";
import { BD } from "../../db.js";
import bcrypt from "bcrypt";

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`
        const usuarios = await BD.query(query);
        res.json(usuarios.rows);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

router.post('/usuarios', async (req, res) => {
    console.log("Recebido POST /usuarios:", req.body);
    const { nome, email, senha, tipo_acesso, ativo } = req.body;
    try {
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
        const comando = `INSERT INTO usuarios(nome, email, senha, tipo_acesso, ativo) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const valores = [nome, email, senhaCriptografada, tipo_acesso, ativo ?? true];

        const resultado = await BD.query(comando, valores);
        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json("Erro interno no servidor: " + error.message);
    }
});

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo_acesso, ativo } = req.body;
    console.log(`Recebido PUT /usuarios/${id_usuario}:`, req.body);
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios WHERE id_usuario = $1`, [id_usuario]);
        if (verificarUsuario.rows.length === 0) {
            return res.status(400).json("Usuário não encontrado");
        }
       
        const saltRounds = 10;
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
       
        const verificarEmail = await BD.query(`SELECT * FROM usuarios WHERE email = $1 AND id_usuario <> $2`, [email, id_usuario]);
        if (verificarEmail.rows.length > 0) {
            return res.status(400).json("O email já está sendo usado por outro usuário");
        }
       
        const query = `UPDATE usuarios SET nome = $1, email = $2, senha = $3, tipo_acesso = $4, ativo = $5 WHERE id_usuario = $6 RETURNING *`;
        const resultado = await BD.query(query, [nome, email, senhaCriptografada, tipo_acesso, ativo, id_usuario]);
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.patch('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha, tipo_acesso, ativo } = req.body;
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
        if (senha !== undefined) {
            const saltRounds = 10;
            const senhaCriptografada = await bcrypt.hash(senha, saltRounds);
            campos.push(`senha = $${contador}`);
            valores.push(senhaCriptografada);
            contador++;
        }
        if (tipo_acesso !== undefined) { campos.push(`tipo_acesso = $${contador}`); valores.push(tipo_acesso); contador++; }
        if (ativo !== undefined) { campos.push(`ativo = $${contador}`); valores.push(ativo); contador++; }
       
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
        
        const comando = `UPDATE usuarios SET ativo = false WHERE id_usuario = $1`;
        await BD.query(comando, [id_usuario]);
        res.status(200).json("Usuário deletado com sucesso");
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
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
