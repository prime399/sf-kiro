import { convexAuth } from "@convex-dev/auth/server";
import { authConfig } from "./authConfig";

export default convexAuth(authConfig);
