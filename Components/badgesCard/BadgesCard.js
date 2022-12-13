import { badgesData } from "../../Data/badges"
import { useData } from "../../Context/DataContext";

export default function BadgesCard() {
    const { data, changeData } = useData();

    return (
        <>
            {badgesData.map(item => {
                const { alt, title, link_start } = item;
                return (
                    <div className="card-container" key={alt}>
                        <input type="checkbox" name={alt} id={alt} link={link_start} onClick={() => {
                            changeData(alt, !data[alt])
                        }} checked={data[alt]} onChange={() => { }} />
                        <label htmlFor={alt} link={link_start}>{title}</label>
                    </div>
                )
            })}
        </>
    )
}