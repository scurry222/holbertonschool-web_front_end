const changeMode = (size, weight, transform, background, color) => {
    document.body.style.fontSize = size.toString() + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
}

const container = document.querySelector('body');

const main = () => {
    const spookyMode = () => changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");

    const text = document.createElement('p');
    text.innerText = "Welcome Holberton!";
    container.appendChild(text);

    const spookybtn = document.createElement('button');
    spookybtn.id = 'spookybtn';
    spookybtn.innerText = 'Spooky';
    container.appendChild(spookybtn);

    const darkbtn = document.createElement('button');
    darkbtn.id = 'darkbtn';
    darkbtn.innerText= 'Dark mode';
    container.appendChild(darkbtn);

    const screambtn = document.createElement('button');
    screambtn.id = 'screambtn';
    screambtn.innerText = 'Scream mode';
    container.appendChild(screambtn);

    document.getElementById("spookybtn").addEventListener("click", spookyMode);
    document.getElementById("darkbtn").addEventListener("click", darkMode);
    document.getElementById("screambtn").addEventListener("click", screamMode);
}

main();