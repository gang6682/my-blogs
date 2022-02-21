import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './markdown.module.less';
import { Controlled } from '../../components/demo';

const Markdown: React.FC = () => {
    const [markdown, setMarkdown] = useState("123 456 789")
    return (
        <div className={styles.markdownWrap}>
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
export default Markdown