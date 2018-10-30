var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.signup = function () {
        if (validateUserName() && validateEmail() && validatePassword() && validateCPassword()){
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
    }

    $('#cemail').on('input', function() {
        validateEmail()
      })

      $('#cname').on('input', function() {
        validateUserName()
      })
      $('#cpass').on('input', function() {
        validatePassword()
      })
      $('#ccpass').on('input', function() {
        validateCPassword()
      })

      function isEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
      }

      function validateUserName() {
        if ($('#cemail').val() === '' && $('#cname').val() === '' && $('#cpass').val() === '' && $('#ccpass').val() === '') {
            $('#email-error').text('Bạn chưa nhập email')
            $('#email-error').show()
            $('#password-error').text('Bạn chưa nhập password')
            $('#password-error').show()
            $('#cpassword-error').text('Bạn chưa xác nhận password')
            $('#cpassword-error').show()
            $('#username-error').text('Bạn chưa nhập username')
            $('#username-error').show()
            return false
        }
        if ($('#cname').val() === '') {
            $('#username-error').text('Bạn chưa nhập username')
            $('#username-error').show()
            $('#cname').focus()
            return false
        }else{
            $('#cemail').focusout()
            $('#username-error').hide()
            return true
        }      
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
        if ($('#cpass').val() === '') {
            $('#password-error').text('Bạn chưa nhập password')
            $('#password-error').show()
            $('#cpass').focus()
            return false
        }else{
            $('#password-error').hide()
            $('#cpass').focusout()
            return true
        }
    }

    function validateCPassword() {
        if ($('#cccpass').val() === '') {
            $('#cpassword-error').text('Bạn chưa xác nhận password')
            $('#cpassword-error').show()
            $('#ccpass').focus()
            return false
            }
        if ($('#cpass').val() !== $('#ccpass').val()){
            $('#cpassword-error').text('Password không trùng khớp')
            $('#cpassword-error').show()
            $('#ccpass').focus()
            return false
        }else{
            $('#cpassword-error').hide()
            $('#ccpass').focusout()
            return true
        }
    }
}])