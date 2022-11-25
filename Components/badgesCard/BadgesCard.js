import { badgesData } from "../../Data/badges"

export default function BadgesCard() {
    return (
        <>
            {badgesData.map(item => {
                const { id, title, link_start } = item;
                return (
                    <div className="card-container" key={id}>
                        <input type="checkbox" name={id} id={id} />
                        <label htmlFor={id} link={link_start}>{title}</label>
                    </div>
                )
            })}
        </>
    )
}