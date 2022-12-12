import Image from "next/image"


export default function Skill({ click, heading, data }) {
    return (
        <div className="skill_container">
            <h2>{heading}</h2>
            {data.map(item => {
                const { title, img, source } = item;
                return (
                    <Image
                        src={img}
                        height={40}
                        width={40}
                        priority="performance"
                        source={source}
                        onClick={click}
                        alt={title}
                        key={title}
                        id={title}
                        className="img_skill"
                        title={title}
                    />
                )
            })}
        </div>
    )
}