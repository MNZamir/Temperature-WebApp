import { BehaviorSubject } from 'rxjs';
import getConfig from 'next/config';
import Router from 'next/router';

const userSubject = new BehaviorSubject((typeof window === "undefined") && JSON.parse(localStorage.getItem('user')));

export const userService = {
    get userValue() { return userSubject.value }
};