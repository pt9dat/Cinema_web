var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
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
        
        deleteCookie('token')
        window.location.href = '/'
    }

    
}])