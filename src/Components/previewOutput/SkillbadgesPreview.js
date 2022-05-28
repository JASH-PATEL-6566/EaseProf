import React from 'react';
import PrevSkillData from '../../Data/PrevSkillData';
import skillName from '../../Data/skillName';

// const [array, setarray] = React.useState(skillArray)

// React.useEffect(prev => {

// }, [skillArray])

// const coreSkillPreview = skillData.main.core.map(skill => {
//     return (
//         <a href={`${skill.source}`} hidden={`${skill.select ? true : false}`}>
//             <img className='img-skill core-img' src={`${skill.img}`} alt={`${skill.title}`} />
//         </a>
//     );
// })

// const frontSkillPreview = skillData.main.frontend.map(skill => {
//     return (
//         <a hidden={`${skill.select ? false : true}`} href={`${skill.source}`}>
//             <img className='img-skill core-img ' src={`${skill.img}`} alt={`${skill.title}`} />
//         </a>
//     );
// })

// const backSkillPreview = skillData.main.backend.map(skill => {
//     return (
//         <a hidden={`${skill.select ? false : true}`} href={`${skill.source}`}>
//             <img className='img-skill core-img' src={`${skill.img}`} alt={`${skill.title}`} />
//         </a>
//     );
// })
// const otherSkillPreview = skillData.main.other.map(skill => {
//     return (
//         <a hidden={`${skill.select ? false : true}`} href={`${skill.source}`}>
//             <img className='img-skill core-img' src={`${skill.img}`} alt={`${skill.title}`} />
//         </a>
//     );
// })
// const softSkillPreview = skillData.main.software.map(skill => {

//     return (
//         <a hidden={`${skill.select ? false : true}`} href={`${skill.source}`}>
//             <img className='img-skill core-img' src={`${skill.img}`} alt={`${skill.title}`} />
//         </a>
//     );
// })
// skillName[skill] 



// console.log(map)

