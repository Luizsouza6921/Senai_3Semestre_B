const documentacao = {
    openapi: '3.0.0',
    info: {
        title: 'API Ordem de Serviços',
        description: 'Documentação da API de Ordens de Serviços',
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
            }
        }
    }
};

export default documentacao;