console.log('JavaScript funguje')


// Jak se vytvoříí pole a co to je

let seznamJmen = ["Alenka", 'Jája', 'Pája', 'Bolek', 'Lolek', 'Bob', 'Bobek', 'Pat', 'Mat', 'Eliška']
let seznamCisel = [1, 15, 18, 30]

// Jak přistupujeme k prvkům pole

console.log(seznamJmen)
console.log(seznamJmen.length)
console.log(seznamJmen[6])
seznamJmen[1] = 'Gargamel'
console.log(seznamJmen)

// Práce s polem v cyklu

for (let i = 0; i < 11; i++) {
    console.log('Něco')
}

for (let i = 0; i < seznamJmen.length; i++) {
    console.log(seznamJmen[i])
}

// Metody pro práci s polem
// - pridat na konec
seznamJmen.push('Bručoun')
// - odebrat z konce
seznamJmen.pop() //pro uloženi -> let odebran = seznamJmen.pop()
// - pridat na zacatek
seznamJmen.unshift('Slizoun', 'Kýchal')
// - odebrat ze zacatku
seznamJmen.shift()
// - vrátit kousek pole od-do
let novaJmena = seznamJmen.slice(1,5)
