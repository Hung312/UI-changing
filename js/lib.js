function updateCard(){
    const titleVal = document.getElementById('input-title').value;
    const bgVal = document.getElementById('input-bg').value;
    const colorVal = document.getElementById('input-color').value;
    const radiusVal = document.getElementById('input-radius').value;

    document.getElementById('radius-val').innerText = radiusVal;

    const card = document.getElementById('preview-card');
    const cardTitle = document.getElementById('preview-title');

    card.style.backgroundColor = bgVal;
    card.style.color = colorVal;
    card.style.borderRadius = radiusVal + "px";
    cardTitle.innerText = titleVal;
}