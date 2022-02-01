"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");





/**
 *
 * @typedef {Object} VideoFormResponse
 * @property {string} code
 * @property {Object} errors
 * @property {string} html
 */

var formVideo = document.querySelector('#form_video');
var videosList = document.querySelector('#videos_list');
formVideo.addEventListener('submit', function (e) {
  e.preventDefault();
  fetch(this.action, {
    body: new FormData(e.target),
    method: 'POST'
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    handleResponse(json);
  });
});
/**
 *
 * @param {VideoFormResponse} json
 */

var handleResponse = function handleResponse(response) {
  removeErrors();

  switch (response.code) {
    case 'VIDEO_ADDED_SUCCESSFULLY':
      videosList.innerHTML += response.html;
      break;

    case 'VIDEO_INVALID_FORM':
      handleErrors(response.errors);
      break;
  }
};

var removeErrors = function removeErrors() {
  var invalidFeedbackElements = document.querySelectorAll('.invalid-feedback');
  var isInvalidElements = document.querySelectorAll('.is-invalid');
  invalidFeedbackElements.forEach(function (errorElement) {
    return errorElement.remove();
  });
  isInvalidElements.forEach(function (isInvalidElement) {
    return isInvalidElement.classList.remove('is-invalid');
  });
};
/**
 *
 * @param {Object} errors
 */


var handleErrors = function handleErrors(errors) {
  if (errors.length === 0) return;

  for (var key in errors) {
    var element = document.querySelector("#video_".concat(key));
    element.classList.add('is-invalid');
    var div = document.createElement('div');
    div.classList.add('invalid-feedback', 'd-block');
    div.innerText = errors[key];
    element.after(div);
  }
};

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-0defc0"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLyoqXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gVmlkZW9Gb3JtUmVzcG9uc2VcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlXG4gKiBAcHJvcGVydHkge09iamVjdH0gZXJyb3JzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaHRtbFxuICovXG5cbmNvbnN0IGZvcm1WaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX3ZpZGVvJyk7XG5jb25zdCB2aWRlb3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ZpZGVvc19saXN0Jyk7XG5cbmZvcm1WaWRlby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGZldGNoKHRoaXMuYWN0aW9uLCB7XG4gICAgICAgIGJvZHk6IG5ldyBGb3JtRGF0YShlLnRhcmdldCksXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgICAgIGhhbmRsZVJlc3BvbnNlKGpzb24pO1xuICAgICAgICB9KTtcbn0pO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge1ZpZGVvRm9ybVJlc3BvbnNlfSBqc29uXG4gKi9cbmNvbnN0IGhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmVtb3ZlRXJyb3JzKCk7XG4gICAgc3dpdGNoKHJlc3BvbnNlLmNvZGUpIHtcbiAgICAgICAgY2FzZSAnVklERU9fQURERURfU1VDQ0VTU0ZVTExZJzpcbiAgICAgICAgICAgIHZpZGVvc0xpc3QuaW5uZXJIVE1MICs9IHJlc3BvbnNlLmh0bWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnVklERU9fSU5WQUxJRF9GT1JNJzpcbiAgICAgICAgICAgIGhhbmRsZUVycm9ycyhyZXNwb25zZS5lcnJvcnMpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVFcnJvcnMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBpbnZhbGlkRmVlZGJhY2tFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJyk7XG4gICAgY29uc3QgaXNJbnZhbGlkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXMtaW52YWxpZCcpO1xuXG4gICAgaW52YWxpZEZlZWRiYWNrRWxlbWVudHMuZm9yRWFjaChlcnJvckVsZW1lbnQgPT4gZXJyb3JFbGVtZW50LnJlbW92ZSgpKTtcbiAgICBpc0ludmFsaWRFbGVtZW50cy5mb3JFYWNoKGlzSW52YWxpZEVsZW1lbnQgPT4gaXNJbnZhbGlkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1pbnZhbGlkJykpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXJyb3JzXG4gKi9cbmNvbnN0IGhhbmRsZUVycm9ycyA9IGZ1bmN0aW9uKGVycm9ycykge1xuICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBlcnJvcnMpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdmlkZW9fJHtrZXl9YCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtZmVlZGJhY2snLCAnZC1ibG9jaycpO1xuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gZXJyb3JzW2tleV07XG5cbiAgICAgICAgZWxlbWVudC5hZnRlcihkaXYpO1xuICAgIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiZm9ybVZpZGVvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmlkZW9zTGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImFjdGlvbiIsImJvZHkiLCJGb3JtRGF0YSIsInRhcmdldCIsIm1ldGhvZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVSZXNwb25zZSIsInJlbW92ZUVycm9ycyIsImNvZGUiLCJpbm5lckhUTUwiLCJodG1sIiwiaGFuZGxlRXJyb3JzIiwiZXJyb3JzIiwiaW52YWxpZEZlZWRiYWNrRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXNJbnZhbGlkRWxlbWVudHMiLCJmb3JFYWNoIiwiZXJyb3JFbGVtZW50IiwicmVtb3ZlIiwiaXNJbnZhbGlkRWxlbWVudCIsImNsYXNzTGlzdCIsImxlbmd0aCIsImtleSIsImVsZW1lbnQiLCJhZGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYWZ0ZXIiXSwic291cmNlUm9vdCI6IiJ9