import { Effect } from "effect";
import { exampleUserEffect } from "@core/example";

console.log(Effect.runSync(exampleUserEffect));
