export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.useinfergate.com') {
      url.hostname = 'useinfergate.com';
      url.protocol = 'https:';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
