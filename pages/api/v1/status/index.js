import database from "../../../../infra/database.js";

async function status(request, response) {
  const resp = await database.query("SELECT 1 + 1 AS Sum;");
  console.log(resp.rows);
  response
    .status(200)
    .json({ mensagem: "o endpoint status está funcionando." });
}

export default status;
