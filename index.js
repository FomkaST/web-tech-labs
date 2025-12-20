// 1
function pickPropArray(arr, key) {
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (key in arr[i]) {
            result.push(arr[i][key])
        }
    }

    return result
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
]

const result = pickPropArray(students, 'name')

console.log(result)

// 2
function createCounter() {
    let count = 0

    return function () {
        count++
        console.log(count)
    }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2

// 3
function spinWords(str) {
    const words = str.split(' ')
    const result = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            result.push(words[i].split('').reverse().join(''))
        } else {
            result.push(words[i])
        }
    }

    return result.join(' ')
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test

// 4
function twoSum(nums, target) {
    const map = {}

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]
        const need = target - current

        if (map[need] !== undefined) {
            return [map[need], i]
        }

        map[current] = i
    }
}

const nums = [2, 7, 11, 15]
const target = 9

console.log(twoSum(nums, target))

// 5
function longestCommonSubstring(strs) {
    if (strs.length === 0) return ""

    let shortest = strs.reduce((a, b) => a.length <= b.length ? a : b)
    let maxSub = ""

    for (let len = 2; len <= shortest.length; len++) {
        for (let start = 0; start <= shortest.length - len; start++) {
            let sub = shortest.slice(start, start + len)

            if (strs.every(str => str.includes(sub))) {
                if (sub.length > maxSub.length) {
                    maxSub = sub
                }
            }
        }
    }

    return maxSub
}

console.log(longestCommonSubstring(["цветок","поток","хлопок"]))
console.log(longestCommonSubstring(["собака","гоночная машина","машина"]))
