import { Role } from "./enums";

export interface AuthData {
    token?: string;
    name?: string;
    email?: string;
    role?: Role;
}
