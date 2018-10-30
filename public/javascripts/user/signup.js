var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.signup = function () {
        if ($scope.userName === undefined) {
            alert('Bạn chưa nhập tên user')
            return
        }
        if ($scope.userEmail === undefined) {
            alert('Bạn chưa nhập tên user')
            return
        }
        //if (!$scope.signupForm.valid()){ return }
        if ($scope.userPassword != $scope.userConfirmPass || $scope.userPassword === undefined) {
                alert('Mật khẩu xác nhận không trùng khớp')
            return
        }
        let user = {
            userName: $scope.userName,
            email: $scope.userEmail,
            password: $scope.userPassword
        }
        console.log($scope.userName)
        console.log($scope.userEmail)
        console.log($scope.userPassword)
        apiService.signup(user).then(function (response) {
            // if (response.data.token === undefined) { 
                
            //     return }
            setCookie('token', response.data.token)
            // alert('Đăng ký thành công')
            window.location.href = '/'
        }).catch(function (error){
            console.log(error)

        })
    
    }
}])