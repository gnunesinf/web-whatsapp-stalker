let isOnline = false;
let lastSeen = ""

function stalk() {
    const stalkDOM = document.querySelectorAll("#main header div:last-child")[3]
    .children[0];

    if ((stalkDOM.innerText === "online" || stalkDOM.innerText === "typing...") && !isOnline) {
        isOnline = true;
        var notify = new Notification('ATENÇÃO!!!!!', {
            body: 'Sua bandida tá online princeso', 
        });
    } else if ((stalkDOM.innerText !== "online" && stalkDOM.innerText !== "typing...") && isOnline) {
        currentTime = new Date();
        currentHour = currentTime.getHours();
        currentMinutes = currentTime.getMinutes();

        
        lastSeen = `Visto por último as ${currentHour} - ${currentMinutes}`;
        var notify = new Notification('ATENÇÃO!!!!!', {
            body: 'Sua bandida saiu do wpp', 
        });

        isOnline = false;
    }
}

async function grantPermission() {
    if(!window.Notification) {
        alert('Usa um navegador atualizado e decente idiota');
        return;
    } else {
        return await Notification.requestPermission();
    }
}

async function start() {
    const permission = await grantPermission();
    if(permission !== 'granted') {
        return;
    }
    
    window.setInterval(stalk, 2000);
}

start();