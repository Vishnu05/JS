

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

/** Primitives and objects  */

console.log('hi')
console.log(true)
console.log(10)

/** Objects */
console.log({})
console.log([])