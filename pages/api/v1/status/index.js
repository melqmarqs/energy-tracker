function status(request, response) {
  response
    .status(200)
    .json({ mensagem: "o endpoint status está funcionando." });
}

export default status;
