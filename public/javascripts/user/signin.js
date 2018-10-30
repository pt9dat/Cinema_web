var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.signin = function () {
        if(validateEmail() && validatePassword()){
        let user = {
            email: $scope.userEmail,
            password: $scope.userPassword
        }
        console.log($scope.userEmail)
        console.log($scope.userPassword)
        apiService.signin(user).then(function (response) {
            if (response.data.token === undefined) { 
                alert('Sai email hoặc password')
                return 
            }
            setCookie('token', response.data.token)
            // $http.defaults.headers.common['x-access-token']=response.data.token
            // alert('Đăng nhập thành công')
            window.location.href = '/'
        }).catch(function (error){
            console.log(error)

        })
    
    }
    }

    $('#cemail').on('input', function() {
        validateEmail()
      })

      $('#cname').on('input', function() {
        validatePassword()
      })

      function isEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
      }

      function validateEmail() {
        if ($('#cemail').val() === '' && $('#cname').val() === '') {
            $('#email-error').text('Bạn chưa nhập email')
            $('#email-error').show()
            $('#password-error').text('Bạn chưa nhập password')
            $('#password-error').show()
            return false
        }
        if ($('#cemail').val() === '') {
            $('#email-error').text('Bạn chưa nhập email')
            $('#email-error').show()
            $('#cemail').focus()
            return false
        }
        if (!isEmail($('#cemail').val())) {
            $('#email-error').text('Email chưa đúng định dạng')
            $('#email-error').show()
            $('#cemail').focus()
            return false
        }else{
            $('#cemail').focusout()
            $('#email-error').hide()
            return true
        }      
    }

    function validatePassword() {
        if ($('#cname').val() === '') {
            $('#password-error').text('Bạn chưa nhập password')
            $('#password-error').show()
            $('#cname').focus()
            return false
        }else{
            $('#password-error').hide()
            $('#cname').focusout()
            return true
        }
    }
}])