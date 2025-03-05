
const generateLoremIpsum = () => {
    const paragraphs = document.getElementById('paragraphs').value;
    const words = document.getElementById('words').value;
    const tags = document.getElementById('tags').value; 
    const result = document.getElementById('result');

    let text = '';

    for (let i = 0; i < paragraphs; i++) {
        text += `<${tags}>`;

        for (let j = 0; j < words; j++) {
            text += `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
        }

        text += `</${tags}>`;
    }

    result.innerHTML = text;
}
    
