# jquery.toggle-check
A jQuery plugin to replace input checkbox and radio button with specific contents like [iCheck](http://fronteed.com/iCheck/).

![サンプル画像](http://i.imgur.com/WyqwhnQ.png) 

Requirements
====

* [jQuery](https://jquery.com/)

Installation
=====
Using bower is the simplest way.

    bower install jquery.toggle-check --save-dev

Usage
====

**Basic Way**

    $('.toggle-check').toggleCheck([
        '<span>Open</span>',
        '<span>Close</span>'
    ]);
    

**with Callback**

    $('.toggle-check').toggleCheck([
        '<i class="fa fa-circle-o"></i>',
        '<i class="fa fa-check-circle-o"></i>'
    ], function(e, targetCheck){

        alert(targetCheck.val());

    });

**Changing checked value by event**

    $('#checkbox').on('click', function(){

        var checked = $(this).is(':checked');
        $('.toggle-check').prop('checked', checked).change();

    });
    
*You need call change().

License
====

This package is licensed under the MIT License.

Copyright 2015 Sukohi Kuhoh
