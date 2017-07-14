// Status helper
export const checkStatus = (res) =>
  res.status >= 200 && res.status < 300 ? res : new Error('unauthenticated');
