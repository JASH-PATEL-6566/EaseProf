export default function Input({ place, val, change, di, head }) {
    return (
        <div className="normal-input">
            <label htmlFor={di} className="label">{head}</label>
            <input type="text" id={di} placeholder={place} value={val} onChange={change} />
        </div>
    )
}