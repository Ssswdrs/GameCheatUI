document.addEventListener('DOMContentLoaded', (event) => {
    const CONSTANT = {
        hp: 'hp',
        mp: 'mp',
    }

    function updateCurrentHP() {
        let hp = document.getElementById('hp').querySelectorAll('span');
        let maxHP = hp.length;
        for (let i in hp) {
            if (hp[i].className == "disabled") {
                maxHP--;
            }
        }
        CONSTANT.hp = maxHP;
        document.getElementById('hp-left').innerHTML = CONSTANT.hp
    }
    updateCurrentHP();

    function updateCurrentMP() {
        let mp = document.getElementById('mp').querySelectorAll('span');
        let maxMP = mp.length;
        for (let i in mp) {
            if (mp[i].className == "disabled") {
                maxMP--;
            }
        }
        CONSTANT.mp = maxMP;
        document.getElementById('mp-left').innerHTML = CONSTANT.mp
    }
    updateCurrentMP();

    function initMaxBar(){
        let hp = document.getElementById('hp').querySelectorAll('span');
        let mp = document.getElementById('mp').querySelectorAll('span');
        document.getElementById("hp-max").innerHTML = document.getElementById("hp-max").innerHTML + hp.length;
        document.getElementById("mp-max").innerHTML = document.getElementById("mp-max").innerHTML + mp.length;
    }
    initMaxBar()

    function setMaxNone(type, method, bar) {
        if ("hp" === type) {
            if ("max" === method) {
                for (let j = 0; j < bar.length; j++) {
                    bar[j].classList.remove("disabled");
                }
            }
            else if ("none" === method) {
                for (let j = CONSTANT.hp; j > 0; j--) {
                    bar[j - 1].setAttribute("class", "disabled")
                }
            }
        }
        else if ("mp" === type) {
            if ("max" === method) {
                for (let j = 0; j < bar.length; j++) {
                    bar[j].classList.remove("disabled");
                }
            }
            else if ("none" === method) {
                for (let j = CONSTANT.mp; j > 0; j--) {
                    bar[j - 1].setAttribute("class", "disabled")
                }
            }
        }

    }

    function handleHPButtonClick(event) {
        const buttonValue = event.target.value;
        console.log(buttonValue + ' button clicked');
        let hp = document.getElementById('hp').querySelectorAll('span');
        let maxHP = hp.length;
        switch (event.target.id) {
            case 'hp-1':
                hp[CONSTANT.hp - 1].setAttribute("class", "disabled")
                break;
            case 'hp-half':
                let hit = Math.ceil(maxHP / 2)
                if (CONSTANT.hp - hit >= 0) {
                    for (let j = 0; j < hit; j++) {
                        hp[CONSTANT.hp - j - 1].setAttribute("class", "disabled")
                    }
                } else {
                    setMaxNone("hp", "none", hp)
                }
                break;
            case 'hp-all':
                setMaxNone("hp", "none", hp)
                break;
            case 'hp+1':
                hp[CONSTANT.hp].classList.remove("disabled");
                break;
            case 'hp+half':
                let heal = Math.ceil(maxHP / 2)
                if (heal <= maxHP - CONSTANT.hp) {
                    for (let j = 0; j < heal; j++) {
                        hp[CONSTANT.hp + j].classList.remove("disabled");
                    }
                }
                else {
                    setMaxNone("hp", "max", hp)
                }
                break;
            case 'hp+all':
                setMaxNone("hp", "max", hp)
                break;
            default:
                // Default action if needed
                console.warn('id not found');
                break;
        }
        updateCurrentHP()
    }

    function handleMPButtonClick(event) {
        const buttonValue = event.target.value;
        console.log(buttonValue + ' button clicked');
        //let allPoint = getPoint(CONSTANT.mp, CONSTANT.allPoint);
        //console.log('allPoint', allPoint);
        let mp = document.getElementById('mp').querySelectorAll('span');
        let maxMP = mp.length;
        switch (event.target.id) {
            case 'mp-1':
                mp[CONSTANT.mp - 1].setAttribute("class", "disabled")
                break;
            case 'mp-half':
                if (CONSTANT.mp - Math.ceil(CONSTANT.mp / 2) > 0) {
                    for (let j = CONSTANT.mp; j > Math.ceil(CONSTANT.mp / 2); j--) {
                        mp[j - 1].setAttribute("class", "disabled")
                    }
                }
                else {
                    setMaxNone("mp", "none", mp)
                }
                break;
            case 'mp-all':
                setMaxNone("mp", "none", mp)
                break;
            case 'mp+1':
                mp[CONSTANT.mp].classList.remove("disabled");
                break;
            case 'mp+half':
                let heal = Math.ceil(CONSTANT.mp / 2)
                if (heal <= maxMP - CONSTANT.mp) {
                    for (let j = 0; j < heal; j++) {
                        mp[CONSTANT.mp + j].classList.remove("disabled");
                    }
                }
                else {
                    setMaxNone("mp", "max", mp)
                }
                break;
            case 'mp+all':
                setMaxNone("mp", "max", mp)
                break;
            default:
                // Default action if needed
                console.warn('id not found');
                break;
        }
        updateCurrentMP()
    }

    //#region assignFunction
    document.getElementById('hp-1').addEventListener('click', handleHPButtonClick);
    document.getElementById('hp-half').addEventListener('click', handleHPButtonClick);
    document.getElementById('hp-all').addEventListener('click', handleHPButtonClick);

    document.getElementById('mp-1').addEventListener('click', handleMPButtonClick);
    document.getElementById('mp-half').addEventListener('click', handleMPButtonClick);
    document.getElementById('mp-all').addEventListener('click', handleMPButtonClick);

    document.getElementById('hp+1').addEventListener('click', handleHPButtonClick);
    document.getElementById('hp+half').addEventListener('click', handleHPButtonClick);
    document.getElementById('hp+all').addEventListener('click', handleHPButtonClick);

    document.getElementById('mp+1').addEventListener('click', handleMPButtonClick);
    document.getElementById('mp+half').addEventListener('click', handleMPButtonClick);
    document.getElementById('mp+all').addEventListener('click', handleMPButtonClick);
    //#endregion
});