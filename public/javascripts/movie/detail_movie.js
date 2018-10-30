var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    const url = window.location.href
    const id = url.slice(url.lastIndexOf('/'))
    apiService.getOneMovies(id).then(function (response) {
        console.log(response)
        $scope.movieReleaseDate = response.data.movies.releaseDate * 1000
        $scope.movieTitle = response.data.movies.name
        $scope.movieGenre = response.data.movies.genre
        $scope.movieContent = response.data.movies.content
        //window.location.href = '/'
    }).catch(function (error){
        console.log(error)
    })

    $scope.token = false
    apiService.checkUserLoggedIn().then(function (response) {
        // console.log(re)
        $scope.userName = response.data.user.userName
        $scope.userEmail = response.data.user.email
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