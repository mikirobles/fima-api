const notFound = (req, res) =>
  res.status(404).send({ error: "No se encontro el parametro buscado." })

const portMessage = port => () => console.log("[INFO] Listening on *:" + port)

module.exports = {
  notFound,
  portMessage
}