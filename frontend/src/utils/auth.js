export const setToken = (token) => localStorage.setItem('token', token);
export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token')

export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
export const getUser = () => {
    const user = localStorage.getItem('user');
    try {
        return user ? JSON.parse(user) : null;
    } catch (e) {
        console.error('Failed to parse user from localStorage', e);
        return null;
    }
};
export const removeUser = () => localStorage.removeItem('user');

export const isAuthorized = () =>{
    const token = getToken();
    const user = getUser();
    return !! token && !!user; ///
}