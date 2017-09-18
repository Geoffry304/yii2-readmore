function lessText() {

    $('.less_text').each(function (event) { /* select all divs with the item class */
        var max_length = 40; /* set the max content length before a read more link will be added */
        if ($(this).html().length > max_length) { /* check for content length */

            var short_content = $(this).text().substr(0, max_length); /* split the content in two parts */
            var long_content = $(this).text().substr(max_length);
            long_content = long_content.replace(/(?:\r\n|\r|\n)/g, '<br />');
            long_content += '<a href="#" class="badge read_less">Read less</a>';
            var between_content = '... ';

            $(this).html(short_content +
                    '<span class="between_content">' + between_content + '</span>' +
                    '<a href="#" class="badge read_more">Read more</a>' +
                    '<span class="more_text" style="display:none;">' + long_content + '</span>'); /* Alter the html to allow the read more functionality */

            $(this).find('a.read_more').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.less_text').find('a.read_less').show();
                $(this).parents('.less_text').find('.between_content').hide(); /* show the .more_text span */
                $(this).parents('.less_text').find('.more_text').show(); /* show the .more_text span */
            });

            $(this).find('a.read_less').click(function (event) { /* find the a.read_more element within the new html and bind the following code to it */
                event.preventDefault(); /* prevent the a from changing the url */
                $(this).hide(); /* hide the read more button */
                $(this).parents('.less_text').find('a.read_more').show();
                $(this).parents('.less_text').find('.between_content').show(); /* show the .more_text span */
                $(this).parents('.less_text').find('.more_text').hide(); /* show the .more_text span */
            });
        }
    });
}
$(document).on('ready pjax:success', function () {
    lessText();
});
