const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "L2hmnDpI#FGqxSAg0jfYbypbWuE_6S0NogmXdo7hC4k-13fCFF2g",
  MONGODB: process.env.MONGODB || "mongodb://mongo:gypcdIlYLLwTrZUhrdhhNLtAQkzVBOQh@switchback.proxy.rlwy.net:45570",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361",
};
