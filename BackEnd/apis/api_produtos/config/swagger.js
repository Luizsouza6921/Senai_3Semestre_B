const documentacao = {
    openapi: '3.0.0',
    info: {
        title: 'API Produtos',
        description: 'Documentação da API de Produtos',
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
            name: 'Produtos',
            description: 'Operações relacionadas aos produtos',
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
                            schema: { $ref: "#/components/schemas/Cadastro_Usuarios" },
                            examples: {
                                ana: { summary: "Ana Silva", value: { nome: "Ana Silva", email: "ana.silva@email.com", senha: "senha123" } },
                                miguel: { summary: "Miguel Mendes", value: { nome: "Miguel Mendes", email: "miguel.mendes@email.com", senha: "senha321" } },
                                nicolas: { summary: "Nicolas Henrique", value: { nome: "Nicolas Henrique", email: "nicolas.henrique@email.com", senha: "senha456" } }
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
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" },
                            examples: {
                                ana: { summary: "Ana Silva", value: { nome: "Ana Silva", email: "ana.silva@email.com", senha: "senha123" } },
                                miguel: { summary: "Miguel Mendes", value: { nome: "Miguel Mendes", email: "miguel.mendes@email.com", senha: "senha321" } }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Usuário atualizado com sucesso" },
                    400: { description: "Usuário não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            patch: {
                tags: ['Usuários'],
                summary: 'Atualiza parcialmente um usuário',
                description: 'Atualiza parcialmente os dados de um usuário existente, sendo necessário informar o id do usuário e os dados a serem atualizados',
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Usuario" },
                            examples: {
                                apenas_nome: { summary: "Atualizar apenas o nome", value: { nome: "Novo Nome" } },
                                apenas_email: { summary: "Atualizar apenas o email", value: { email: "novo@email.com" } }
                            }
                        }
                    }
                },
                responses: {
                    200: { description: "Usuário atualizado com sucesso" },
                    400: { description: "Usuário não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Deleta um usuário',
                parameters: [{ name: 'id_usuario', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: "Usuário deletado com sucesso" },
                    400: { description: "Usuário não encontrado ou possui vínculos" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/login': {
            post: {
                tags: ['Usuários'],
                summary: 'Realiza login',
                description: 'Realiza login no sistema, sendo necessário informar o email e a senha',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Login_Usuario" },
                        }
                    }
                },
                responses: {
                    200: { description: "Login realizado com sucesso",
                        content: {
                            'application/json': {
                                schema: { $ref: "#/components/schemas/RespostaLogin" },
                            }
                        }
                     },
                    400: { description: "Usuário não encontrado ou senha incorreta" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/produtos': {
            get: {
                tags: ['Produtos'],
                summary: 'Lista os produtos',
                responses: {
                    200: {
                        description: 'Dados obtidos com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Produtos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Produtos'],
                summary: 'Cadastra um produto',
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Produto" }
                        }
                    }
                },
                responses: {
                    201: { description: "Produto cadastrado com sucesso" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },
        '/produtos/{id_produto}': {
            put: {
                tags: ['Produtos'],
                summary: 'Atualiza um produto',
                parameters: [{ name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Produto" }
                        }
                    }
                },
                responses: {
                    200: { description: "Produto atualizado com sucesso" },
                    400: { description: "Produto não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            patch: {
                tags: ['Produtos'],
                summary: 'Atualiza parcialmente um produto',
                parameters: [{ name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Produto" }
                        }
                    }
                },
                responses: {
                    200: { description: "Produto atualizado com sucesso" },
                    400: { description: "Produto não encontrado" },
                    500: { description: "Erro interno no servidor" }
                }
            },
            delete: {
                tags: ['Produtos'],
                summary: 'Deleta um produto',
                parameters: [{ name: 'id_produto', in: 'path', required: true, schema: { type: 'integer' } }],
                responses: {
                    200: { description: "Produto deletado com sucesso" },
                    400: { description: "Produto não encontrado" },
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
                    email: { type: "string", example: "ana.silva@email.com" },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Cadastro_Usuarios: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Miguel Mendes" },
                    email: { type: "string", example: "miguel.mendes@email.com" },
                    senha: { type: "string", example: "senha321" }
                }
            },
            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Nicolas Henrique" },
                    email: { type: "string", example: "nicolas.henrique@email.com" },
                    senha: { type: "string", example: "senha456" }
                }
            },
            Atualizacao_Parcial_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Ana Silva" },
                    email: { type: "string", example: "ana.silva@email.com" },
                    senha: { type: "string", example: "senha123" }
                }
            },
            Lista_Produtos: {
                type: "object",
                properties: {
                    id_produto: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Teclado Mecânico" },
                    preco: { type: "number", example: 250.00 },
                    descricao: { type: "string", example: "Teclado RGB com switches azuis" },
                    categoria: { type: "string", example: "Periféricos" },
                    frete_gratis: { type: "boolean", example: true },
                    url_imagem: { type: "string", example: "http://imagem.com/teclado.jpg" },
                    url_produto: { type: "string", example: "http://loja.com/teclado" },
                    id_usuario: { type: "integer", example: 1 }
                }
            },
            Login_Usuario: {
                type: "object",
                properties: {
                    email: { type: "string", example: "miguel.mendes@email.com" },
                    senha: { type: "string", example: "senha321" }
                }
            },
            RespostaLogin: {
                type: "object",
                properties: {
                    message: { type: "string", example: "Login realizado com sucesso" },
                    usuario: {
                        type: "object",
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            nome: { type: "string", example: "Miguel Mendes" },
                            email: { type: "string", example: "miguel.mendes@email.com" }
                        }
                    }
                }
            },
            Cadastro_Produto: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Teclado Mecânico" },
                    preco: { type: "number", example: 250.00 },
                    descricao: { type: "string", example: "Teclado RGB com switches azuis" },
                    categoria: { type: "string", example: "Periféricos" },
                    frete_gratis: { type: "boolean", example: true },
                    url_imagem: { type: "string", example: "http://imagem.com/teclado.jpg" },
                    url_produto: { type: "string", example: "http://loja.com/teclado" },
                    id_usuario: { type: "integer", example: 1 }
                }
            },
            Atualizacao_Produto: {
                type: "object",
                required: ["nome", "preco", "descricao", "categoria", "frete_gratis", "url_imagem", "url_produto", "id_usuario"],
                properties: {
                    nome: { type: "string", example: "Teclado Mecânico" },
                    preco: { type: "number", example: 250.00 },
                    descricao: { type: "string", example: "Teclado RGB com switches azuis" },
                    categoria: { type: "string", example: "Periféricos" },
                    frete_gratis: { type: "boolean", example: true },
                    url_imagem: { type: "string", example: "http://imagem.com/teclado.jpg" },
                    url_produto: { type: "string", example: "http://loja.com/teclado" },
                    id_usuario: { type: "integer", example: 1 }
                }
            },
            Atualizacao_Parcial_Produto: {
                type: "object",
                properties: {
                    nome: { type: "string", example: "Teclado Mecânico" },
                    preco: { type: "number", example: 250.00 },
                    descricao: { type: "string", example: "Teclado RGB com switches azuis" },
                    categoria: { type: "string", example: "Periféricos" },
                    frete_gratis: { type: "boolean", example: true },
                    url_imagem: { type: "string", example: "http://imagem.com/teclado.jpg" },
                    url_produto: { type: "string", example: "http://loja.com/teclado" },
                    id_usuario: { type: "integer", example: 1 }
                }
            }
        }
    }
};

export default documentacao;
