const userService = require("../../services/userService");
const { wrapAsync } = require("./utils");

exports.tokensignin = wrapAsync(async (req, res) => {
  const authToken = await userService.authenticate(req.body.idToken);
  return res.status(200).json({ token: authToken.token });
});
