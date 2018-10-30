angular.module('Movie',[]).factory('api_services', ['$http', function ($http) {
    $http.defaults.headers.common['x-access-token'] = getCookie('token') || ''
    return {
        createMovie : function(data) {
           return $http.post('/api/movie', data)
        },
        getMovies : function() {
            return $http.get('/api/movie')
        },
        getOneMovies : function(data) {
            return $http.get('/api/movie/' + data)
        },
        signup : function(data) {
            return $http.post('/api/user/signup', data)
        },
        signin : function(data) {
            return $http.post('/api/user/signin', data)
        },
        checkUserLoggedIn : function() {
            return $http.get('/api/user/checkUserLoggedIn')
        },
        editMovie : function(data) {
            return $http.put('/api/movie/', data)
         },
         deleteMovie : function(data) {
             return $http.delete('/api/movie/' + data)
          },
        editUsername: function(data) {
              return $http.put('/api/user/editUsername',data)
           },
           changePassword: function(data) {
                 return $http.put('/api/user/changePassword',data)
              }
    }
}])