export default function SkillbadgesPreview() {

    // const [data, setdata] = React.useState(skillName)
    // React.useEffect(() => {
    //     setdata(prev => {
    //         prev = skillNameData.map(skill => {
    //             return (skillName[skill] && <a href={`${PrevSkillData[skill].source}`}><img src={`${PrevSkillData[skill].img}`} alt={`${PrevSkillData[skill].title}`} className='img-skill core-img' /></a>)
    //         })
    //     })
    // }, [skillName])
    // console.log(skillName.C)
    return (
        <div className='skill-container-preview'>
            {/* {coreSkillPreview}
            {frontSkillPreview}
            {backSkillPreview}
            {otherSkillPreview}
            {softSkillPreview} */}
            {/* {map} */}

            {skillName.C && <a href={`${PrevSkillData.C.source}`} target='_blank'><img src={`${PrevSkillData.C.img}`} alt={`${PrevSkillData.C.title}`} className='img-skill core-img' /></a>}
            {skillName.Cpp && <a href={`${PrevSkillData.Cpp.source}`} target='_blank'><img src={`${PrevSkillData.Cpp.img}`} alt={`${PrevSkillData.Cpp.title}`} className='img-skill core-img' /></a>}
            {skillName.Chash && <a href={`${PrevSkillData.Chash.source}`} target='_blank'><img src={`${PrevSkillData.Chash.img}`} alt={`${PrevSkillData.Chash.title}`} className='img-skill core-img' /></a>}
            {skillName.Coffeescript && <a href={`${PrevSkillData.Coffeescript.source}`} target='_blank'><img src={`${PrevSkillData.Coffeescript.img}`} alt={`${PrevSkillData.Coffeescript.title}`} className='img-skill core-img' /></a>}
            {skillName.Dart && <a href={`${PrevSkillData.Dart.source}`} target='_blank'><img src={`${PrevSkillData.Dart.img}`} alt={`${PrevSkillData.Dart.title}`} className='img-skill core-img' /></a>}
            {skillName.Go && <a href={`${PrevSkillData.Go.source}`} target='_blank'><img src={`${PrevSkillData.Go.img}`} alt={`${PrevSkillData.Go.title}`} className='img-skill core-img' /></a>}
            {skillName.Java && <a href={`${PrevSkillData.Java.source}`} target='_blank'><img src={`${PrevSkillData.Java.img}`} alt={`${PrevSkillData.Java.title}`} className='img-skill core-img' /></a>}
            {skillName.Javascript && <a href={`${PrevSkillData.Javascript.source}`}><img src={`${PrevSkillData.Javascript.img}`} alt={`${PrevSkillData.Javascript.title}`} className='img-skill core-img' /></a>}
            {skillName.Perl && <a href={`${PrevSkillData.Perl.source}`} target='_blank'><img src={`${PrevSkillData.Perl.img}`} alt={`${PrevSkillData.Perl.title}`} className='img-skill core-img' /></a>}
            {skillName.PHP && <a href={`${PrevSkillData.PHP.source}`} target='_blank'><img src={`${PrevSkillData.PHP.img}`} alt={`${PrevSkillData.PHP.title}`} className='img-skill core-img' /></a>}
            {skillName.Python && <a href={`${PrevSkillData.Python.source}`} target='_blank'><img src={`${PrevSkillData.Python.img}`} alt={`${PrevSkillData.Python.title}`} className='img-skill core-img' /></a>}
            {skillName.Ruby && <a href={`${PrevSkillData.Ruby.source}`} target='_blank'><img src={`${PrevSkillData.Ruby.img}`} alt={`${PrevSkillData.Ruby.title}`} className='img-skill core-img' /></a>}
            {skillName.Rust && <a href={`${PrevSkillData.Rust.source}`} target='_blank'><img src={`${PrevSkillData.Rust.img}`} alt={`${PrevSkillData.Rust.title}`} className='img-skill core-img' /></a>}
            {skillName.Typescript && <a href={`${PrevSkillData.Typescript.source}`} target='_blank'><img src={`${PrevSkillData.Typescript.img}`} alt={`${PrevSkillData.Typescript.title}`} className='img-skill core-img' /></a>}
            {skillName.Swift && <a href={`${PrevSkillData.Swift.source}`} target='_blank'><img src={`${PrevSkillData.Swift.img}`} alt={`${PrevSkillData.Swift.title}`} className='img-skill core-img' /></a>}
            {skillName.HTML5 && <a href={`${PrevSkillData.HTML5.source}`} target='_blank'><img src={`${PrevSkillData.HTML5.img}`} alt={`${PrevSkillData.HTML5.title}`} className='img-skill core-img' /></a>}
            {skillName.CSS3 && <a href={`${PrevSkillData.CSS3.source}`} target='_blank'><img src={`${PrevSkillData.CSS3.img}`} alt={`${PrevSkillData.CSS3.title}`} className='img-skill core-img' /></a>}
            {skillName.Sass && <a href={`${PrevSkillData.Sass.source}`} target='_blank'><img src={`${PrevSkillData.Sass.img}`} alt={`${PrevSkillData.Sass.title}`} className='img-skill core-img' /></a>}
            {skillName.TailwindCSS && <a href={`${PrevSkillData.TailwindCSS.source}`} target='_blank'><img src={`${PrevSkillData.TailwindCSS.img}`} alt={`${PrevSkillData.TailwindCSS.title}`} className='img-skill core-img' /></a>}
            {skillName.Bulma && <a href={`${PrevSkillData.Bulma.source}`} target='_blank'><img src={`${PrevSkillData.Bulma.img}`} alt={`${PrevSkillData.Bulma.title}`} className='img-skill core-img' /></a>}
            {skillName.Bootstarp && <a href={`${PrevSkillData.Bootstarp.source}`} target='_blank'><img src={`${PrevSkillData.Bootstarp.img}`} alt={`${PrevSkillData.Bootstarp.title}`} className='img-skill core-img' /></a>}
            {skillName.React && <a href={`${PrevSkillData.React.source}`} target='_blank'><img src={`${PrevSkillData.React.img}`} alt={`${PrevSkillData.React.title}`} className='img-skill core-img' /></a>}
            {skillName.NextJs && <a href={`${PrevSkillData.NextJs.source}`} target='_blank'><img src={`${PrevSkillData.NextJs.img}`} alt={`${PrevSkillData.NextJs.title}`} className='img-skill core-img' /></a>}
            {skillName.Vue && <a href={`${PrevSkillData.Vue.source}`} target='_blank'><img src={`${PrevSkillData.Vue.img}`} alt={`${PrevSkillData.Vue.title}`} className='img-skill core-img' /></a>}
            {skillName.NuxtJs && <a href={`${PrevSkillData.NuxtJs.source}`} target='_blank'><img src={`${PrevSkillData.NuxtJs.img}`} alt={`${PrevSkillData.NuxtJs.title}`} className='img-skill core-img' /></a>}
            {skillName.Gatsby && <a href={`${PrevSkillData.Gatsby.source}`} target='_blank'><img src={`${PrevSkillData.Gatsby.img}`} alt={`${PrevSkillData.Gatsby.title}`} className='img-skill core-img' /></a>}
            {skillName.Angular && <a href={`${PrevSkillData.Angular.source}`} target='_blank'><img src={`${PrevSkillData.Angular.img}`} alt={`${PrevSkillData.Angular.title}`} className='img-skill core-img' /></a>}
            {skillName.JQuery && <a href={`${PrevSkillData.JQuery.source}`} target='_blank'><img src={`${PrevSkillData.JQuery.img}`} alt={`${PrevSkillData.JQuery.title}`} className='img-skill core-img' /></a>}
            {skillName.UI && <a href={`${PrevSkillData.UI.source}`} target='_blank'><img src={`${PrevSkillData.UI.img}`} alt={`${PrevSkillData.UI.title}`} className='img-skill core-img' /></a>}
            {skillName.Redux && <a href={`${PrevSkillData.Redux.source}`} target='_blank'><img src={`${PrevSkillData.Redux.img}`} alt={`${PrevSkillData.Redux.title}`} className='img-skill core-img' /></a>}
            {skillName.Webpack && <a href={`${PrevSkillData.Webpack.source}`} target='_blank'><img src={`${PrevSkillData.Webpack.img}`} alt={`${PrevSkillData.Webpack.title}`} className='img-skill core-img' /></a>}
            {skillName.Babel && <a href={`${PrevSkillData.Babel.source}`} target='_blank'><img src={`${PrevSkillData.Babel.img}`} alt={`${PrevSkillData.Babel.title}`} className='img-skill core-img' /></a>}
            {skillName.Svelte && <a href={`${PrevSkillData.Svelte.source}`} target='_blank'><img src={`${PrevSkillData.Svelte.img}`} alt={`${PrevSkillData.Svelte.title}`} className='img-skill core-img' /></a>}
            {skillName.NodeJS && <a href={`${PrevSkillData.NodeJS.source}`} target='_blank'><img src={`${PrevSkillData.NodeJS.img}`} alt={`${PrevSkillData.NodeJS.title}`} className='img-skill core-img' /></a>}
            {skillName.Express && <a href={`${PrevSkillData.Express.source}`} target='_blank'><img src={`${PrevSkillData.Express.img}`} alt={`${PrevSkillData.Express.title}`} className='img-skill core-img' /></a>}
            {skillName.API && <a href={`${PrevSkillData.API.source}`} target='_blank'><img src={`${PrevSkillData.API.img}`} alt={`${PrevSkillData.API.title}`} className='img-skill core-img' /></a>}
            {skillName.GraphQL && <a href={`${PrevSkillData.GraphQL.source}`} target='_blank'><img src={`${PrevSkillData.GraphQL.img}`} alt={`${PrevSkillData.GraphQL.title}`} className='img-skill core-img' /></a>}
            {skillName.Oracle && <a href={`${PrevSkillData.Oracle.source}`} target='_blank'><img src={`${PrevSkillData.Oracle.img}`} alt={`${PrevSkillData.Oracle.title}`} className='img-skill core-img' /></a>}
            {skillName.NestJS && <a href={`${PrevSkillData.NestJS.source}`} target='_blank'><img src={`${PrevSkillData.NestJS.img}`} alt={`${PrevSkillData.NestJS.title}`} className='img-skill core-img' /></a>}
            {skillName.MongoDB && <a href={`${PrevSkillData.MongoDB.source}`} target='_blank'><img src={`${PrevSkillData.MongoDB.img}`} alt={`${PrevSkillData.MongoDB.title}`} className='img-skill core-img' /></a>}
            {skillName.MySQL && <a href={`${PrevSkillData.MySQL.source}`} target='_blank'><img src={`${PrevSkillData.MySQL.img}`} alt={`${PrevSkillData.MySQL.title}`} className='img-skill core-img' /></a>}
            {skillName.PostgreSQL && <a href={`${PrevSkillData.PostgreSQL.source}`} target='_blank'><img src={`${PrevSkillData.PostgreSQL.img}`} alt={`${PrevSkillData.PostgreSQL.title}`} className='img-skill core-img' /></a>}
            {skillName.Firebase && <a href={`${PrevSkillData.Firebase.source}`} target='_blank'><img src={`${PrevSkillData.Firebase.img}`} alt={`${PrevSkillData.Firebase.title}`} className='img-skill core-img' /></a>}
            {skillName.Appwrite && <a href={`${PrevSkillData.Appwrite.source}`} target='_blank'><img src={`${PrevSkillData.Appwrite.img}`} alt={`${PrevSkillData.Appwrite.title}`} className='img-skill core-img' /></a>}
            {skillName.Heroku && <a href={`${PrevSkillData.Heroku.source}`} target='_blank'><img src={`${PrevSkillData.Heroku.img}`} alt={`${PrevSkillData.Heroku.title}`} className='img-skill core-img' /></a>}
            {skillName.Flask && <a href={`${PrevSkillData.Flask.source}`} target='_blank'><img src={`${PrevSkillData.Flask.img}`} alt={`${PrevSkillData.Flask.title}`} className='img-skill core-img' /></a>}
            {skillName.Supabase && <a href={`${PrevSkillData.Supabase.source}`} target='_blank'><img src={`${PrevSkillData.Supabase.img}`} alt={`${PrevSkillData.Supabase.title}`} className='img-skill core-img' /></a>}
            {skillName.NET && <a href={`${PrevSkillData.NET.source}`} target='_blank'><img src={`${PrevSkillData.NET.img}`} alt={`${PrevSkillData.NET.title}`} className='img-skill core-img' /></a>}
            {skillName.Django && <a href={`${PrevSkillData.Django.source}`} target='_blank'><img src={`${PrevSkillData.Django.img}`} alt={`${PrevSkillData.Django.title}`} className='img-skill core-img' /></a>}
            {skillName.Lavarel && <a href={`${PrevSkillData.Lavarel.source}`} target='_blank'><img src={`${PrevSkillData.Lavarel.img}`} alt={`${PrevSkillData.Lavarel.title}`} className='img-skill core-img' /></a>}
            {skillName.Flutter && <a href={`${PrevSkillData.Flutter.source}`} target='_blank'><img src={`${PrevSkillData.Flutter.img}`} alt={`${PrevSkillData.Flutter.title}`} className='img-skill core-img' /></a>}
            {skillName.Photoshop && <a href={`${PrevSkillData.Photoshop.source}`} target='_blank'><img src={`${PrevSkillData.Photoshop.img}`} alt={`${PrevSkillData.Photoshop.title}`} className='img-skill core-img' /></a>}
            {skillName.Illustrator && <a href={`${PrevSkillData.Illustrator.source}`} target='_blank'><img src={`${PrevSkillData.Illustrator.img}`} alt={`${PrevSkillData.Illustrator.title}`} className='img-skill core-img' /></a>}
            {skillName.Effects && <a href={`${PrevSkillData.Effects.source}`} target='_blank'><img src={`${PrevSkillData.Effects.img}`} alt={`${PrevSkillData.Effects.title}`} className='img-skill core-img' /></a>}
            {skillName.Pro && <a href={`${PrevSkillData.Pro.source}`} target='_blank'><img src={`${PrevSkillData.Pro.img}`} alt={`${PrevSkillData.Pro.title}`} className='img-skill core-img' /></a>}
            {skillName.XD && <a href={`${PrevSkillData.XD.source}`} target='_blank'><img src={`${PrevSkillData.XD.img}`} alt={`${PrevSkillData.XD.title}`} className='img-skill core-img' /></a>}
            {skillName.Figma && <a href={`${PrevSkillData.Figma.source}`} target='_blank'><img src={`${PrevSkillData.Figma.img}`} alt={`${PrevSkillData.Figma.title}`} className='img-skill core-img' /></a>}
            {skillName.Sketch && <a href={`${PrevSkillData.Sketch.source}`} target='_blank'><img src={`${PrevSkillData.Sketch.img}`} alt={`${PrevSkillData.Sketch.title}`} className='img-skill core-img' /></a>}
        </div>
    );
}