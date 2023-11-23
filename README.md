# clone-tabnews

Implementação do https://tabnews.com.br para o https://curso.dev com FilipeDeschamps.

## Subir servidor de desenvolvimento

```sh
npm run dev # npm run services:up && next dev
```

## Subir, parar e derrubar serviços

```sh
npm run services:up # docker compose -f infra/compose.yaml up -d
```

```sh
npm run services:stop # docker compose -f infra/compose.yaml stop
```

```sh
npm run services:down # docker compose -f infra/compose.yaml down
```

## Executar linter

```sh
npm run lint:check # prettier --check .
```

```sh
npm run lint:fix # prettier --write .
```

## Executar testes

```sh
npm run test # jest
```

```sh
npm run test:watch # jest --watchAll
```
