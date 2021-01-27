document.addEventListener("DOMContentLoaded", function(event) {
const app = document.getElementById('MainContent')

const container = document.createElement('div')
container.setAttribute('class', 'container')
	
app.appendChild(container)
	
var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/lang/es', true)
request.onload = function () {
	
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
	  
	data.forEach((country) => {
		
		const card = document.createElement('div')
		card.setAttribute('class', 'country')
		card.onclick = function() {alert("País: "+country.name+", Región: "+country.region); };
		
		const flagDiv = document.createElement('div')
		flagDiv.setAttribute('class', 'flag')
		const flagImg = document.createElement('img')
		flagImg.setAttribute("src", ""+country.flag)
		const dataDiv = document.createElement('div')
		dataDiv.setAttribute('class', 'data')

		const nameDiv = document.createElement('div')
		nameDiv.textContent= country.name
		const capitalDiv = document.createElement('div')
		capitalDiv.textContent= country.capital
		
		const tbl = document.createElement('table')
		
		const tr = document.createElement('tr')
		const td1a = document.createElement('td')
		td1a.textContent= "Población"
		const td1b = document.createElement('td')
		td1b.textContent= country.population.toLocaleString()
		
		const tr2 = document.createElement('tr')
		const td2a = document.createElement('td')
		td2a.textContent= "Región"
		const td2b = document.createElement('td')
		td2b.textContent= country.region
		
		tr.appendChild(td1a)
		tr.appendChild(td1b)
		
		tr2.appendChild(td2a)
		tr2.appendChild(td2b)
		
		tbl.appendChild(tr)
		tbl.appendChild(tr2)
		
		dataDiv.appendChild(nameDiv)
		dataDiv.appendChild(capitalDiv)
		dataDiv.appendChild(tbl)
		
		flagDiv.appendChild(flagImg)
		card.appendChild(flagDiv)
		card.appendChild(dataDiv)
		
		container.appendChild(card)
		
	})

  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Ocurrio un problema'
    app.appendChild(errorMessage)
  }
}

request.send()
});