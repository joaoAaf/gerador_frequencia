const tbody = document.getElementById('tboby_frequency')

const date = new Date(ano,mes,1)











const tr = document.createElement('tr')

const td = document.createElement('td')
td.innerHTML = date.getMonth()

tr.appendChild(td)
tbody.appendChild(tr)






/*const data = [[${data}]][]

document.write(data.mes)

if (data.aleatorio == true) {

}
else if (data.repetir == true) {

}
else {

}*/