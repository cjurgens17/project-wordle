export default function buildKeyboard(qwerty){
    let keyboard = {};
    for(let key of qwerty){
        keyboard[key] = 'cell';
    }

    return keyboard;
}