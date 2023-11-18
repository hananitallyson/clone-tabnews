# clone-tabnews

Implementação do https://tabnews.com.br para o https://curso.dev com FilipeDeschamps.

## Subir servidor de desenvolvimento

```sh
npm run dev # next dev
```

## Subir database

```sh
docker compose -f infra/compose.yaml up -d
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
