var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.signup = function () {
        // if ($scope.movieName === undefined) {
        //     alert('Bạn chưa nhập tên phim')
        //     return
        // }
        let user = {
            userName: $scope.userName,
            email: $scope.userEmail,
            password: $scope.userPassword
        }
        console.log($scope.userName)
        console.log($scope.userEmail)
        console.log($scope.userPassword)
        apiService.signup(user).then(function (response) {
            setCookie('token', response.data.token)
            alert('Đăng ký thành công')
        }).catch(function (error){
            console.log(error)

        })
    
    }
}])