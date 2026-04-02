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
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
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
                                $ref: "#/components/schemas/Cadastro_Usuarios"
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
                                $ref: "#/components/schemas/Atualizacao_Usuario"
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
                                apenas_nome: {summary: "Atualizar apenas o nome", value: {nome: "Novo Nome"}},
                                apenas_email: {summary: "Atualizar apenas o email", value: {email: "novo@email"}}
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
                                $ref: "#/components/schemas/Login_Usuario"
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
                                    items: { $ref: "#/components/schemas/Lista_Categorias" }
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
                                $ref: "#/components/schemas/Cadastro_Categoria"
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
                                $ref: "#/components/schemas/Atualizacao_Categoria"
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
                                apenas_nome: {summary: "Atualizar apenas o nome", value: {nome: "Nova Categoria"}},
                                apenas_email: {summary: "Atualizar apenas o email", value: {email: "nova.categoria@email.com"}}
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
                                $ref: "#/components/schemas/Cadastro_Transacoes"
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
            Cadastro_Transacoes : {
                type: "object",
                properties: {
                    id_categoria: { type: "integer", example: 1 },
                    valor: { type: "integer", example: 100 }
                }
            }


        }
    }
}
}

        

export default documentacao;
