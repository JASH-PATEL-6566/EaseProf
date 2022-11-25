import Image from "next/image"
import { social } from "../../Data/social";

export default function SocialInput({ click }) {
    return (
        <div className='social-form'>
            {social.map(item => {
                const { alt, title, img, def } = item;
                return (
                    <div key={alt}>
                        <div className='title-social'>
                            <img
                                src={img}
                                height={20}
                                width={20}
                                alt={alt}
                            />
                            <h3>{title}</h3>
                        </div>
                        <div className='span-container'>
                            <span className='pre-span'>{def}</span>
                            <input className='normal-input input-social' type="text" placeholder="YourUsername" def={def} onSelect={click} />
                        </div>
                    </div>)
            })}
        </div>
    )
}