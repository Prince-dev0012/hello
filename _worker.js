export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // This is your VPS tunnel address
    url.hostname = 'freekali.qzz.io'; 
    
    // Redirect the request to your VPS while keeping the path and headers
    const proxyRequest = new Request(url.toString(), request);
    
    return fetch(proxyRequest);
  },
};
