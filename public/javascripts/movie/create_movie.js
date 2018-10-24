var myApp = angular.module('Movie')
myApp.controller('movieController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.dataGenre = [
          'Hành động',
          'Kinh dị',
          'Tâm lý'
        ]
    
    $scope.show = function () {
        console.log($scope.movieName + 'name')
        if ($scope.movieName === undefined) {
            alert('Bạn chưa nhập tên phim')
            return
        }
        var currentDate = $("#datepicker").datepicker("getDate")
        var selectedDate= currentDate.getTime()/1000;
        let data = {
            name: $scope.movieName,
            genre: $scope.movieGenre,
            releaseDate: selectedDate,
            content: $scope.movieContent
        }
        apiService.createMovie(data).then(function (response) {
            console.log(response)
        }).catch(function (error){
            console.log(error)
        })
    
    }
}])