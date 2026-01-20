const { trans } = require("./libs/translate/index.js");

const createGenericMessage = (req) =>
  "What:: " +
  req.body.what +
  " \n\n" +
  Object.keys(req.body)
    .map((k) => `${k}: ${req.body[k]}`)
    .join("\n\n");

const createProductsMessage = ({ products }, body) =>
  [
    products.map((p) => `${p.quantity} - ${p.name}`).join("\n"),
    "",
    trans("Subtotal", body) +
      `: ${body.coin || "R$"} ` +
      Number(
        products.reduce((sum, p) => sum + p.quantity * p.price, 0),
      ).toFixed(2),
  ].join("\n");

const createUserMessage = ({ userInfo = {} } = {}, body) =>
  [
    trans("Name", body) + " : ",
    userInfo.name,
    "",
    trans("Document", body) + " : ",
    userInfo.document,
    "",
    trans("Birth Date", body) + " : ",
    userInfo.birth_date,
    "",
  ].join("\n");

const createDeliveryMessage = ({ delivery }) => [].join("\n");

const createChocolateMessage = ({ body }) =>
  [
    "* CHOCOLATE *",
    "",
    trans("Produtos", body) + ":",
    createProductsMessage({ products: body.products }, body),
    "",
    trans("Cliente", body) + ":",
    createUserMessage({ user: body.client }, body),
    "",
    trans("Delivery", body) + ":",
    createDeliveryMessage({ delivery: body.delivery }, body),
    "",
  ].join("\n");

const createMessage = (req) => {
  switch (req.body.what?.toLower()) {
    case "chocolate":
      return createChocolateMessage(req);
  }

  return createGenericMessage(req);
};

module.exports = { createMessage };
