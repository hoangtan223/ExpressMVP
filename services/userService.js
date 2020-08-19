const { User, ApiToken } = require("../models");
const { googleVerify, generateAccessToken } = require("../utils/authHelper");

module.exports = class UserService {
  static async authenticate(idToken) {
    const payload = await googleVerify(idToken);
    let user = await User.findOne({
      where: { source: "google", sourceUserId: payload.sub },
    });
    if (user === null) {
      user = await User.create({
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
        givenName: payload.given_name,
        familyName: payload.family_name,
        locale: payload.locale,
        source: "google",
        sourceUserId: payload.sub,
      });
    }
    const token = generateAccessToken(user);
    const apiToken = await ApiToken.create({ token, userId: user.id });
    return apiToken;
  }
};
