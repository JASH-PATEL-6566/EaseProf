export default function DoubleInput({ place, val, change, di, head, link, link_id, link_value, link_change, link_place }) {
    return (
        <div className="normal-input">
            <label htmlFor={di} className="label">{head}</label>
            <div className="double">
                <input type="text" id={di} placeholder={place} value={val} onChange={change} />
                <input type="text" id={link_id} placeholder={link_place} value={link_value} onChange={link_change} />
            </div>
        </div>
    )
}