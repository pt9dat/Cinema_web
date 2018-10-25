var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.signin = function () {
        // if ($scope.movieName === undefined) {
        //     alert('Bạn chưa nhập tên phim')
        //     return
        // }
        let user = {
            email: $scope.userEmail,
            password: $scope.userPassword
        }
        console.log($scope.userEmail)
        console.log($scope.userPassword)
        apiService.signin(user).then(function (response) {
            console.log(response)
            setCookie('token', response.data.token)
            // alert('Đăng nhập thành công')
            window.location.href = '/movie'
        }).catch(function (error){
            console.log(error)

        })
    
    }
}])