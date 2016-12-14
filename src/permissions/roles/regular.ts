import { Role } from "../role";
import { User } from "./user";

export const Regular = new Role({
  name: "Regular",
  type: "internal",
  inherits: [ User ],
  permissions: [
    "channel:commands:get",
    "command:d20:run",
    "command:dye:run",
    "command:random:run",
    "protection:bypass"
  ]
});