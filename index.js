const DEPOSIT_DEBIT_KEY = 'DEP_DBT'
const LIST_KEY = 'LIST'

class Account {
	name
	deposit

	static accountInfoList = []

	constructor(name, deposit) {
		this.name = name
		this.deposit = deposit
	}
}

function createAccount() {
	let name = document.getElementById('accountName')
	let deposit = document.getElementById('deposit')
	if(!name.value || !deposit.value) {
		return
	}

	let acc = new Account(name.value, +deposit.value)

	name.value = ''
	deposit.value = null

	Account.accountInfoList.push(acc)
	localStorage.setItem(LIST_KEY, JSON.stringify(Account.accountInfoList))
	updateTextarea()
}

function updateTextarea() {
	let st = ''

	for(let i = 0; i < Account.accountInfoList.length; i++) {
		st += `Account Name: ${Account.accountInfoList[i].name} Balance: ${Account.accountInfoList[i].deposit} \n`
	}

	document.getElementById('accountList').innerHTML = st
}

function onDeposit() {
	localStorage.setItem(DEPOSIT_DEBIT_KEY, 'dep')
	window.open('./deposit.html', '_blank')
}

const onDebit = () => {
	localStorage.setItem(DEPOSIT_DEBIT_KEY, 'debit')
	window.open('./deposit.html', '_blank')
}

const loadData = () => {
	Account.accountInfoList = JSON.parse(localStorage.getItem(LIST_KEY)) || []
	updateTextarea()
}

window.onfocus = loadData
window.onload = loadData
