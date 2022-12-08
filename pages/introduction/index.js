import Head from 'next/head';
import Upper from '../../Components/upperBlock/Upper';
import Input from '../../Components/Input/Input';
import { intro_data_upper, intro_data_about } from '../../Data/intro_page';
import DoubleInput from '../../Components/Input/DoubleInput';
import { useData } from '../../Context/DataContext';



export default function Introduction() {
    const { changeData, data } = useData();
    // console.log(data);
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
                                val={data[item.di]}
                                change={(e) => changeData(item.di, e.target.value)}
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
                                val={data[item.di]}
                                change={(e) => changeData(item.di, e.target.value)}
                                link_value={data[item.link_id]}
                                link_change={(e) => changeData(item.link_id, e.target.value)}
                            /> :
                                <Input
                                    key={item.di}
                                    di={item.di}
                                    place={item.place}
                                    head={item.head}
                                    val={data[item.di]}
                                    change={(e) => changeData(item.di, e.target.value)}
                                />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
