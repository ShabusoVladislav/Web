class Table {
  constructor(container){
    this.table = document.createElement('table')
    container.append(this.table)
    this.table.className = "mainTable"
  }

  makeTableHead = (arr) => {
    this.th = document.createElement('tr')
    this.th.className = "th"
    this.table.append(this.th)
    for(this.key in arr[0]){
      this.thd = document.createElement('td')
      this.thd.innerHTML = this.key;
      this.th.append(this.thd)
    }
  }

  makeTableBody = (arr) =>{
    for(let i = 0; i < arr.length; i++){
      this.tr = document.createElement('tr')
      this.tr.className = 'trInTable'
      this.table.append(this.tr)
      for(this.key in arr[i]){
          this.td = document.createElement('td')
          this.td.classList.add(this.key)
          this.td.innerHTML = arr[i][this.key]
          this.tr.append(this.td)
      }
    }
  }
}

countQuantity = (tableClass, type) => {   //подсчет суммы в столбце
  const table = document.querySelector(`.${tableClass}`)
  const quantityArr = table.querySelectorAll(`.${type}`)
  let quantityAll = 0
  for(let elem of quantityArr) {
    quantityAll += parseInt(elem.innerHTML)
  }
  return quantityAll
}

countAverage = (tableClass, type) => {
  const table = document.querySelector(`.${tableClass}`)
  const quantityArr = table.querySelectorAll(`.${type}`)
  let sum = countQuantity(tableClass, type)
  let quantity = quantityArr.length
  return sum / quantity
}

const container = document.createElement('div') //создаем контейнер
container.classList.add('container')
document.body.append(container)

const table = new Table(container)  //создаем таблицу
table.makeTableHead(arr)
table.makeTableBody(arr)

const divQuantity = document.createElement('div') //подсчет и вывод общего количества
divQuantity.className = 'divQuantity'
divQuantity.innerHTML = `Количество по всем товарам: <strong>${countQuantity('mainTable', 'quantity')}</strong>`
table.table.after(divQuantity)

const divAveragePrice = document.createElement('div') //подсчет и вывод средней цены
divAveragePrice.className = 'divAveragePrice'
divAveragePrice.innerHTML = `Средняя цена по всем товарам: <strong>${countAverage('mainTable', 'price').toFixed(2)}</strong>`
divQuantity.after(divAveragePrice)