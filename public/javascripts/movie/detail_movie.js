var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    const url = window.location.href
    const alias = url.slice(url.lastIndexOf('/'))
    // $scope.isCreator = flase
    
    $scope.token = false
    
    apiService.checkUserLoggedIn().then(function (response) {
        // console.log(re)
        $scope.userName = response.data.user.userName
        $scope.userEmail = response.data.user.email
        $scope.userID = response.data.user._id
        console.log($scope.userID)
        
        apiService.getOneMovies(alias).then(function (response) {
            console.log(response)
            $scope.movieReleaseDate = response.data.movies.releaseDate * 1000
            $scope.movieTitle = response.data.movies.name
            $scope.movieGenre = response.data.movies.genre
            $scope.movieContent = response.data.movies.content
            $scope.creatorID = response.data.movies.user
            $scope.alias = response.data.movies.alias
            console.log($scope.creatorID)
            if ($scope.userID === $scope.creatorID) {
                $scope.isCreator = true
            }else{
                $scope.isCreator = false
            }
        }).catch(function (error){
            console.log(error)
        })
        
    
        $scope.token = true
        console.log($scope.isCreator)
    }).catch(function (error){
        console.log(error)
    })

    $scope.signout = function() {
       // setCookie('token', null)
        deleteCookie('token')
        deleteCookie('token')
        return window.location.href = '/'
    }

    $scope.goEdit = function() {
        window.location.href = '/movie/edit/' + $scope.alias
    }

    $scope.deleteMovie = function() {
        apiService.deleteMovie(alias).then(function (response) {
            window.location.href = '/'
    })}
   
}])