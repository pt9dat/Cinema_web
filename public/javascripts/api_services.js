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
        }
    }
}])