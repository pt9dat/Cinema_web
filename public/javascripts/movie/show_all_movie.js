var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    apiService.getMovies().then(function (response) {
        $scope.listMovies = response.data.movies
        console.log(response)
        console.log($scope.listMovies)
    }).catch(function (error){
        console.log(error)
    })
}])