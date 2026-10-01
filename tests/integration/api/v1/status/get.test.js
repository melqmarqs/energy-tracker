test("GET to /api/v1/status should return 200", async () => {
  const resp = await fetch("http://localhost:3000/api/v1/status");
  const conteudoResp = JSON.parse(await resp.text());
  expect(resp.status).toBe(200);
  expect(conteudoResp.mensagem).toBe("o endpoint status está funcionando.");
});
