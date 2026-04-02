import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();


// 📌 GET
router.get('/transacoes', async (req, res) => {
    try {
        const resultado = await BD.query(`SELECT * FROM transacoes`);
        res.status(200).json(resultado.rows);
    } catch (error) {
        console.error('Erro ao listar transações:', error);
        res.status(500).json("Erro interno no servidor");
    }
});


// 📌 POST
router.post('/transacoes', async (req, res) => {
    const {
        valor,
        descricao,
        data_pagamento,
        data_vencimento,
        tipo,
        id_categoria,
        id_subcategoria
    } = req.body;

    const client = await BD.connect();

    try {
        await client.query('BEGIN');

        const resultado = await client.query(`
            INSERT INTO transacoes 
            (valor, descricao, data_registro, data_pagamento, data_vencimento, tipo, id_categoria, id_subcategoria)
            VALUES ($1, $2, NOW(), $3, $4, $5, $6, $7)
            RETURNING *
        `, [
            valor,
            descricao,
            data_pagamento,
            data_vencimento,
            tipo,
            id_categoria,
            id_subcategoria
        ]);

        await client.query('COMMIT');

        res.status(201).json(resultado.rows[0]);

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao criar transação:', error);
        res.status(500).json("Erro interno no servidor");
    } finally {
        client.release();
    }
});


// 📌 PUT
router.put('/transacoes/:id_transacao', async (req, res) => {
    const { id_transacao } = req.params;

    const {
        valor,
        descricao,
        data_pagamento,
        data_vencimento,
        tipo,
        id_categoria,
        id_subcategoria
    } = req.body;

    const client = await BD.connect();

    try {
        await client.query('BEGIN');

        const verificar = await client.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificar.rows.length === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json("Transação não encontrada");
        }

        const resultado = await client.query(`
            UPDATE transacoes SET
                valor = $1,
                descricao = $2,
                data_pagamento = $3,
                data_vencimento = $4,
                tipo = $5,
                id_categoria = $6,
                id_subcategoria = $7
            WHERE id_transacao = $8
            RETURNING *
        `, [
            valor,
            descricao,
            data_pagamento,
            data_vencimento,
            tipo,
            id_categoria,
            id_subcategoria,
            id_transacao
        ]);

        await client.query('COMMIT');

        res.status(200).json(resultado.rows[0]);

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao atualizar transação:', error);
        res.status(500).json("Erro interno no servidor");
    } finally {
        client.release();
    }
});


// 📌 PATCH (igual ao seu padrão)
router.patch('/transacoes/:id_transacao', async (req, res) => {
    const { id_transacao } = req.params;

    const client = await BD.connect();

    try {
        await client.query('BEGIN');

        const verificar = await client.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificar.rows.length === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json("Transação não encontrada");
        }

        const campos = Object.entries(req.body)
            .filter(([_, value]) => value !== undefined)
            .map(([key, _], index) => `${key} = $${index + 1}`)
            .join(', ');

        const valores = Object.values(req.body)
            .filter(value => value !== undefined);

        valores.push(id_transacao);

        const comando = `
            UPDATE transacoes 
            SET ${campos} 
            WHERE id_transacao = $${valores.length}
            RETURNING *
        `;

        const resultado = await client.query(comando, valores);

        await client.query('COMMIT');

        res.status(200).json(resultado.rows[0]);

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao atualizar transação:', error);
        res.status(500).json("Erro interno no servidor");
    } finally {
        client.release();
    }
});


// 📌 DELETE (hard delete mesmo, já que não tem "ativo")
router.delete('/transacoes/:id_transacao', async (req, res) => {
    const { id_transacao } = req.params;

    const client = await BD.connect();

    try {
        await client.query('BEGIN');

        const verificar = await client.query(
            `SELECT * FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        if (verificar.rows.length === 0) {
            await client.query('ROLLBACK');
            return res.status(404).json("Transação não encontrada");
        }

        await client.query(
            `DELETE FROM transacoes WHERE id_transacao = $1`,
            [id_transacao]
        );

        await client.query('COMMIT');

        res.status(200).json("Transação deletada com sucesso");

    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro ao deletar transação:', error);
        res.status(500).json("Erro interno no servidor");
    } finally {
        client.release();
    }
});


export default router;
