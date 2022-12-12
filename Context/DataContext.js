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
}

const DataContext = createContext();
export function useData() {
    return useContext(DataContext);
}

export default function DataProvider({ children }) {
    const [data, setData] = useState(defaultData);
    console.log(data.total);
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

    const value = {
        data,
        changeData,
        appendSkill,
        popSkill
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}