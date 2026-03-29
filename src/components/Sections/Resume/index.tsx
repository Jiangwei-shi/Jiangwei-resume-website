import {FC, memo} from 'react';

import {useLocale} from '../../../contexts/LocaleContext';
import {SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  const {messages} = useLocale();
  const {education, experience, sectionEducation, sectionSkills, sectionSkillsIntro, sectionWork} = messages.resume;

  return (
    <Section className="bg-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y-2 divide-neutral-300">
        <ResumeSection title={sectionEducation}>
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={sectionWork}>
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={sectionSkills}>
          <p className="pb-8">{sectionSkillsIntro}</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {messages.skills.map((skillGroup, index) => (
              <SkillGroup key={`${skillGroup.name}-${index}`} skillGroup={skillGroup} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
