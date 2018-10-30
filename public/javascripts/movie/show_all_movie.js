var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    apiService.getMovies().then(function (response) {
        $scope.listMovies = response.data.movies
        $scope.listMovies.sort(function(a,b) {
            return a.createdDate < b.createdDate
        })
        console.log($scope.listMovies)
    }).catch(function (error){
        console.log(error)
    })
    $scope.token = false
    apiService.checkUserLoggedIn().then(function (response) {
        // console.log(re)
        $scope.userName = response.data.user.userName
        $scope.token = true
        console.log(response)
    }).catch(function (error){
        console.log(error)
    })

    $scope.signout = function() {
        // setCookie('token', null)
        deleteCookie('token')
        window.location.href = '/'
    }

    
}])