;(function($) {

    $.fn.toggleCheck = function(toggleContents, callback) {

        var TC = {

            isChecked: function(element){

                return $(element).is(':checked');

            },
            getContentIndex: function(element){

                return (TC.isChecked(element)) ? 1 : 0;

            },
            getContent: function(index, type){

                var container = $('<span class="toggle-check-container"></span>');

                return container.on('click', function(e){

                    var parent = $(this).prev();

                    if(type == 'checkbox') {

                        var checked = !TC.isChecked(parent);
                        TC.refreshCheckbox(parent, checked)
                        TC.fireCallback(e, parent);

                    } else if(type == 'radio') {

                        parent.prop('checked', true);
                        var radioName = parent.attr('name');
                        TC.refreshRadio(radioName);
                        TC.fireCallback(e, parent);

                    }

                })
                .css('cursor', 'pointer')
                .html(toggleContents[index]);

            },
            fireCallback: function(e, target){

                if(typeof(callback) == 'function') {

                    callback(e, target);

                }

            },
            refreshCheckbox: function(target, checked){

                var contentIndex = (checked) ? 1 : 0;
                var toggleContent = TC.getContent(contentIndex, 'checkbox');

                target.next().remove();
                target.after(toggleContent).prop('checked', checked);

            },
            refreshRadio: function(name){

                $('input[name="'+ name +'"]').each(function(index, element){

                    var nextChecked = !TC.getContentIndex(element);
                    var contentIndex = (nextChecked) ? 0 : 1;
                    var toggleContent = TC.getContent(contentIndex, 'radio');
                    $(element).next().remove();
                    $(element).after(toggleContent);

                });

            }

        };

        $.each(this, function(key, element){

            var target = $(element);
            var type = target.attr('type');
            var contentIndex = TC.getContentIndex(element);
            var toggleContent = TC.getContent(contentIndex, type);
            target.after(toggleContent).css('display', 'none');

            if(type == 'checkbox') {

                target.on('change', function(e){

                    var checked = $(this).is(':checked');
                    TC.refreshCheckbox($(this), checked);
                    TC.fireCallback(e, $(this));

                });

            } else if(type == 'radio') {

                target.on('change', function(e){

                    var radioName = $(this).attr('name');
                    TC.refreshRadio(radioName);
                    TC.fireCallback(e, $(this));

                });

            }

        });

    }

})(jQuery);