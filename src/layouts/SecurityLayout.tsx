import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './SecurityLayout.module.less';
// import Controlled from './Test';
import { Controlled } from './demo'

function SecurityLayout() {
    const [markdown, setMarkdown] = useState("123 456 789")
    const save = () => {
        console.log(markdown);
    }
    return (
        <div className={styles.securityLayoutWrap}>
            <div className={styles.editWrap}>
                <div>
                    <Controlled
                        value={markdown}
                        options={{}}
                        onBeforeChange={(editor: any, data: any, value: any) => {
                            setMarkdown(value);
                        }}
                        onChange={(editor: any, data: any, value: any) => {
                            console.log("onChange");
                        }}
                    />
                </div>
            </div>
            <div className={styles.showWrap}>
                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
        </div>
    )
}

export default SecurityLayout