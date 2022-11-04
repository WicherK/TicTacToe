let player = 0; //0 is circle 1 is cross
const fields = document.getElementsByTagName('td');
const result = document.getElementById('result');
let end = false;

document.addEventListener('DOMContentLoaded', (event) => {
    //Get first player
    console.log("Gra się rozpoczyna");
    console.log("Losuje gracza...");
    player = Math.floor(Math.random() * 2);
    console.log("Wylosowano: " + player);

    ShowWhichPlayerNow();

    //Set listeners
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].addEventListener('click', (field) => {
            if(!end && field.target.innerHTML == "")
            {
                field.target.innerHTML = player == 0 ? "O" : "X"; 
                WinningSystem();
                //After every move show player to user
                ShowWhichPlayerNow();
            }
        }); 
    }   
    
    document.getElementsByClassName('again')[0].addEventListener('click', (element) => {
        window.location.reload();
    });
});

function ShowWhichPlayerNow()
{
    document.getElementById('playerName').innerHTML = player == 0 ? "Teraz: Kółko" : "Teraz: Krzyżyk";
}

function WinningSystem()
{
    //XXX
    if(fields[0].innerHTML == fields[1].innerHTML && fields[0].innerHTML == fields[2].innerHTML && (fields[0].innerHTML && fields[1].innerHTML && fields[2].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    if(fields[3].innerHTML == fields[4].innerHTML && fields[3].innerHTML == fields[5].innerHTML && (fields[3].innerHTML && fields[4].innerHTML && fields[5].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }
    
    if(fields[6].innerHTML == fields[7].innerHTML && fields[6].innerHTML == fields[8].innerHTML && (fields[6].innerHTML && fields[7].innerHTML && fields[8].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    //X
    //X
    //X
    if(fields[0].innerHTML == fields[3].innerHTML && fields[0].innerHTML == fields[6].innerHTML && (fields[0].innerHTML && fields[3].innerHTML && fields[6].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    if(fields[1].innerHTML == fields[4].innerHTML && fields[1].innerHTML == fields[7].innerHTML && (fields[1].innerHTML && fields[4].innerHTML && fields[7].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    if(fields[2].innerHTML == fields[5].innerHTML && fields[2].innerHTML == fields[8].innerHTML && (fields[2].innerHTML && fields[5].innerHTML && fields[8].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    //X
    // X
    //  X
    if(fields[0].innerHTML == fields[4].innerHTML && fields[0].innerHTML == fields[8].innerHTML && (fields[0].innerHTML && fields[4].innerHTML && fields[8].innerHTML) != "")   
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    //  X
    // X
    //X
    if(fields[2].innerHTML == fields[4].innerHTML && fields[2].innerHTML == fields[6].innerHTML && (fields[2].innerHTML && fields[4].innerHTML && fields[6].innerHTML) != "")
    {
        result.innerHTML = player == 0 ? "Wygrał: O" : "Wygrał: X";
        end = true;
    }

    if(!end && fields[0].innerHTML != "" && fields[1].innerHTML != "" && fields[2].innerHTML != "" && fields[3].innerHTML != "" && fields[4].innerHTML != "" && fields[5].innerHTML != "" && fields[6].innerHTML != "" && fields[7].innerHTML != "" && fields[8].innerHTML != "")
    {
        result.innerHTML = "Remis";   
        end = true;
    }

    if(end)
    {
        document.getElementsByClassName('again')[0].style.visibility = "visible";
    }

    //Change turn after checking everything
    player = !player;
}