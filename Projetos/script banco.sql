CREATE TABLE SUBCATEGORIAS(
id_subcategoria SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
ATIVO BOOLEAN DEFAULT TRUE,
id_categoria INT,
FOREIGN KEY(id_categoria) REFERENCES categorias (id_categoria)
)

CREATE TABLE usuarios (
id_usuario SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL,
tipo_acesso VARCHAR(20) NOT NULL,
ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE categorias (
id_categoria SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
descricao TEXT,
tipo CHAR(1),
cor VARCHAR(255),
icone VARCHAR(255),
ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE TRANSACOES(
id_transacao SERIAL PRIMARY KEY,
valor NUMERIC(12, 2) NOT NULL,
descricao TEXT,
data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
data_pagamento DATE,
data_vencimento DATE,
tipo CHAR(1),
id_categoria INT,
id_subcategoria INT,
FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
FOREIGN KEY (id_subcategoria) REFERENCES subcategorias(id_subcategoria)
);