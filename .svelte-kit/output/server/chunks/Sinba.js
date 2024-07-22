import { HttpAgent, Actor } from "@dfinity/agent";
import { b as building } from "./environment.js";
const idlFactory = ({ IDL }) => {
  const Wallet = IDL.Record({
    "accountId": IDL.Text,
    "principalId": IDL.Text
  });
  return IDL.Service({
    "getWallet": IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Text, Wallet))], [])
  });
};
const canisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai";
const createActor = (canisterId2, options = {}) => {
  const agent = options.agent || new HttpAgent({ ...options.agentOptions });
  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }
  {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }
  return Actor.createActor(idlFactory, {
    agent,
    canisterId: canisterId2,
    ...options.actorOptions
  });
};
function dummyActor() {
  return new Proxy({}, { get() {
    throw new Error("Canister invoked while building");
  } });
}
const buildingOrTesting = building || process.env.NODE_ENV === "test";
buildingOrTesting ? dummyActor() : createActor(canisterId);
const Sinba = "/_app/immutable/assets/Sinba.8f1d3806.jpg";
export {
  Sinba as S
};
