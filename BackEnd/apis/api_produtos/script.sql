CREATE TABLE USUARIOS(
  id_usuario SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(225) NOT NULL,
  senha VARCHAR(225) NOT NULL
);

CREATE TABLE PRODUTOS(
  id_produto SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  preco DOUBLE PRECISION NOT NULL,
  descricao TEXT,
  categoria VARCHAR(100),
  frete_gratis BOOLEAN DEFAULT FALSE,
  url_imagem VARCHAR(255),
  url_produto VARCHAR(255),
  id_usuario INT NOT NULL REFERENCES USUARIOS(id_usuario)
);

INSERT INTO USUARIOS(nome, email, senha) VALUES
('Ana Silva', 'ana.silva@email.com', 'senha123'),
('Miguel Mendes', 'miguel.mendes@email.com', 'senha321'),
('Nicolas Henrique', 'nicolas.henrique@email.com', 'senha456');

INSERT INTO PRODUTOS (nome, preco, descricao, categoria, frete_gratis, url_imagem, url_produto, id_usuario) VALUES
('Teclado Mecânico', 250.00, 'Teclado RGB com switches azuis', 'Periféricos', true, 'http://imagem.com/teclado.jpg', 'http://loja.com/teclado', 1),
('Mouse Gamer', 150.00, 'Mouse com 12000 DPI e 6 botões', 'Periféricos', false, 'http://imagem.com/mouse.jpg', 'http://loja.com/mouse', 2);
