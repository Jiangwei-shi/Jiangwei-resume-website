import {FC, memo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-neutral-200 bg-white p-5">
      <h3 className="text-lg font-bold text-neutral-800">{name}</h3>
      <ul className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </ul>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  return <li className="rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">{skill.name}</li>;
});

Skill.displayName = 'Skill';
