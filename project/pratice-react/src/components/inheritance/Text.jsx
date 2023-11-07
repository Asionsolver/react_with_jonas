export default function Text({addEmoji, addBracket}){
    let text = "I am Javascript Programming Language.";
    if(addEmoji){
        text = addEmoji(text, '😍')
    }
    if(addBracket){
        text = addBracket(text);
    }
    return <div>{text}</div>
};