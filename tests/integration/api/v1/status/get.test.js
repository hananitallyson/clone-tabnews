test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("GET to /api/v1/status should return updated_at as defined", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
});

test("GET to /api/v1/status updated_at should be equal to parsedUpdatedAt", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);
});

test("GET to /api/v1/status should return database version equal to 16.0", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.version).toEqual("16.0");
});

test("GET to /api/v1/status should return database opened_connections as defined and not null", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.opened_connections).toBeDefined();
  expect(responseBody.dependencies.database.opened_connections).not.toBeNull();
});

test("GET to /api/v1/status should return database max_connections as defined and not null", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
});
