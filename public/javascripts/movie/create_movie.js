var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.dataGenre = [
          'Hành động',
          'Kinh dị',
          'Tâm lý'
        ]
    
    $scope.show = function () {
        if ($scope.movieName === undefined) {
            alert('Bạn chưa nhập tên phim')
            return
        }
        var currentDate = $("#datepicker").datepicker("getDate")
        var selectedDate= currentDate.getTime()/1000;
        var today = new Date().getTime()/1000
        console.log(today)
        let data = {
            name: $scope.movieName,
            genre: $scope.movieGenre,
            releaseDate: selectedDate,
            createdDate: today,
            content: $scope.movieContent
        }
        apiService.createMovie(data).then(function (response) {
            console.log(response)
            window.location.href = '/'
        }).catch(function (error){
            console.log(error)
        })
    
    }

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