import React, { useRef,  useState } from 'react'

export default function CopyBoard() {
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    let valueBox = textAreaRef.current.select();
    console.log(valueBox);
    textAreaRef.current.select();
    //document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div>
      <div>
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
      <form>
        <textarea ref={textAreaRef}  value='a' rows="5" cols="40"/>
      </form>
    </div>
  );
}
