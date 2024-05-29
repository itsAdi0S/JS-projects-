let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionsButton = document.querySelectorAll(".adv-options-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButton = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const initializer = () =>{
    HighlightRegistry(alignButton,true);
    HighlightRegistry(spacingButtonsButton,true);
    HighlightRegistry(formatButtonsButton,true);
    HighlightRegistry(scriptButtonsButton,true);

    fontList.map((value)=>{
        let options = document.createElement("option");
        options.value = value;
        options.innerHTML = value;
        fontName.appendChild(option);
    });
    for(let i = 1;i<=7;i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }
    fontSizeRef.value = 3;
};

const modifyText = (command,defaultUi,value)=>{
    document.eceeCommand(command,defaulyUi,value);
};

optionsButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        modifyText(buton.id,false,null);
    });
});

advancedOptionsButton.forEach((button)=>{
    button.addEventListener("change",()=>{
        modifyText(buton.id,false,button.value);
    });
});

linkButton.addEventListener("click",() =>{
    let userLink = prompt("Enter a URL?");
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    }else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id,false,userLink);
    }
});

const highlighter = (className,needsRemoval =>{
    className.forEach((button)=>{
        button.addEventListener("click",()=>{
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }
                highLighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }else{
                button.classList.toggle("active");
            }
        });
    });
});

const highLighterRemover = (className)=>{
    className.forEach((button)=>{
        button.classList.remove("active");
    });
};

window.onload = initializer();