#!/bin/bash
echo "[i] Iniciando Docker"
docker compose -f ./Docker_DataBase/docker-compose.yml up -d

echo "[+] Instalando dependencias de node"
npm install

echo "[+] Iniciando Server APi Rest"
npm run start