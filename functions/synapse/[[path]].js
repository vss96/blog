import { proxyProjectRequest } from "../../cloudflare/project-proxy.js";

export function onRequest({ request, params }) {
  return proxyProjectRequest(request, "synapse", params.path ?? []);
}
