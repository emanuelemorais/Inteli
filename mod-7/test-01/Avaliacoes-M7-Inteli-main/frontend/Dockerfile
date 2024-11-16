#Defini imagem base
FROM node:latest

#Cria diretorio frontend no container
WORKDIR /frontend

# Copia arquivos para container
COPY . ./

#Instala dependencias
RUN npm install

# Comando que iniciar a aplicação dentro do container
CMD ["node", "server.js"]

