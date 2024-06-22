function SkillsList({ src, lang }) {
  return (
    <span>
      <img src={src} alt={`${lang} icon`}></img>
      <p>{lang}</p>
    </span>
  );
}

export default SkillsList;
