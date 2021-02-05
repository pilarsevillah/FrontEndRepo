const apiUrl = 'http://localhost:3080';

const requestMethods = { post: 'POST', get: 'GET' };
const endpoints = { login: '/users/login', signUp: '/users' };

async function fetchCodeSosApi(path, { body, method }) {
  const token = localStorage.getItem('token');
  const headers = new Headers({ 'Content-Type': 'application/json' });
  if (token) {
    headers.append('Authorization', token);
  }
  const request = await fetch(`${apiUrl}${path}`, { headers: headers, method: method, body: JSON.stringify(body) });
  const requestData = await request.json();
  if (requestData.status === 'error') {
    throw requestData.message;
  }
  return requestData;
}

export async function login(email, password) {
  const tokenData = await fetchCodeSosApi(endpoints.login, { method: requestMethods.post, body: { email, password } });
  const token = tokenData.data.token;
  localStorage.setItem('token', token);
  return token;
}

export async function signUpApi(email, password) {
  return await (endpoints.signUp,
  {
    method: requestMethods.post,
    body: { email, password },
  });
}
