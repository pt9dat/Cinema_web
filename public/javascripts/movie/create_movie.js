var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.dataGenre = [
          'Hành động',
          'Kinh dị',
          'Tâm lý'
        ]
        $scope.title = 'Tạo phim mới'
        $scope.create_btn = 'Tạo phim'
    $scope.url = window.location.href
    
    $scope.show = function () {
        if ($scope.movieName === undefined) {
            alert('Bạn chưa nhập tên phim')
            return
        }
        var currentDate = $("#datepicker").datepicker("getDate")
        var selectedDate= currentDate.getTime()/1000;
        var today = new Date().getTime()/1000
        let data = {
            name: $scope.movieName,
            genre: $scope.movieGenre,
            releaseDate: selectedDate,
            createdDate: today,
            content: $scope.movieContent,
            user: $scope.userID,
            alias: $scope.url.slice($scope.url.lastIndexOf('/') + 1)
        }
        if ($scope.url.slice(28, 32) === 'edit'){
            
            apiService.editMovie(data).then(function(response){

                window.location.href = '/movie/' + response.data.movies.alias
            })
        }else{ 
        
        apiService.createMovie(data).then(function (response) {
            console.log(response)
            window.location.href = '/'
        }).catch(function (error){
            console.log(error)
        })
    }
    
    }

    $scope.token = false
    apiService.checkUserLoggedIn().then(function (response) {
        // console.log(re)
        $scope.userName = response.data.user.userName
        $scope.userEmail = response.data.user.email
        $scope.token = true
        $scope.userID = response.data.user._id
        console.log(response)
        console.log($scope.userID)
    }).catch(function (error){
        console.log(error)
    })
    apiService.getOneMovies($scope.url.slice($scope.url.lastIndexOf('/') + 1)).then(function(response) {
        if ($scope.url.slice(28, 32) === 'edit'){
            $scope.title = 'Sửa phim'
            $scope.create_btn = 'Sửa phim'
            // apiService.editMovie()
        }
        $scope.movieName = response.data.movies.name
        $scope.movieGenre = response.data.movies.genre
        $scope.releaseDate = response.data.movies.releaseDate * 1000
        $scope.movieContent = response.data.movies.content
        $("#datepicker").datepicker('setDate',new Date($scope.releaseDate))

    })

    $scope.signout = function() {
        // setCookie('token', null)
        deleteCookie('token')
        window.location.href = '/'
    }
}])