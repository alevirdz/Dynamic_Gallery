console.log("conectado")

$(function() {
        // Gallery.
        $('.gallery').each(function() {

            var	$gallery = $(this),
                $content = $gallery.find('.content');

            // Poptrox.
                $content.poptrox({
                    usePopupCaption: true
                });

            // Tabs.
                $gallery.each( function() {

                    var $this = $(this),
                        $tabs = $this.find('.tabs a'),
                        $media = $this.find('.media');

                    $tabs.on('click', function(e) {

                        var $this = $(this),
                            tag = $this.data('tag');

                        // Prevent default.
                             e.preventDefault();

                        // Remove active class from all tabs.
                            $tabs.removeClass('active');

                        // Reapply active class to current tab.
                            $this.addClass('active');

                        // Hide media that do not have the same class as the clicked tab.
                            $media
                                .fadeOut('fast')
                                .each(function() {

                                    var $this = $(this);

                                    if ($this.hasClass(tag))
                                        $this
                                            .fadeOut('fast')
                                            .delay(200)
                                            .queue(function(next) {
                                                $this.fadeIn();
                                                next();
                                            });

                                });

                    });

                });


        });
});