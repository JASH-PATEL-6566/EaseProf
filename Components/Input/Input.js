export default function Input({ place, val, change, di, head, type, name, clas }) {
    return (
        <div className="normal-input">
            <label htmlFor={di} className="label">{head}</label>
            <input type={type === "text" ? "text" : type} id={di} placeholder={place} value={val} onChange={change} name={name === "" ? "" : name} className={clas === "input_contact" ? "input_contact" : ""} />
        </div>
    )
}