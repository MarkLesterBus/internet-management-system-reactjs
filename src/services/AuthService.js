
import http from "../http";

class AuthService {
    sign_in(data) {
        return http.post("/login", data);
    }

    register(data) {
        return http.post("/register", data);
    }

    logged_user(config) {
        return http.get("/user", config);
    }

    logout() {
        return http.get("/logout");
    }

}

export default new AuthService();