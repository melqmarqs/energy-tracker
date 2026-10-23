test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const content = await response.json();
  expect(content).toHaveProperty("updated_at");
  const parsedDate = new Date(content.updated_at).toISOString();
  expect(content.updated_at).toBeDefined();
  expect(content.updated_at).toEqual(parsedDate);

  expect(content).toHaveProperty("dependencies.database.version");
  expect(content.dependencies.database.version).toEqual("16.0");

  expect(content).toHaveProperty("dependencies.database.max_connections");
  expect(typeof content.dependencies.database.max_connections).toBe("number");
  expect(content.dependencies.database.max_connections).toBeGreaterThan(0);

  expect(content).toHaveProperty("dependencies.database.current_connections");
  expect(typeof content.dependencies.database.current_connections).toBe(
    "number",
  );
  expect(content.dependencies.database.current_connections).toBe(1);
});
