import Intro from "../Components/HomePage/Intro/Intro";
import Skill_home from "../Components/HomePage/Skills/Skill_home";
import Snippet_home from "../Components/HomePage/Snippet/Snippet_home";
import Social_intro from "../Components/HomePage/Social/Social_intro";
import Stats_home from "../Components/HomePage/Stats/Stats_home";
import classes from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="screen">
      <Intro />
      <Skill_home />
      <Social_intro />
      <Stats_home />
      <Snippet_home />
      <footer className={classes.container}>
        <p>© Copyright 2023 EaseProf. All rights reserved.</p>
      </footer>
    </div>
  )
}