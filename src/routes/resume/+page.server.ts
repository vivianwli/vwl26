import { redirect } from '@sveltejs/kit';

export const load = () => {
  redirect(308, 'https://drive.google.com/file/d/1CQ5018o88nlsTd47HYx5wRaMJWD59k4B/view');
};