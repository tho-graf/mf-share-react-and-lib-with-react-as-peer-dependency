import { loadRemote, init } from "@module-federation/runtime";

init({
  name: "host",
  remotes: [
    { name: "remote_a", entry: "http://localhost:3001/mf-manifest.json" },
    { name: "remote_b", entry: "http://localhost:3002/mf-manifest.json" },
  ],
});


void loadRemote("remote_b/App");
setTimeout(() => {
  void loadRemote("remote_a/App");
}, 1000);
