const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

module.exports = {
  googleVerify: async (idToken) => {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    return ticket.getPayload();
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
  },

  generateAccessToken: (user) => {
    const userPayload = {
      name: user.name,
      email: user.email,
      picture: user.picture,
    };
    return jwt.sign(userPayload, process.env.TOKEN_SECRET);
  },
};
