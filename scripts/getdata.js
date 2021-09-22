const base = "https://api.funtranslations.com/translate/yoda.json";



const getData = async(textinput) => {
    const test = `?text=${textinput}`;

    const response = await fetch(base+test);
    const data = await response.json();

    return {textObj: data.contents};

}

