angular.module('Movie',[]).factory('api_services', ['$http', function ($http) {
    return {
        createMovie : function(data) {
           return $http.post('/api/movie', data)
        },
        getMovies : function() {
            return $http.get('/api/movie')
        }
    }
}])