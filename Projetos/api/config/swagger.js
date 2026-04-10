const documentacao = {
    openapi: '3.0.0',
    info: {
        title: 'API Financeira - FinanControl',
        description: 'Documentação da API de gerenciamento financeiro - FinanControl',
        version: "1.0.0",
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor Local',
        },
    ],
    tags: [
        {
            name: 'Usuários',
            description: 'Operações relacionadas aos usuários',
        },
        {
            name: 'Categorias',
            description: 'Operações relacionadas as categorias',
        },
    ],
    paths: {
        '/usuarios': {
            get: {
                tags: ['Usuários'],
                summary: 'Lista os usuários',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" },
                                    example: {
                                        "id_usuario": 2,
                                        "nome": "Luiz REBEEE",
                                        "email": "luizeee@exemplo.com",
                                        "senha": "$2b$10$kdUw2/B4HzM4efsSVZ6GweIo9gGFYdXCVBrlPu6nfqLawix563YhK",
                                        "tipo_acesso": "admin",
                                        "ativo": null
                                    },
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastra um novo usuário',
                description: 'Recebe nome, email e senha para cadastrar um novo usuário',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Usuarios",
                                example: {
                                    "nome": "Luiz REBEEE",
                                    "email": "luizeee@exemplo.com",
                                    "senha": "$2b$10$kdUw2/B4HzM4efsSVZ6GweIo9gGFYdXCVBrlPu6nfqLawix563YhK",
                                    "tipo_acesso": "admin",
                                    "ativo": null
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário cadastrado com sucesso" },
                    400: { description: "Erro na requisição (Preencha todos os campos)" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/usuarios/{id_usuario}': {
            put: {
                tags: ['Usuários'],
                summary: 'Atualiza um usuário',
                description: 'Atualiza os dados de um usuário existente, sendo necessário informar o id do usuário e os dados a serem atualizados',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        required: true,
                        description: 'ID do usuário a ser atualizado',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Usuario",
                                example: {
                                    "id_usuario": 2,
                                    "nome": "Luiz REBEEE",
                                    "email": "luizeee@exemplo.com",
                                    "senha": "$2b$10$kdUw2/B4HzM4efsSVZ6GweIo9gGFYdXCVBrlPu6nfqLawix563YhK",
                                    "tipo_acesso": "admin",
                                    "ativo": null
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário atualizado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            patch: {
                tags: ['Usuários'],
                summary: 'Atualiza parcialmente um usuário',
                description: 'Atualiza parcialmente os dados de um usuário existente, sendo necessário informar o id do usuário e os dados a serem atualizados',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        required: true,
                        description: 'ID do usuário a ser atualizado',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Parcial_Usuario"
                            },
                            examples: {
                                apenas_nome: { summary: "Atualizar apenas o nome", value: { nome: "Novo Nome" } },
                                apenas_email: { summary: "Atualizar apenas o email", value: { email: "novo@email" } }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário atualizado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Deleta um usuário',
                description: 'Deleta um usuário existente, sendo necessário informar o id do usuário',
                parameters: [
                    {
                        name: 'id_usuario',
                        in: 'path',
                        required: true,
                        description: 'ID do usuário a ser deletado',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário deletado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário deletado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/login': {
            post: {
                tags: ['Usuários'],
                summary: 'Login de usuário',
                description: 'Login de usuário',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario",
                                example: {
                                    email: "email",
                                    senha: "senha"
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Login realizado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Usuário não encontrado" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/categorias': {
            get: {
                tags: ['Categorias'],
                summary: 'Lista as categorias',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Categorias" },
                                    example: {
                                        "id_categoria": 2,
                                        "nome": "Saude77",
                                        "descricao": "77Produtos de Saude",
                                        "tipo": "T",
                                        "cor": "black7",
                                        "icone": "nomedoIcone77",
                                        "ativo": true
                                    },

                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Categorias'],
                summary: 'Cadastra uma nova categoria',
                description: 'Recebe o nome da categoria para cadastrar uma nova categoria',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Categoria",
                                example: {
                                    "id_categoria": 2,
                                    "nome": "Saude77",
                                    "descricao": "77Produtos de Saude",
                                    "tipo": "T",
                                    "cor": "black7",
                                    "icone": "nomedoIcone77",
                                    "ativo": true
                                },
                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário cadastrado com sucesso" },
                    400: { description: "Erro na requisição (Preencha todos os campos)" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/categorias/{id_categoria}': {
            put: {
                tags: ['Categorias'],
                summary: 'Atualiza uma categoria',
                description: 'Atualiza os dados de uma categoria existente, sendo necessário informar o id da categoria e os dados a serem atualizados',
                parameters: [
                    {
                        name: 'id_categoria',
                        in: 'path',
                        required: true,
                        description: 'ID da categoria a ser atualizado',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Categoria",
                                example: {
                                    "id_categoria": 2,
                                    "nome": "Saude77",
                                    "descricao": "77Produtos de Saude",
                                    "tipo": "T",
                                    "cor": "black7",
                                    "icone": "nomedoIcone77",
                                    "ativo": true
                                },
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Categoria atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Categoria atualizado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Categoria não encontrado",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Categoria não encontrado" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            patch: {
                tags: ['Categorias'],
                summary: 'Atualiza parcialmente uma categoria',
                description: 'Atualiza parcialmente os dados de uma categoria existente, sendo necessário informar o id da categoria e os dados a serem atualizados',
                parameters: [
                    {
                        name: 'id_categoria',
                        in: 'path',
                        required: true,
                        description: 'ID da categoria a ser atualizado',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Parcial_Categoria"
                            },
                            examples: {
                                apenas_nome: { summary: "Atualizar apenas o nome", value: { nome: "Nova Categoria" } },
                                apenas_email: { summary: "Atualizar apenas o email", value: { email: "nova.categoria@email.com" } }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Categoria atualizado com sucesso",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Categoria atualizado com sucesso" }
                            }
                        }
                    },
                    400: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                schema: { type: "string", example: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ['Categorias'],
                summary: 'Deleta uma categoria',
                description: 'Deleta uma categoria existente, sendo indispensável informar o id da categoria',
                parameters: [
                    {
                        name: 'id_categoria',
                        in: 'path',
                        required: true,
                        description: 'ID da categoria a ser deletada',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: { description: "Categoria deletada com sucesso" },
                    400: { description: "Categoria nao encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/subcategorias": {
            get: {
                tags: ["Subcategorias"],
                summary: "Listar todas as subcategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Subcategorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Subcategorias'],
                summary: 'Cadastrar nova subcategoria',
                description: "Recebe nome, ativo e id_categoria para cadastrar nova subcategoria",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Subcategoria",
                                example: {
                                    nome: "Alimentação",
                                    ativo: true,
                                    id_categoria: 1
                                }
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ['Subcategorias'],
                summary: 'Atualizar todos os dados da subcategoria',
                description: 'Atualiza todos os dados de uma subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Subcategoria" },
                            example: {
                                nome: "Alimentação",
                                ativo: true,
                                id_categoria: 1
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }

            },
            delete: {
                tags: ['Subcategorias'],
                summary: 'Remover Subcategoria',
                description: 'Remove subcategoria existente pelo ID',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removida ",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Subcategoria removida com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Subcategoria não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }

                }
            }
        },

        '/transacoes': {
            get: {
                tags: ['Transações'],
                summary: 'Lista todas as transações',
                description: 'Lista todas as transações',
                responses: {
                    200: { description: "Transações listadas com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            post: {
                tags: ['Transações'],
                summary: 'Cadastra uma nova transação',
                description: 'Recebe o id da categoria e o valor para cadastrar uma nova transação',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastro_Transacoes",
                                example: {
                                    id_categoria: 1,
                                    valor: 100,
                                    tipo: "E",
                                    data: "2023-08-01",
                                    descricao: "Alimentação",
                                    id_subcategoria: 1,
                                    data_vencimento: "2023-08-01",
                                    data_pagamento: "2023-08-01"
                                }

                            }
                        }
                    }
                },
                responses: {
                    201: { description: "Transação cadastrada com sucesso" },
                    400: { description: "Erro na requisição (Preencha todos os campos)" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/transacoes/{id_transacao}': {
            put: {
                tags: ['Transações'],
                summary: 'Atualiza uma transação',
                description: 'Recebe o id da transação para atualizar uma transação',
                parameters: [
                    {
                        name: 'id_transacao',
                        in: 'path',
                        required: true,
                        description: 'ID da transação a ser atualizada',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Transacoes",
                                example: {
                                    id_categoria: 1,
                                    valor: 100,
                                    tipo: "E",
                                    data: "2023-08-01",
                                    descricao: "Alimentação",
                                    id_subcategoria: 1,
                                    data_vencimento: "2023-08-01",
                                    data_pagamento: "2023-08-01"
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Transação atualizada com sucesso" },
                    400: { description: "Erro na requisição (Preencha todos os campos)" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            patch: {
                tags: ['Transações'],
                summary: 'Atualiza parcialmente uma transação',
                description: 'Atualiza parcialmente os dados de uma transação existente, sendo indispensável informar o id da transação e os dados a serem atualizados',
                parameters: [
                    {
                        name: 'id_transacao',
                        in: 'path',
                        required: true,
                        description: 'ID da transação a ser atualizada',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Atualizacao_Transacoes",
                                example: {
                                    id_categoria: 1,
                                    valor: 100,
                                    tipo: "E",
                                    data: "2023-08-01",
                                    descricao: "Alimentação",
                                    id_subcategoria: 1,
                                    data_vencimento: "2023-08-01",
                                    data_pagamento: "2023-08-01"
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Transação atualizada com sucesso" },
                    400: { description: "Erro na requisição (Preencha todos os campos)" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ['Transações'],
                summary: 'Deleta uma transação',
                description: 'Deleta uma transação existente, sendo indispensável informar o id da transação',
                parameters: [
                    {
                        name: 'id_transacao',
                        in: 'path',
                        required: true,
                        description: 'ID da transação a ser deletada',
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: { description: "Transação deletada com sucesso" },
                    400: { description: "Transação nao encontrada" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        "/transacoes/tipo/{tipo}": {
            get: {
                tags: ["Transações"],
                summary: "Listar transações por tipo",
                description: "Retorna uma lista de transações filtradas pelo tipo",
                parameters: [
                    {
                        name: "tipo",
                        in: "path",
                        required: true,
                        description: "Tipo da transação (E para entrada, S para saída)",
                        schema: {
                            type: "string",
                            enum: ["E", "S"],
                            example: "E"
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Lista de transações por tipo",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Listar_Transacao" },
                                    example: {
                                        "id": 1,
                                        "id_subcategoria": 1,
                                        "id_categoria": 1,
                                        "id_conta": 1,
                                        "tipo": "E",
                                        "valor": 10.00,
                                        "descricao": "Pagamento de conta de luz",
                                        "data_vencimento": "2023-06-01",
                                        "data_pagamento": "2023-06-01",
                                        "data_registro": "2023-06-01"
                                    }


                                }
                            }
                        }
                    },
                    404: {
                        description: "Nenhuma transação encontrada para o tipo especificado"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/transacoes/categoria/{id_categoria}": {
            get: {
                tags: ["Transações"],
                summary: "Listar transações por categoria",
                description: "Retorna uma lista de transações filtradas pela categoria",
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria para filtrar as transações",
                        schema: {
                            type: "number",
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Lista de transações por categoria",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Listar_Transacao" },
                                    example: {
                                        "id": 1,
                                        "id_subcategoria": 1,
                                        "id_categoria": 1,
                                        "id_conta": 1,
                                        "tipo": "E",
                                        "valor": 10.00,
                                        "descricao": "Pagamento de conta de luz",
                                        "data_vencimento": "2023-06-01",
                                        "data_pagamento": "2023-06-01",
                                        "data_registro": "2023-06-01"
                                    }

                                }
                            }
                        }
                    },
                    404: {
                        description: "Nenhuma transação encontrada para o tipo especificado"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/transacoes/subcategoria/{id_subcategoria}": {
            get: {
                tags: ["Transações"],
                summary: "Listar transações por subcategoria",
                description: "Retorna uma lista de transações filtradas pela subcategoria",
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria para filtrar as transações",
                        schema: {
                            type: "number",
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Lista de transações por subcategoria",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Listar_Transacao" },
                                    example: {
                                        "id": 1,
                                        "id_subcategoria": 1,
                                        "id_categoria": 1,
                                        "id_conta": 1,
                                        "tipo": "E",
                                        "valor": 10.00,
                                        "descricao": "Pagamento de conta de luz",
                                        "data_vencimento": "2023-06-01",
                                        "data_pagamento": "2023-06-01",
                                        "data_registro": "2023-06-01"
                                    }

                                }
                            }
                        }
                    },
                    404: {
                        description: "Nenhuma transação encontrada para o tipo especificado"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        components: {
            schemas: {
                Lista_Usuarios: {
                    type: "object",
                    properties: {
                        id_usuario: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Ana Silva" },
                        email: { type: "string", example: "ana@exemplo.com" },
                        senha: { type: "string", example: "senha123" },
                        tipo_acesso: { type: "string", example: "admin" }
                    }
                },
                Cadastro_Usuarios: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Luiz Souza" },
                        email: { type: "string", example: "luiz@exemplo.com" },
                        senha: { type: "string", example: "senha123" },
                        tipo_acesso: { type: "string", example: "admin" }
                    }
                },
                Atualizacao_Usuario: {
                    type: "object",
                    required: ["nome", "email", "senha"],
                    properties: {
                        nome: { type: "string", example: "Luiz Souza" },
                        email: { type: "string", example: "luiz@exemplo.com" },
                        senha: { type: "string", example: "senha123" },
                        tipo_acesso: { type: "string", example: "admin" }
                    }
                },
                Atualizacao_Parcial_Usuario: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Luiz Souza" },
                        email: { type: "string", example: "luiz@exemplo.com" },
                        senha: { type: "string", example: "senha123" },
                        tipo_acesso: { type: "string", example: "admin" }
                    }
                },
                Login_Usuario: {
                    type: "object",
                    properties: {
                        email: { type: "string", example: "senai@gmail.com" },
                        senha: { type: "string", example: "123" }
                    }
                },
                Lista_Categorias: {
                    type: "object",
                    properties: {
                        id_categoria: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Saude" },
                        descricao: { type: "string", example: "Produtos de Saude" },
                        cor: { type: "string", example: "white" },
                        icone: { type: "string", example: "nomedoIcone" },
                        tipo: { type: "string", example: "E" }

                    }
                },
                Cadastro_Categoria: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Saude" },
                        descricao: { type: "string", example: "Produtos de Saude" },
                        cor: { type: "string", example: "white" },
                        icone: { type: "string", example: "nomedoIcone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Atualizacao_Categoria: {
                    type: "object",
                    required: ["nome", "descricao", "cor", "icone", "tipo"],
                    properties: {
                        nome: { type: "string", example: "Saude" },
                        descricao: { type: "string", example: "Produtos de Saude" },
                        cor: { type: "string", example: "white" },
                        icone: { type: "string", example: "nomedoIcone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Atualizacao_Parcial_Categoria: {
                    type: "object",
                    properties: {
                        nome: { type: "string", example: "Saude" },
                        descricao: { type: "string", example: "Produtos de Saude" },
                        cor: { type: "string", example: "white" },
                        icone: { type: "string", example: "nomedoIcone" },
                        tipo: { type: "string", example: "E" }
                    }
                },
                Cadastro_Transacoes: {
                    type: "object",
                    properties: {
                        id_categoria: { type: "integer", example: 1 },
                        valor: { type: "number", example: 100.00 }
                    }
                },
                Atualizacao_Transacoes: {
                    type: "object",
                    properties: {
                        valor: { type: "number", example: 150.00 },
                        descricao: { type: "string", example: "Conta de luz" },
                        data_pagamento: { type: "string", format: "date", example: "2025-04-01" },
                        data_vencimento: { type: "string", format: "date", example: "2025-04-05" },
                        tipo: { type: "string", example: "despesa" },
                        id_categoria: { type: "integer", example: 2 },
                        id_subcategoria: { type: "integer", example: 5 }
                    }
                },
                Atualizacao_Parcial_Transacoes: {
                    type: "object",
                    properties: {
                        id_categoria: { type: "integer", example: 2 },
                        id_subcategoria: { type: "integer", example: 5 },
                        nome: { type: "string", example: "Saude" },
                        descricao: { type: "string", example: "Produtos de Saude" },
                        cor: { type: "string", example: "white" },
                        icone: { type: "string", example: "nomedoIcone" },
                        tipo: { type: "string", example: "E" }
                    },
                },
                Listar_Subcategorias: {
                    type: 'object',
                    properties: {
                        id: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Alimentação" },
                        ativo: { type: "boolean", example: true },
                        id_categoria: { type: "integer", example: 1 }
                    }
                },
                Cadastrar_Subcategoria: {
                    type: 'object',
                    properties: {
                        nome: { type: "string", example: "TI" },
                        ativo: { type: "boolean", example: true },
                        id_categoria: { type: "integer", example: 1 }
                    }
                },
                Atualizar_Subcategoria: {
                    type: 'object',
                    required: ["nome", "ativo", "id_categoria"],
                    properties: {
                        nome: { type: "string", example: "TI" },
                        ativo: { type: "boolean", example: true },
                        id_categoria: { type: "integer", example: 1 }
                    }
                },
                Listar_Transacao: {
                    type: 'object',
                    properties: {
                        id: { type: "integer", example: 1 },
                        id_categoria: { type: "integer", example: 1 },
                        id_subcategoria: { type: "integer", example: 1 },
                        valor: { type: "number", example: 100.00 },
                        descricao: { type: "string", example: "Conta de luz" },
                        data_pagamento: { type: "string", format: "date", example: "2025-04-01" },
                        data_vencimento: { type: "string", format: "date", example: "2025-04-05" },
                        tipo: { type: "string", example: "despesa" }
                    }
                }



            }
        }
    }
}



export default documentacao
