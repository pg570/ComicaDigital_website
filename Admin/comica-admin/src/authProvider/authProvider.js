const authProvider = {
  login: ({ email, password }) =>  {
      const request = new Request('comicadigitalbackend.up.railway.app/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ email, password }),
          headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      return fetch(request)
          .then(response => {
              if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
              }
              return response.json();
          })
          .then(auth => {
              localStorage.setItem('auth', JSON.stringify(auth));
          })
          .catch(() => {
              throw new Error('Network error')
          });
  },
  checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
          return Promise.reject({ redirectTo: '/unauthorized', logoutUser: false });
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
  },
  checkAuth: () => localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject({ message: false }),

  logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
  },
  getIdentity: () => {
      try {
          const { id, email, avatar } = JSON.parse(localStorage.getItem('auth'));
          return Promise.resolve({ id, fullName: email, avatar:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" });
      } catch (error) {
          return Promise.reject(error);
      }
  },
  getPermissions: () => {
      // Required for the authentication to work
      return Promise.resolve();
  },
}

export default authProvider;