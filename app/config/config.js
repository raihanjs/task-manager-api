export const PORT = 5000;

export const DATABASE =
  "mongodb+srv://admin:Admin905@cluster0.bhifpq3.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0";

export const JWT_KEY = "MONGODB123?#";
export const JWT_EXPIRE_TIME = 60 * 60 * 24 * 30;

export const EMAIL_HOST = "mail.teamrabbil.com";
export const EMAIL_PORT = 25;
export const EMAIL_SECURITY = false;
export const EMAIL_USER = "info@teamrabbil.com";
export const EMAIL_PASSWORD = "~sR4[bhaC[Qs";
export const EMAIL_UN_AUTH = false;

export const WEB_CACHE = false;
export const MAX_JSON_SIZE = "10mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 100; // 15 min
export const REQUEST_LIMIT_NUMBER = 2000; // per 15 min 2000 req allowed
