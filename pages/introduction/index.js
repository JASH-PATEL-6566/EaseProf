import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import Input from '../../Components/Input/Input';
import { intro_data_upper, intro_data_about } from '../../Data/intro_page';
import DoubleInput from '../../Components/Input/DoubleInput';

export default function Introduction() {
    return (
        <>
            <Head>
                <title>EaseProf | Introduction</title>
            </Head>
            <div>
                <Upper head="Introduction" desc="Introduce yourself. Tell visitors about you and who you are." />
                <div className="main_container">
                    {intro_data_upper.map((item) => {
                        return (
                            <Input
                                key={item.di}
                                di={item.di}
                                place={item.place}
                                head={item.head}
                                change={() => console.log("hello")}
                            />
                        )
                    })}
                    <h1>About Me</h1>
                    {intro_data_about.map((item) => {
                        return (
                            item.link_id ? <DoubleInput
                                key={item.di}
                                di={item.di}
                                head={item.head}
                                place={item.place}
                                link_id={item.link_id}
                                link_place={item.link_place}
                            /> :
                                <Input
                                    key={item.di}
                                    di={item.di}
                                    place={item.place}
                                    head={item.head}
                                    change={() => console.log("hello")}
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
