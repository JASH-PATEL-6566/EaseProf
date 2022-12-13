import Image from "next/image"
import { social } from "../../Data/social";
import { useData } from "../../Context/DataContext";

export default function SocialInput() {
    const { data, addSocial } = useData();
    return (
        <div className='social-form'>
            {social.map(item => {
                const { alt, title, img, def, id } = item;
                return (
                    <div key={id}>
                        <div className='title-social'>
                            <Image
                                src={img}
                                height={20}
                                width={20}
                                alt={alt}
                                property='performance'
                            />
                            <h3>{title}</h3>
                        </div>
                        <div className='span-container'>
                            <span className='pre-span'>{def}</span>
                            <input
                                className='normal-input input-social'
                                type="text"
                                placeholder="YourUsername"
                                def={def}
                                img={img}
                                id={id}
                                value={data.id}
                                onChange={(e) => addSocial(e.target.value, id, img, def)}
                            />
                        </div>
                    </div>)
            })}
        </div>
    )
}