# Conversor Wise - PWA

Calculadora para conversões de moeda usando Wise - Calcule suas conversões para Orlando

## 🌟 Características

- **PWA Completo**: Funciona offline, pode ser instalado no celular/desktop
- **Conversão Bidirecional**: BRL ↔ USD
- **Cálculo de Produtos**: Inclui sales tax e custos do Wise
- **Cotação em Tempo Real**: Busca cotação atual do dólar via API
- **Modo Offline**: Usa cotação salva quando sem internet
- **Interface Responsiva**: Funciona perfeitamente em mobile e desktop
- **Atalhos**: Shortcuts para funções principais (Android)

## 📱 Como Instalar

### No Android (Chrome):
1. Abra o app no Chrome
2. Toque no menu (3 pontos) → "Adicionar à tela inicial"
3. Confirme a instalação
4. O app aparecerá na tela inicial

### No iPhone (Safari):
1. Abra o app no Safari
2. Toque no botão de compartilhar (quadrado com seta)
3. Selecione "Adicionar à Tela Inicial"
4. Confirme a instalação

### No Desktop (Chrome/Edge):
1. Abra o app no navegador
2. Clique no ícone de instalação na barra de endereços
3. Confirme a instalação
4. O app será instalado como aplicativo

## 🚀 Como Usar

### Conversão de Moeda:
1. **BRL → USD**: Digite o valor em reais que quer enviar
2. **USD → BRL**: Digite o valor em dólares que quer receber
3. Clique no botão 🔄 para atualizar a cotação
4. Clique em "Calcular"

### Cálculo de Produtos:
1. Digite o valor do produto em dólares
2. Clique no botão 🔄 para atualizar a cotação
3. Clique em "🛒 Calcular Compra"

## 🛠️ Desenvolvimento

### Instalar dependências:
```bash
npm install
```

### Executar localmente:
```bash
npm run dev
```

### Build para produção:
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
conversor-wise/
├── index.html          # Página principal
├── manifest.json       # Configuração PWA
├── sw.js              # Service Worker
├── browserconfig.xml  # Configuração Windows
├── package.json       # Dependências
├── README.md          # Documentação
└── icons/             # Ícones PWA
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    ├── icon-512x512.png
    └── logo.png
```

## 🔧 Tecnologias

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (ES6+)
- PWA (Service Worker, Manifest)
- LocalStorage para cache offline
- API de cotação de moedas

## 📊 Funcionalidades PWA

- ✅ **Instalável**: Pode ser instalado como app nativo
- ✅ **Offline**: Funciona sem internet
- ✅ **Cache**: Recursos salvos localmente
- ✅ **Notificações**: Feedback visual de status
- ✅ **Atalhos**: Shortcuts para funções principais
- ✅ **Responsivo**: Adapta-se a qualquer tela
- ✅ **iOS Compatible**: Funciona perfeitamente no iPhone

## 🌐 Deploy

Para fazer o deploy:

1. Faça upload de todos os arquivos para seu servidor web
2. Certifique-se de que o servidor suporta HTTPS (obrigatório para PWA)
3. Acesse via HTTPS para ativar todas as funcionalidades PWA

### Serviços recomendados:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📝 Licença

MIT License - Desenvolvido por Victor C.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests. 