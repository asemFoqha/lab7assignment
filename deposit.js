const DEPOSIT_DEBIT_KEY = 'DEP_DBT'
const LIST_KEY = 'LIST'

let test = JSON.parse(localStorage.getItem(LIST_KEY))

const selectTag = document.getElementById('accounts')
let options = test
.map((acc) => `<option value="${acc}">${acc.name}</option>`)
.join('\n')
selectTag.innerHTML = options

const onSubmit = () => {
	changeAmount()
}


//TODO fix the disable
const textChange =() => {
	const btn = document.getElementById('submitBtn')
	let value = Number(document.querySelector('#ammount').value)
	btn.disabled = !Boolean(value)
}

const changeAmount = () => {
	let value = Number(document.querySelector('#ammount').value)
	document.querySelector('#ammount').value = null
	if(localStorage.getItem(DEPOSIT_DEBIT_KEY) === 'dep') {
		test[document.getElementById('accounts').selectedIndex].deposit += value
	} else if(localStorage.getItem(DEPOSIT_DEBIT_KEY) === 'debit') {
		test[document.getElementById('accounts').selectedIndex].deposit -= value
	}
	localStorage.setItem(LIST_KEY, JSON.stringify(test))
	open('./deposit.html', '_self').close()
}
