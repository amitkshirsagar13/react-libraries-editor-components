import React, { useEffect } from 'react';

import './theme/prism-vsc-dark-plus.css';
import './editor.css';

import Prism from 'prismjs';

export function TextAreaEditor({ seedCode, language, readOnly }: any) {
    const [code, setCode] = React.useState(seedCode);
    const _readOnly = readOnly;

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    function syncScroll() {
        /* Scroll result to scroll coords of event - sync with textarea */
        let textareaElement: any = document.querySelector('#editing');
        let preElement: any = document.querySelector('#highlighting');
        // Get and set x and y
        preElement.scrollTop = textareaElement.scrollTop;
        preElement.scrollLeft = textareaElement.scrollLeft;
    }
    function setTextValue(e: any) {
        let text = e.target.value;
        text = text.replace(/\n /, '\n');
        text += text[text.length - 1] == '\n' ? ' ' : '';
        setCode(text);
        syncScroll();
    }

    return (
        <div className="code-editor">
            {_readOnly ? (
                <textarea id="editing" onInput={(e) => setTextValue(e)} value={code} onScroll={() => syncScroll()} readOnly={_readOnly}></textarea>
            ) : (
                <textarea id="editing" onInput={(e) => setTextValue(e)} value={code} onScroll={() => syncScroll()}></textarea>
            )}
            <pre id="highlighting" className="pre-code">
                <code id="code" className={`pre-code language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
