import fs from "fs"
import { Main } from "./templates/Main.js"

fs.writeFileSync("./test.md", Main({ name: "Callum" }))
