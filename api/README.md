# REST API

## Instruction

1. Rename example.env to .env.
2. Install and run [docker](https://www.docker.com)
3. To start application run script:

-   in development mode:

```
docker-compose up
```

-   in production mode:

```
docker-compose -f docker-compose.production.yml up
```

4. Run migration in docker container

```
docker container ps
docker exec -it {container_id} bash
knex migrate:latest
```

5. Run seeds in docker container

```
docker container ps
docker exec -it {container_id} bash
knex seed:run
```

## Filtering search queries

The filter can be applied onto every index action REST endpoint e.g. GET /api/{Model}?filter={"limit": 10}.

Examples:

1. Pagination:

```
filter={"limit": 10, "offset": 0}
```

2. Order:

```
filter={"order": ["createdAt desc"]
```

3. Filter by model fields:

```
filter={"status": "done"}
```

4. Filter by relation:

```
filter={relations:{"categories:{"name":"categoryName"}}}
```

5. Filter by model json field:

```
filter={"json":{"properties":{"color":"red"}}}
```
