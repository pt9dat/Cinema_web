var myApp = angular.module('Movie')
myApp.controller('userController', ['$scope', 'api_services', function ($scope, apiService) {
    $scope.token = false
    
    apiService.checkUserLoggedIn().then(function (response) {
        // console.log(re)
        $scope.userName = response.data.user.userName
        $scope.userEmail = response.data.user.email
        $scope.token = true
        $scope.newUsername = $scope.userName
        console.log(response)
    }).catch(function (error){
        console.log(error)
    })

    $scope.signout = function() {
        
        deleteCookie('token')
        window.location.href = '/'
    }

    $scope.editName = function() {
        let data = {
            userName: $scope.newUsername
        }
        apiService.editUsername(data).then(function (response) {
            // console.log(re)
            $scope.userName = response.data.user.userName
            // $('#editModal').hide()
            console.log(response)
        }).catch(function (error){
            console.log(error)
        })
    }

    $scope.changePassword = function() {
        if (validateOldPass() && validateNewPass() && validateCNewPass()) {
        let data = {
            oldPass: $scope.oldPass,
            password: $scope.newPass
        }
        apiService.changePassword(data).then(function (response) {
            // console.log(re)
            // $scope.userName = response.data.user.userName
            alert(response.data.message)
            if (response.data.status === 200){
                $('#changeModal').modal('hide')
            }
            
            
            console.log(response)
        }).catch(function (error){
            console.log(error)
        })
    }
    }
    
    $('#oldPass').on('input', function() {
        validateOldPass()
      })
      $('#newPass').on('input', function() {
        validateNewPass()
      })
      $('#cnewPass').on('input', function() {
        validateCNewPass()
      })

      function validateOldPass() {
        if ($('#oldPass').val() === '' && $('#newPass').val() === '' && $('#cnewPass').val() === '') {
            $('#oldPass-error').text('Bạn chưa nhập mật khẩu hiện tại')
            $('#oldPass-error').show()
            $('#newPass-error').text('Bạn chưa nhập mật khẩu mới')
            $('#newPass-error').show()
            $('#cnewPass-error').text('Bạn chưa xác nhận mật khẩu mới')
            $('#cnewPass-error').show()
            return false
        }
        if ($('#oldPass').val() === '') {
            $('#oldPass-error').text('Bạn chưa nhập mật khẩu hiện tại')
            $('#oldPass-error').show()
            $('#oldPass').focus()
            return false
        }else{
            $('#oldPass').focusout()
            $('#oldPass-error').hide()
            return true
        }      
      }

      function validateNewPass() {
        if ($('#newPass').val() === '') {
            $('#newPass-error').text('Bạn chưa nhập mật khẩu mới')
            $('#newPass-error').show()
            $('#newPass').focus()
            return false
        }else{
            $('#newPass').focusout()
            $('#newPass-error').hide()
            return true
        }      
      }

      function validateCNewPass() {
        if ($('#cnewPass').val() === '') {
            $('#cnewPass-error').text('Bạn chưa xác nhận mật khẩu mới')
            $('#cnewPass-error').show()
            $('#cnewPass').focus()
            return false
        }
        if ($('#cnewPass').val() !== $('#newPass').val()) {
            $('#cnewPass-error').text('Mật khẩu xác nhận không trùng khớp')
            $('#cnewPass-error').show()
            $('#cnewPass').focus()
            return false
        }else{
            $('#cnewPass').focusout()
            $('#cnewPass-error').hide()
            return true
        }      
      }


    
}])