export default function buildKeyboard(qwerty){
    const keyboard = {};
    for(let key of qwerty){
        keyboard[key] = 'cell';
    }

    return keyboard;
}