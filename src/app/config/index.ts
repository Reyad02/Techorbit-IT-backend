import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  mongoose_uri: process.env.MONGOOSE_URL,
  port: process.env.PORT,
  saltRounds: process.env.SALT_ROUNDS,
  jwt_secret: process.env.JWT_SECRET,
  jwt_access_token_expiration: process.env.JWT_ACCESS_TOKEN_EXPIRED,
  jwt_refresh_token_expiration: process.env.JWT_REFRESH_TOKEN_EXPIRED,
  node_env: process.env.NODE_ENV,
};
