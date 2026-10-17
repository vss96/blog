const GITHUB_PAGES_ORIGIN = "https://vss96.github.io";

export async function proxyProjectRequest(request, project, pathSegments = []) {
  const incomingUrl = new URL(request.url);
  const targetUrl = new URL(GITHUB_PAGES_ORIGIN);
  targetUrl.pathname = `/${project}${pathSegments.length ? `/${pathSegments.map(encodeURIComponent).join("/")}` : "/"}`;
  targetUrl.search = incomingUrl.search;

  return fetch(new Request(targetUrl, request));
}
