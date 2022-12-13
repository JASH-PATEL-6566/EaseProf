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
    social: []
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