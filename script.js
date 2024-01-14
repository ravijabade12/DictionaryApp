const input= document.querySelector('input');
const btn=document.querySelector('button');
const dictionaryApp = document.querySelector(".dictionary-app");

// https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionaryFun(word){
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(
        res => res.json()
    ).catch(
        
    );

    // console.log(res);
    return res[0];

   

}

btn.addEventListener("click",fetchCreateCard)

async function fetchCreateCard(){
    const data = await dictionaryFun(input.value);

    console.log(data);

        let partOfSpeecharray =[];

    for(let i =0;i<data.meanings.length-1;i++){
        partOfSpeecharray.push(data.meanings[i].partOfSpeech)

    }

    dictionaryApp.innerHTML = `

    <div class="card">

                <div class="property">
                    <span>Word:</span>
                    <span>${data.word}</span>
                </div>

                <div class="property">
                    <span>phonetics:</span>
                    <span>${data.phonetic}</span>
                </div>

                <div class="property">
                    <span>
                    <audio controls src="${data.phonetics[0].audio}"></audio>
                    </span>
                </div>

                <div class="property">
                    <span>Definition:</span>
                    <span>${data.meanings[0].definitions[0].definition}</span>
                </div>

                <div class="property">
                    <span>Example:</span>
                    <span>${data.meanings[1].definitions[0].example}</span>
                </div>

                <div class="property">
                    <span>${partOfSpeecharray.map(e => e).join(",")}</span>
                </div>

    </div>
    
    
    
    
    `

    



}



