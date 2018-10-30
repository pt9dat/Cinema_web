var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.filteredMovies = []
    apiService.getMovies().then(function (response) {
        $scope.listMovies = response.data.movies
        $scope.filteredMovies = angular.copy($scope.listMovies)
        $scope.filteredMovies.sort(function(a,b) {
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
    $scope.redirectMovieDetail = function(item){
        window.location.href = '/movie/' + item.alias
    }
    $scope.signout = function() {
        // setCookie('token', null)
        deleteCookie('token')
        window.location.href = '/'
    }


    $('#search-bar').on('input', function() {
        filterMovie()
      })

      function filterMovie() {
         $scope.filteredMovies = $scope.listMovies.filter(function(el){
                return el.name.toLowerCase().indexOf($('#search-bar').val().toLowerCase()) > -1 || el.genre.toLowerCase().indexOf($('#search-bar').val().toLowerCase()) > -1
            })
            $scope.filteredMovies.sort(function(a,b) {
                return a.createdDate < b.createdDate
            })
            $scope.$apply()
        }
        
}])