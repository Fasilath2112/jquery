$(document).ready(function() {
    $('#fetch-cat').click(function() {
        var apiUrl = 'https://api.thecatapi.com/v1/images/search';

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                if (data && data.length > 0 && data[0].url) {
                    var imageUrl = data[0].url;
                    var output = `
                        <img src="${imageUrl}" alt="Cat Image" style="max-width: 100%; height: auto;">
                    `;
                    $('#cat-image-container').html(output);
                } else {
                    $('#cat-image-container').html('<p>No cat image found.</p>');
                }
            },
            error: function(error) {
                console.log('Error:', error);
                $('#cat-image-container').html('<p>There was an error fetching the cat image.</p>');
            }
        });
    });
});

