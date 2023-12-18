import { navigate } from 'svelte-routing';

let authenticated = false;
const token = localStorage.getItem('openpoll_user');
console.log("the token is",token);

export function Authentication() {
  if (!token) {
    navigate('/signin');
  }
}
export function setAuthenticated(value: any) {
  authenticated = value;
}
