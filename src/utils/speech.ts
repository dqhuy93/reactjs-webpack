// Function to convert HTML string to SSML
function htmlToSsml(htmlString: string) {
  // Map HTML tags to SSML equivalents
  const htmlToSsmlMap: Record<string, string> = {
    '<p>': '<s>',
    '</p>': '</s>',
    '<br>': '<break time="300ms"/>', // Example: adding a break after each <br> tag
    '<strong>': '<emphasis level="strong">',
    '</strong>': '</emphasis>',
    '<em>': '<emphasis>',
    '</em>': '</emphasis>'
    // Add more mappings as needed for other HTML tags
  };

  // Replace HTML tags with SSML equivalents
  let ssmlString = htmlString;
  for (const tag in htmlToSsmlMap) {
    if (Object.prototype.hasOwnProperty.call(htmlToSsmlMap, tag)) {
      ssmlString = ssmlString.replace(new RegExp(tag, 'g'), htmlToSsmlMap[tag]);
    }
  }

  return ssmlString;
}

// Function to convert HTML string to speech
export function speakHTML() {
  const htmlString = '<p>This is a <strong>sample</strong> text with <em>HTML</em> tags.</p>';
  // Create a new SpeechSynthesisUtterance object
  const utterance = new SpeechSynthesisUtterance();

  // Set the text property of the utterance to the plain text extracted from the HTML string
  utterance.text = htmlString.replace(/<[^>]*>/g, '');

  // Use the SpeechSynthesis API to speak the utterance
  window.speechSynthesis.speak(utterance);
}

export function replaceAllHTMLTag() {
  const stringWithHtml = '<p>This is a <strong>sample</strong> text with <em>HTML</em> tags.</p>';

  const stringWithoutHtml = stringWithHtml.replace(/<[^>]*>/g, '');

  console.log(stringWithoutHtml);
}
