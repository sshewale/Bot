const models = require("../db/index");
async function getData(ctx) {
  const res = await models.Users.findAll();
  if (res != null) {
    ctx.ok({ id: 1, name: "Test Chat-bot ", result:res});
  } else {
    ctx.ok({ id: 1, name: "Test Chat-bot failed" });
  }
}

module.exports = {
  getData
};
