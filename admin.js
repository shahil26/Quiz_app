function chooseImageFile(){
    document.getElementById("fileInput").click();
}

function handleFileSelection(){
    var imageFile = document.getElementById('fileInput').files[0];
    changeImage(imageFile);
}

function changeImage(imageFile){
    var image = document.getElementById("userImage");
    image.src = URL.createObjectURL(imageFile);
}