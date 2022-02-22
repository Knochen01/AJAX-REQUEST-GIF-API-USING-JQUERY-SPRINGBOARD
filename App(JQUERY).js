$('form-id')
$('input-id')
$('gif-area');
$('remove');


function addGif(response) {
let numResults = response.data.length;
if (numResults) {
  let randomIdx = Math.floor(Math.random() * numResults);
  const div = $('<div>');
  const img = $('<img>', {src: response.data[randomIdx].images.original.url});
    div.append(img);
    $('#gif-area').append(div);
}
}


 $('#form-id').on('submit', async function(evt) {
    evt.preventDefault();
    const searchTerm = $('#input-id').val()
    // $('#input-id').val("")

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q: searchTerm,
            api_key: '3JWbpNrpJQeppmnJZNNrHdE1CASOBpgY'
    }});
    console.log(searchTerm)
    console.log(response)
    addGif(response.data)
})

$('#remove').on('click', function(evt){
    evt.preventDefault();
    $('#gif-area').empty()
    console.log("LOOSER")

});


