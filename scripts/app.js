const form = document.querySelector('form');
const disp = document.querySelector('p');


const updateUI = (text) =>{

    if(disp.classList.contains('hide')){
        disp.classList.remove('hide');
    }

    disp.textContent = text;
    const sp = new SpeechSynthesisUtterance(text);
    [sp.voice] = speechSynthesis.getVoices();
    sp.rate = 0.2;
    sp.pitch = 0.3;
    speechSynthesis.speak(sp);
    
}
const updateURL = async(inp) =>{

    const data = await getData(inp);

    return data.textObj.translated;
}


form.addEventListener('submit',e=>{
    e.preventDefault();
    let inp = form.textInput.value;
    form.reset();
    updateURL(inp)
        .then((data)=>{
            updateUI(data);
    })
        .catch((err)=>{
            console.log(err);
        });
})
