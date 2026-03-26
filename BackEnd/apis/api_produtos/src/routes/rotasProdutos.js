import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/produtos', async (req, res) => {
    try {
        const query = `SELECT * FROM produtos`
        const produtos = await BD.query(query);
        res.json(produtos.rows);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

router.post('/produtos', async (req, res) => {
    console.log("Recebido POST /produtos:", req.body);
    const { nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario } = req.body;

    if (!nome || preco === undefined || !id_usuario) {
        return res.status(400).json("Preencha os campos obrigatórios (nome, preco, id_usuario)");
    }

    try {
        const query = `INSERT INTO produtos (nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
        const resultado = await BD.query(query, [nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario]);
        res.status(201).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json("Erro interno no servidor: " + error.message);
    }
});

router.put('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    const { nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario } = req.body;
    console.log(`Recebido PUT /produtos/${id_produto}:`, req.body);
    try {
        const query = `UPDATE produtos SET nome = $1, preco = $2, descricao = $3, categoria = $4, frete_gratis = $5, url_imagem = $6, url_produto = $7, id_usuario = $8 WHERE id_produto = $9 RETURNING *`;
        const resultado = await BD.query(query, [nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario, id_produto]);

        if (resultado.rowCount === 0) {
            return res.status(400).json("Produto não encontrado");
        }
        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.patch('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    const { nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario } = req.body;
    console.log(`Recebido PATCH /produtos/${id_produto}:`, req.body);
    try {
        const verificar = await BD.query(`SELECT * FROM produtos WHERE id_produto = $1`, [id_produto]);
        if (verificar.rows.length === 0) {
            return res.status(400).json("Produto não encontrado");
        }

        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) { campos.push(`nome = $${contador}`); valores.push(nome); contador++; }
        if (preco !== undefined) { campos.push(`preco = $${contador}`); valores.push(preco); contador++; }
        if (descricao !== undefined) { campos.push(`descricao = $${contador}`); valores.push(descricao); contador++; }
        if (categoria !== undefined) { campos.push(`categoria = $${contador}`); valores.push(categoria); contador++; }
        if (frete_gratis !== undefined) { campos.push(`frete_gratis = $${contador}`); valores.push(frete_gratis); contador++; }
        if (url_imagem !== undefined) { campos.push(`url_imagem = $${contador}`); valores.push(url_imagem); contador++; }
        if (url_produto !== undefined) { campos.push(`url_produto = $${contador}`); valores.push(url_produto); contador++; }
        if (id_usuario !== undefined) { campos.push(`id_usuario = $${contador}`); valores.push(id_usuario); contador++; }

        if (campos.length === 0) {
            return res.status(400).json("Nenhum campo para atualizar");
        }

        valores.push(id_produto);
        const comando = `UPDATE produtos SET ${campos.join(', ')} WHERE id_produto = $${contador} RETURNING *`;
        const resultado = await BD.query(comando, valores);

        res.status(200).json(resultado.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar produto:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

router.delete('/produtos/:id_produto', async (req, res) => {
    const { id_produto } = req.params;
    try {
        const verificar = await BD.query(`SELECT * FROM produtos WHERE id_produto = $1`, [id_produto]);
        if (verificar.rows.length === 0) {
            return res.status(400).json("Produto não encontrado");
        }

        const comando = `DELETE FROM produtos WHERE id_produto = $1`;
        await BD.query(comando, [id_produto]);
        res.status(200).json("Produto deletado com sucesso");
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json("Erro interno no servidor");
    }
});

export default router;
