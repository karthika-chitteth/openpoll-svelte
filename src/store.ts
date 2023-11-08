import { writable } from 'svelte/store';
import type { TUser } from './types/user.type';
import { UserService } from './services/user.service';

const user = JSON.parse(localStorage.getItem('user') || 'null');
console.log(user);
export const userStore = writable<TUser | null>(user);

type TLanguage = 'en' | 'es';
export const _Language = writable<TLanguage>(
  (localStorage.getItem('openpoll_lang') as TLanguage) || 'en'
);
