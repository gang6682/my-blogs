import codemirror from 'codemirror';
import { useEffect, useRef } from 'react';

interface UnControlledProps {
    value: string;
    options: any;
    onBeforeChange: any;
    onChange: any;
}
let editor: any = null;
let shared: any = null;
let mirror: any = null;

function Shared(editor: any, props: any) {

}

function Controlled(props: UnControlledProps) {
    const { options } = props;
    const ref: any = useRef();
    useEffect(() => {
        editor = codemirror(ref.current, options)
        mirror = (codemirror)(() => { }, options);
        editor.on('electricInput', () => {
            mirror.setHistory(editor.getDoc().getHistory());
        });
        editor.on('cursorActivity', () => {
            mirror.setCursor(editor.getDoc().getCursor());
        });
    }, [])
    console.dir(codemirror);

    return <div ref={ref}>

    </div>
}
export default Controlled;