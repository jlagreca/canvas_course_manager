'use strict';
/* global  canvasSupportApp, errorDisplay, generateCurrentTimestamp  */

//COURSES FACTORY - does the request for the courses controller
canvasSupportApp.factory('Courses', function ($http) {
  return {
    getCourses: function (url) {
      return $http.get(url, {cache: false}).then(
        function success(result) {
          //forward the data - let the controller deal with it
          return result; 
        },
        function error(result) {
          errorDisplay(url, result.status, 'Unable to get courses');
          result.errors.failure = true;    
          return result;
        }
      );
    }
  };
});
//SECTIONS FACTORY - does the request for the sections controller
canvasSupportApp.factory('Sections', function ($http) {
  return {
    getSectionsForCourseId: function (courseId) {
      var url = '/sectionsUtilityTool/manager/api/v1/courses/' + courseId + '/sections?per_page=100&_='+ generateCurrentTimestamp();
      return $http.get(url, {cache: false}).then(
        function success(result) {
          return result;
        },
        function error(result) {
          errorDisplay(url, result.status, 'Unable to get sections');
        }
      );
    }
  };
});

//FRIEND LOOKU FACTORY - does the request for the friend controller
canvasSupportApp.factory('Friend', function ($http) {
  return {
    lookUpFriend: function (friendId) {
      var url = '/sectionsUtilityTool/manager/api/v1/accounts/self/users?search_term=' + friendId;
      return $http.get(url, {cache: false}).then(
        function success(result) {
          return result;
        },
        function error(result) {
          
        }
      );

    }
  };
});