angular.module('mdClearInput', []).
    directive('mdClearInput', function () {
        function link(scope, element, attrs) {
            console.log('mdClearInput');

            element.bind('click', function () {
                console.log('click')
                if (element.hasClass('mdClick')) {
                    element.val('');
                    element.removeClass('mdClearButton');
                }
            });
            element.bind('keyup', function () {
                if (element.val()) {
                    element.addClass('mdClearButton');
                    element.bind('mousemove', function (e) {
                        console.log(e.clientX - this.getBoundingClientRect().left)
                        if (this.offsetWidth - 15 < e.clientX - this.getBoundingClientRect().left && this.offsetWidth - 5 > e.clientX - this.getBoundingClientRect().left) {
                            console.log('mdClearButton')
                            element.addClass('mdClick');
                        }
                        else {
                            element.removeClass('mdClick');
                        }
                    });
                }
                else {
                    element.removeClass('mdClearButton');

                }
            });
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    });