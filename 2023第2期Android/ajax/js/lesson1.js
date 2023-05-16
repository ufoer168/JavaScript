let sareaElement =  document.getElementById('sarea');
sareaElement.addEventListener('change', (event) => {
    let selectedIndex = sareaElement.selectedIndex;
    console.log(sareaElement.options[selectedIndex].value)
});
function reqListener() {
    let youbikedata = JSON.parse(this.responseText)
    let sarea_array = []
    for(const youbike of youbikedata){
        sarea_array.push(youbike.sarea)    
    }
    sarea_array = [...new Set(sarea_array)]
    let optionElement = document.createElement('option')
    optionElement.textContent = '請選擇行政區'
    sareaElement.appendChild(optionElement)
    for(const area of sarea_array){
        let optionElement = document.createElement('option')
        optionElement.textContent = area
        sareaElement.appendChild(optionElement)
    }
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();
}

window.addEventListener('load', windowload)