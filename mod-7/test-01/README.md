## Aluno: Emanuele Lacerda Morais Martins

Para essa atividade foram criados dois Dockerfiles e um docker compose. 

- Dockerfile Backend:
Pode ser encontrado no diretório `Avaliacoes-M7-Inteli-main/backend` e sua função é instalar todas as dependêcias e executar o backend. Para isso foi definido a imagem base como o Python 3.11, copia os requirements e os instala no container, copia demais arquviso e inicia a aplicação backend.
A imagem pode ser acessada no docker hub em https://hub.docker.com/repository/docker/manumorais1231/avaliacoes-m7-inteli-main-backend/general

- Dockerfile Frontend:
Pode ser encontrado no diretório `Avaliacoes-M7-Inteli-main/frontend` e sua função é instalar todas as dependêcias e executar o frontend. Para isso foi definido a imagem base como a última versão de Node, copia arquivos da pasta frontend, instala dependecias e inicia a aplicaçaõ frontend.
A imagem pode ser acessada no docker hub em https://hub.docker.com/repository/docker/manumorais1231/avaliacoes-m7-inteli-main-frontend/general

- Docker compose:
O compose é usado usado para gerenciar os container criados anteriormente e pode ser encontrado no diretório `Avaliacoes-M7-Inteli-main`. Ele executa os containers criados a partir dos dockerfiles citados e possui uma dependecia do frontend no backend (assim o frontend só será inicializado se o backend já estiver funcionando).

#### Instruções para rodar essa aplicação:
(Pré requisito ter docker configurado na máquina)
- Clonar esse repositorio
- Entrar no diretório `prova1-mod7/Avaliacoes-M7-Inteli-main`
- Rodar o comando `docker compose up` no terminal
