import { ACommand } from "./ACommand";
import { Invoker } from "./Invoker";
import { Receiver } from "./Receiver";

const invoker = new Invoker();
const receiver = new Receiver();

invoker.setOnStart(new ACommand(receiver, "Say something"));
invoker.init();
