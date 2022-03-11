
import { useCallback, useMemo, useState } from 'react';
import MyButton from '../../components/button';

const TestUseCallback: React.FC = () => {
    const [value1, setValue1] = useState(Math.random())
    const [value2, setValue2] = useState(Math.random())
    const [value3, setValue3] = useState(Math.random())
    console.log(value1);
    console.log(value2);
    console.log(value3);


    const clickBtn2 = useCallback(() => {
        console.log(111);

        setValue1(value1 + 1)
    }, [])
    console.log(22);
    return (
        <div>
            <MyButton clickBtn={clickBtn2}>btn1</MyButton>
            <MyButton clickBtn={() => { setValue2(val => val + 1) }}>btn2</MyButton>
            <MyButton clickBtn={() => { setValue3(val => val + 1) }}>btn3</MyButton>
        </div>
    )
}
export default TestUseCallback