import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import type { Project } from '../../data/projects';
import { asset } from '../../lib/paths';
import { ClipboardIcon } from './icons';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="project-card">
      {project.image && (
        <div className="project-card-media">
          <img src={asset(project.image)} alt={project.equipment} loading="lazy" />
        </div>
      )}
      <div className="project-card-body">
        <span className="project-type">{project.type}</span>
        <h3>{project.equipment}</h3>
        <dl className="project-spec">
          <div>
            <dt>Scope</dt>
            <dd>{project.scope}</dd>
          </div>
          {project.inspection && (
            <div>
              <dt>Inspection</dt>
              <dd>{project.inspection}</dd>
            </div>
          )}
          {project.workCompleted && (
            <div>
              <dt>Work Completed</dt>
              <dd>{project.workCompleted}</dd>
            </div>
          )}
          {project.result && (
            <div>
              <dt>Result</dt>
              <dd>{project.result}</dd>
            </div>
          )}
        </dl>
      </div>
    </Reveal>
  );
}

/**
 * Shown wherever project cards would go while data/projects.ts is empty.
 * Deliberately honest — no placeholder cards, no invented references.
 */
export function ProjectsPending({ action }: { action?: ReactNode }) {
  return (
    <Reveal className="empty-state">
      <ClipboardIcon />
      <h3>Project references available on request</h3>
      <p>
        GLS supplies equipment-specific project references, including scope of work and the documentation issued, as
        part of a technical enquiry or pre-qualification. Tell us which equipment you are assessing and we will share
        the relevant experience.
      </p>
      {action}
    </Reveal>
  );
}
