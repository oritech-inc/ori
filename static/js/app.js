
// const url = window.location.href;
    const chatData = [];

const usr = `http://127.0.0.1:5000/static/imgs/icons/user.svg`;
const bot = `http://127.0.0.1:5000/static/imgs/icons/logo.svg`;

window.addEventListener("load", () => {
    let loadInterval;
    // alert(generateUniqueId())
});

const submitForm = ( async(e) => {
    e.preventDefault();
    const  data = new FormData(form);
    chatContainer.innerHTML += chatStripe(false,data.get('prompt'));
    form.reset();
    
});

form.addEventListener('submit', submitForm);
form.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        submitForm(e);
    }
})


function loader(element){
    element.textContent = '';
    loadInterval = setInterval(() =>{
        element.textContent += '.';
        if(element.textContent === '....'){
            element.textContent ='';
        }
    }, 200);
}

//
function typeText(element, text) {
    let index = 0;
    let interval = setInterval(()=>{
        if(index < text.length){
            element.innerHTML += text.charAt(index);
            index++;
        }
        else{
            clearInterval(interval);
        }
    },20);
}

//
function chatStripe(isAi, txt) {
    const id = `id-${Date.now()}-${Math.random().toString(16)}`;
    chatData.push([chatStipeBackup(isAi,txt,id)]);
    console.log(chatData);
    return(
        `
            <div class="wrapper ${isAi && 'ai'}">
                <div class="chat">
                    <div class="profile" >
                        <img src="${isAi?bot:usr}" alt="${isAi?bot:usr}"/>
                    </div>
                    <div class="message" 
                    id="id-${id}">
                    ${txt}
                    </div>
                </div>
            </div>
        `
    );
}
function chatStipeBackup(isAi, txt, id) {
    return({
        'sender'  :isAi?'bot':'client',
        'chatQr'  :txt,
        'chatId'  :id,
        'sentOn'  :new Date(),
    });
}

function internalError() {
    document.querySelector("main").innerHTML = (
        "<div class='col-8 text-uppercase' id='err'>" +
        "<img class='img-fluid' src='/static/imgs/offline.svg' alt='warning image' />" +
        "<h1 class='py-3'>Oops, Your internet connection was lost</h1>" +
        "<p class='pb-3'><span class='text-primary h3 text-bold'>" +
        window.location.href +
        " Refuses to connect</span></p><ul>" +
        "<li>Restart your router or access point</li>" +
        "<li>Check with your service provider</li>" +
        "<li>Check your if your device is not on airplane mode</li>" +
        "</ul>" +
        "<button class='btn btn-outline-dark btn-block btn-no-anim'>" +
        "RELOAD THIS PAGE <i class='fas fa-sync fa-lg'></i>" +
        "</button>" +
        "</div>"
    );
}
