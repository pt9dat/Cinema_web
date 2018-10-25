angular.module('Movie',[]).factory('api_services', ['$http', function ($http) {
    return {
        createMovie : function(data) {
           return $http.post('/api/movie', data)
        },
        getMovies : function() {
            return $http.get('/api/movie')
        },
        signup : function(data) {
            return $http.post('/api/user/signup', data)
        },
        signin : function(data) {
            return $http.post('/api/user/signin', data)
        }
    }
}])