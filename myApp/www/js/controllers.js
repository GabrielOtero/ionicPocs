angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the modal modal
  $scope.modalData = {};

  // Create the modal modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the modal modal to close it
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  // Open the modal modal
  $scope.openModal = function() {
    $scope.modal.show();
  };

  // Perform the modal action when the user submits the modal form
  $scope.doModal = function() {
    console.log('Doing modal', $scope.modalData);

    // Simulate a modal delay. Remove this and replace with your modal
    // code if using a modal system
    $timeout(function() {
      $scope.closeModal();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('RecordAudioCtrl', function($scope, $stateParams) {
    var captureError = function(e) {
      console.log('captureError' ,e);
    }

    var captureSuccess = function(e) {
        console.log('captureSuccess');console.dir(e);
        $scope.sound.file = e[0].localURL;
        $scope.sound.filePath = e[0].fullPath;
    }

    $scope.record = function() {
        navigator.device.capture.captureAudio(
            captureSuccess,captureError,{duration:10});
    }
})
;
