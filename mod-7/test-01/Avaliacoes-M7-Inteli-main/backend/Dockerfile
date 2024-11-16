#Defini imagem base
FROM python:3.11

#Cria diretorio backend no container
WORKDIR /backend

# Copia e instala requirements 
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copia todos os arquivos para container
COPY . ./

#Executa aplicação
CMD ["python", "main.py"]


