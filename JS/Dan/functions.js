

function check(params) {


    if (params ) {
        console.log('true')
    }

    let car = {
        petrol: 'paramshonda',
        electric: 'tesla',
        disel: 'toyoto',
        paramscar: params.name
    }

    console.log(car)
    console.log('hi vim I"m welcome you')
    let editor = { hi: 'vim' }
	editor.vim = 'terminal tool to execute or edit files'
	editor.tool = 'bash and terminal'
	editor.usage = 'only using terminal commands'
    console.log(editor)
    

}

check(1)


console.log([])
console.log({})
console.log(x => x < 2)

let arrw = (passTheArguments) => {
    return passTheArguments
}

console.log(arrw('arrow function parameters are passing'))

let complexObject = {
    id: [1, 'objects are everything', true, 'complex type'],
    name: { 
        lap: 'hp laptop',
        pc: 'lenova',
        hardware: {
            ram: '8gb',
            hardisk: '1tb',
            screen: {
                pcScreen: 15.6,
                lapScreen: 22
            }
        }
    }
}

console.log('Making the object as complex as much we can : ' )
console.log(complexObject)
console.log(complexObject.name.hardware.screen)