const btnEl = document.getElementById("generate-jokes");
const loader = document.getElementById("loading");
const jokeCon = document.getElementById("jokeContainer");
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

btnEl.addEventListener("click", function(){
    
    loader.style.display = "block";
    loader.style.color = "blue"
    loader.textContent = "loading..."
    btnEl.disabled = true;
    jokeCon.textContent = "";

    fetch("https://official-joke-api.appspot.com/random_ten")
    .then(respond => respond.json())
    .then(jokes => {
        loader.style.display = "none";
        btnEl.disabled = false;

        jokes.forEach((joke, index) => {
            const jokesEl = document.createElement("div");
            jokesEl.classList.add("subcontainer")
            jokesEl.innerHTML = `<p><strong>Joke ${index + 1}:</strong> ${joke.setup}</p>
          <p style="margin-bottom: 15px;">😂 ${joke.punchline}</p>
          <hr/>`;
          setTimeout(() =>{
            jokeCon.appendChild(jokesEl)
            jokesEl.classList.add("visible");
          }, index * 200)
            
        });

        s

    })
    .catch(error =>{
        loader.style.color = "red";
        loader.textContent = "loading failed try again"
        btnEl.disabled = false;
        console.log("Error", error)
    })
})