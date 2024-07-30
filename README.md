
# Casa de Praia

Bem-vindo ao repositório do projeto **Casa de Praia**! Este projeto é uma aplicação web para gerenciar reservas de uma casa de praia, com uma interface moderna e minimalista inspirada na estética "Apple". O aplicativo inclui funcionalidades como visualização de reservas, adição de novas reservas, gerenciamento de pagamentos e uma opção de dark mode.

## Funcionalidades

- **Dashboard**: Visualização geral das reservas.
- **Detalhes da Reserva**: Visualização e edição de informações detalhadas de cada reserva.
- **Adicionar Nova Reserva**: Formulário para adicionar novas reservas.
- **Excluir Reserva**: Opção de excluir reservas.
- **Modo Claro/Escuro**: Alternância entre modo claro e escuro.

## Tecnologias Utilizadas

- **Frontend**: React, Tailwind CSS
- **Backend**: Firebase Firestore 
- **Outras**: Vite, date-fns, react-icons

## Capturas de Tela

### Dashboard

![Dashboard](https://github.com/vinicius9141/casa-de-praia/blob/main/screenshots/dashboard.png)

### Detalhes da Reserva

![Detalhes da Reserva](https://github.com/vinicius9141/casa-de-praia/blob/main/screenshots/reservation-details.png)

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/vinicius9141/casa-de-praia.git
   cd casa-de-praia
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o servidor de desenvolvimento:

   ```sh
   npm run dev
   ```

4. Abra o navegador e acesse `http://localhost:3000`.

## Configuração do Firebase

Para configurar o Firebase, siga as etapas abaixo:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Adicione um aplicativo web ao projeto e copie as configurações do Firebase.
3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

   ```env
   VITE_FIREBASE_API_KEY=YOUR_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_APP_ID
   ```

4. Substitua os valores `YOUR_*` pelas informações do seu projeto Firebase.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests. Para contribuir, siga as etapas abaixo:

1. Fork o projeto.
2. Crie uma nova branch (`git checkout -b feature/minha-feature`).
3. Faça as modificações desejadas.
4. Commit suas alterações (`git commit -m 'Minha nova feature'`).
5. Push para a branch (`git push origin feature/minha-feature`).
6. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato com [seu-nome](mailto:seu-email@example.com).

---

Obrigado por usar **Casa de Praia**!
