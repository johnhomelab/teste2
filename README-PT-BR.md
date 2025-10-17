# ÉFESO ONE — Site (Next.js + Tailwind)

Este projeto contém a landing page da Éfeso One e uma rota extra para IPRO Saúde.

## Requisitos
- Node.js LTS (>= 18) e npm
- Git (opcional para deploy via GitHub)

## Como rodar (Windows)
1. Abra a pasta `efeso-one` no Prompt de Comando
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse: http://localhost:3000

## Variáveis de ambiente (Analytics)
Crie um arquivo `.env.local` na raiz e cole seus IDs:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PIXEL_ID=1234567890
```

## Deploy na Vercel
1. Crie um repositório no GitHub e envie o código (`git init`, `git add .`, `git commit`, `git remote add origin ...`, `git push`)
2. Acesse https://vercel.com e clique em **New Project**
3. Importe o repositório e finalize (Next.js é detectado automaticamente)
4. Após o deploy, conecte seu domínio `efeso1.com.br` em **Domains**

## Onde alterar o WhatsApp
Arquivo: `src/components/EfesoOneLandingRefined.jsx`  
Procure a constante `whatsapp` e altere o número/mensagem.

Bom trabalho! 🚀
