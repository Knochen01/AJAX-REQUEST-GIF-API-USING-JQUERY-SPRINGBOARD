const form = document.getElementById('form-id');
const input = document.getElementById('input-id')
const gifArea = document.getElementById('gif-area');
const removebtn = document.getElementById('remove');



function addGif(response) {
let numResults = response.data.length;
if (numResults) {
  let randomIdx = Math.floor(Math.random() * numResults);
  const div = document.createElement('div');
  const img = document.createElement('img');
    img.setAttribute('src',response.data[randomIdx].images.original.url);
    div.append(img);
    gifArea.append(div);
}
}


 form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const searchTerm = input.value
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params:{
            q: searchTerm,
            api_key: '3JWbpNrpJQeppmnJZNNrHdE1CASOBpgY'
    }});
    console.log(response)
    addGif(response.data)
})

removebtn.addEventListener('click', function(evt){
    evt.preventDefault();
    gifArea.innerText = ""
})


