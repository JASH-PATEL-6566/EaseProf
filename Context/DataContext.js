import { useState } from "react";
import { createContext, useContext } from "react";

const defaultData = {
    total: 0,
    name: '',
    subtitle: '',
    based: '',
    portfolio: '',
    portfolio_link: '',
    contact: '',
    currentWork: '',
    currentWork_link: '',
    collaborate: '',
    else: '',
    // social
    twitter: '',
    twitter: '',
    medium: '',
    devto: '',
    linkedin: '',
    polywork: '',
    twitch: '',
    youtube: '',
    discord: '',
    instagram: '',
    facebook: '',
    dribbble: '',
    behance: '',
    codesandbox: '',
    codepen: '',
    stackoverflow: '',
    rss: '',
    skill: [],
    social: [],
    github: '',
    stats_card_link: 'https://github-readme-stats.vercel.app/api?username=',
    commit_streak_link: 'https://github-readme-streak-stats.herokuapp.com/?user=',
    top_language_link: 'https://github-readme-stats.vercel.app/api/top-langs/?username=',
    profile_trophys_link: 'https://github-profile-trophy.vercel.app/?username=',
    profile_view_link: 'https://komarev.com/ghpvc/?username=',
    stats_card: false,
    commit_streak: false,
    top_language: false,
    profile_trophys: false,
    profile_view: false,
    support_link: 'https://www.buymeacoffee.com/',
    support: ''
}

const DataContext = createContext();
export function useData() {
    return useContext(DataContext);
}

export default function DataProvider({ children }) {
    const [data, setData] = useState(defaultData);

    const changeData = (id, value) => {
        setData({ ...data, [id]: value })
    }

    const appendSkill = (value) => {
        setData({ ...data, skill: [...data.skill, value] })
    }

    const popSkill = (value) => {
        let skill = data.skill;
        let newSkill = skill.filter((item) => item.title !== value)
        setData({ ...data, skill: newSkill })
    }

    const addSocial = (value, id, img, def) => {
        changeData(id, value);
        if (value === '') {
            const other = data.social.filter(item => item.title !== id);
            setData({ ...data, social: [...other] })
        }
        else {
            if (data.social.length === 0) {
                const newData = {
                    title: id,
                    img,
                    link: (def + value)
                }
                setData({ ...data, social: [...data.social, newData] })
            }
            else {
                const present = data.social.filter(item => item.title === id);
                if (present.length === 0) {
                    const newData = {
                        title: id,
                        img,
                        link: (def + value)
                    }
                    setData({ ...data, social: [...data.social, newData] })
                }
                else {
                    const other = data.social.filter(item => item.title !== id);
                    const newData = present[0];
                    newData.link = (def + value);
                    setData({ ...data, social: [...other, newData] })
                }
            }

        }
    }

    const value = {
        data,
        changeData,
        appendSkill,
        popSkill,
        addSocial
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}