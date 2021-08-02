var contruct = `
<div id="content" style="
    background-color: black;
    color: aliceblue;
    display: block;
    position: absolute;
    overflow-y:auto;
    overflow-x:auto;
    border-radius: 0px;
    padding: 50px;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    font-size: 20px;
    text-align: center;
    transform: translate(-50%, -50%);
">


    <div id="1" style="padding:5px"></div>
    <div id="2" style="padding:5px"></div>
    <div id="3" style="padding:5px"></div>
    <div id="4" style="padding:5px"></div>
    <div id="5" style="padding:5px"></div>
    <div id="6" style="padding:5px"></div>
    <div id="7"></div>
    <div id="8" style="height: 500px;"></div>
</div>
`;

var content = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
}
document.body.innerHTML = contruct;

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

async function showContent(content, timeSleep) {
    Object.keys(content).forEach(async (key) => {
        document.getElementById(key.toString()).innerHTML = content[key];
    });
    await sleep(timeSleep)
}

async function show() {
    var c = JSON.parse(JSON.stringify(content));
    c[1] = "Xin Chào  😘";
    await showContent(c, 1500);
    c[2] = "Anh là Huy 😎";
    await showContent(c, 1500);
    c[3] = "Anh có thể yêu em được không? 🥰";
    await showContent(c, 1500);
    c[4] = "Loading ....... 0%";
    c[5] = "--------------------------------";
    c[6] = 'I Love you';
    await showContent(c, 1000);
    const listStep = [0];
    for (i = 1; i < 101; i++) {
        listStep.push(i);
    }

    await asyncForEach(listStep, async (step) => {
        c[4] = `Loading ....... ${step}%`;
        if (step == 99) {
            c[7] = `<div id="6" style="font-size: 1px;">❤️</div>`;
        }
        await showContent(c, 50);
        return true;
    });
    const listStep2 = [10];
    for (j = 15; j < 120; j = j + 5) {
        listStep2.push(j);
    }
    await asyncForEach(listStep2, async (step) => {
        c[7] = `<div id="6" style="font-size: ${step}px;">❤️</div>`;
        await showContent(c, 100);
        return true;
    });
    c[8] = `<iframe style="width: 80%; height: 80%;" id="preview-frame" class="preview-desktop" src="https://devforum.info/DEMO/phaohoa/" frameborder="0"></iframe>`;
    await showContent(c, 100);
}
show();