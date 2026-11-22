# AGENTS.md — Personal Portfolio

## 1. Project Context

This repository contains the personal portfolio of **Shelton Maurício**, a Software Developer and fourth-year Computer Engineering student at Universidade Eduardo Mondlane (UEM).

The portfolio must communicate professional identity, technical capabilities, engineering approach and selected projects.

It is not a generic developer template, SaaS landing page or dashboard. It should feel like a carefully designed personal engineering portfolio.

### Sources of truth

When making decisions about content or implementation, use this priority:

1. **This file:** permanent project direction, design principles and content guidelines.
2. **Current repository:** actual architecture, dependencies, components, assets and implementation constraints.
3. **CV and verified project documentation:** source of truth for professional and technical information.
4. **Existing portfolio content:** may be outdated; do not assume it is accurate without verification.

Never invent professional experience, project results, performance metrics, responsibilities, technologies or achievements.

---

## 2. Professional Positioning

### Primary identity

**Software Developer | Computer Engineering Student**

Software development is the central professional identity. Systems, networking and infrastructure are complementary technical interests and differentiators, not competing primary titles.

The portfolio should communicate someone who:

- Builds web and desktop applications.
- Develops backend services and REST APIs.
- Works with relational databases and data modelling.
- Understands client-server communication and system integration.
- Explores operating systems, networking and infrastructure.
- Is continuously developing practical engineering skills.

### Communication direction

The portfolio should present a technically curious developer focused on building applications and understanding the systems behind them.

Suggested positioning:

> Engineering software. Understanding systems.

Suggested supporting message:

> I build applications, work with backend systems and explore the technologies connecting software, data and infrastructure.

These are positioning references, not mandatory copy. Improve the wording when necessary without changing its meaning.

### Content principles

- Be technically precise and professionally credible.
- Avoid exaggerated seniority or claims of expertise.
- Distinguish academic projects, personal projects, hackathons and professional employment.
- Prefer concrete descriptions of implementation over generic claims.
- Avoid buzzwords and unnecessary self-promotion.
- Write in natural, clear English unless the existing project establishes another language convention.

---

## 3. Design References and Direction

Use the following references for design analysis:

- Framer: https://www.framer.com/
- Linear: https://linear.app/

Do not reproduce either website. Extract relevant design principles and adapt them to a personal portfolio.

### Framer-inspired elements

- Strong visual composition.
- Expressive typography.
- Editorial layouts.
- Creative use of colour and spacing.
- Visual storytelling through project presentation.
- Distinctive section composition.

### Linear-inspired elements

- Interface precision.
- Consistent spacing and alignment.
- Restrained colour usage.
- Clear hierarchy.
- Subtle borders and surfaces.
- Refined navigation and interaction states.
- Minimal, purposeful interface elements.

### Overall direction

Create a dark-first, polished, technical and visually distinctive portfolio.

The result should balance editorial creativity with interface discipline.

Avoid:
- Generic AI-generated portfolio aesthetics.
- Excessive gradients, glow effects and glassmorphism.
- Unnecessary decorative elements.
- Repetitive card layouts.
- Fake terminal interfaces or fabricated activity indicators.
- Arbitrary counters, statistics or availability statuses.
- Excessive animations and visual effects.

Every visual element must have a clear purpose.

---

## 4. Design System

Establish reusable design tokens. Avoid scattered, duplicated or arbitrary values.

### 4.1 Colour palette

Use these values as the initial design foundation. Adjustments are acceptable when justified by visual consistency, contrast or usability.

| Token | Value | Purpose |
|---|---|---|
| Background | `#111113` | Main page background |
| Surface | `#19191C` | Primary surface |
| Elevated | `#222226` | Elevated elements |
| Hover | `#2B2A30` | Hover surfaces |
| Border subtle | `#2B2A30` | Subtle separation |
| Border default | `#34333A` | Standard borders |
| Border strong | `#3A3941` | Stronger separation |
| Text primary | `#F2F0F3` | Main content |
| Text secondary | `#A1A1A8` | Supporting content |
| Text tertiary | `#77777F` | Metadata and low emphasis |
| Accent | `#5E6AD2` | Primary accent |
| Accent hover | `#7984E8` | Accent hover state |
| Accent active | `#4853B4` | Accent active state |
| Accent subtle | `#25243C` | Subtle accent surfaces |
| Accent foreground | `#FFFFFF` | Text on accent |

Semantic colours:

- Success: `#81C99E`
- Warning: `#D6B46C`
- Error: `#D88793`
- Information: `#86B7E2`

Do not use accent colours indiscriminately. Preserve a predominantly neutral interface.

### 4.2 Typography

Prefer Geist when it is already available or can be integrated without unnecessary complexity. Otherwise, use Inter.

Suggested desktop scale:

| Role | Size |
|---|---:|
| Display | 64px |
| H1 | 48px |
| H2 | 36px |
| H3 | 24px |
| H4 | 20px |
| Body large | 18px |
| Body | 16px |
| Small | 14px |
| Caption | 12px |
| Overline | 11px |

Adapt the scale for smaller screens.

Use monospace typography sparingly for technical metadata, dates, labels and code-related details.

Typography must establish hierarchy through size, weight, line height and spacing—not through excessive colour variation.

### 4.3 Spacing

Use a consistent spacing scale:

`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`

Avoid arbitrary spacing values unless a specific layout requires them.

### 4.4 Border radius

Use a restrained radius scale:

`6, 10, 16, 20, 24px` and `9999px` for pill-shaped elements.

Buttons may use fully rounded shapes. Do not make every container excessively rounded.

### 4.5 Layout

Use a responsive grid:

- Desktop: 12 columns.
- Tablet: 8 columns.
- Mobile: 4 columns.

Suggested maximum widths:

- Standard content: 1200px.
- Wide content: 1440px.

Suggested horizontal margins:

- Desktop: 48px.
- Tablet: 32px.
- Mobile: 20px.

Suggested gutters:

- Desktop: 24px.
- Tablet: 20px.
- Mobile: 16px.

Use editorial and asymmetric composition where appropriate. Do not force all sections into identical grids or cards.

---

## 5. Homepage Structure

The homepage should tell a coherent professional story.

Recommended section order:

1. Navigation
2. Hero / Introduction
3. Selected Projects
4. GitHub Activity
5. About
6. Technical Expertise
7. Education and Certifications
8. Contact
9. Footer

This is the recommended narrative, not a rigid layout prescription. Adjust the composition when it improves the user experience.
GitHub Activity is planned as a complement to the project showcase and professional identity. It must not dominate the homepage or resemble an external dashboard.

### Navigation

- Keep navigation clear and minimal.
- Provide access to the main sections and relevant project pages.
- Ensure keyboard accessibility and mobile usability.
- Avoid unnecessary navigation items.

### Hero

The hero must communicate, within a few seconds:

- Who the developer is.
- What kind of software development they focus on.
- What makes their technical interests distinctive.
- Where visitors can explore projects or make contact.

Use the positioning in Section 2 as a reference.

Avoid generic introductions such as "Welcome to my portfolio" or unsupported claims such as "expert developer".

### Selected Projects

Projects are central evidence of technical ability. Give them strong visual and editorial treatment.

Do not make every project presentation identical. Vary composition when appropriate, while maintaining a consistent design language.

### GitHub Activity

GitHub Activity is a planned homepage section for verified development activity. Its data and privacy requirements are defined in Section 18. Present it as supporting evidence of the developer's work, alongside selected projects, rather than as a dashboard or the focus of the homepage.

### About

The About section should complement the hero and project descriptions rather than repeat the CV.

Focus on engineering interests, working approach, curiosity and technical development.

### Technical Expertise

Organise skills into meaningful categories instead of displaying a large wall of badges.

### Education and Certifications

Present academic background and verified certifications clearly.

Do not fabricate an employment timeline or imply that academic projects were professional employment.

### Contact

Make contact information accessible and provide clear links to relevant professional profiles.

---

## 6. Verified Professional Content

Use the following information as the initial content reference. Verify details against the CV and repository before publishing.

### Education

**Universidade Eduardo Mondlane (UEM)**

Licenciatura em Engenharia Informática  
2022–Present · Fourth year

### Training

**Full-Stack Developer — B7Web**

Training covering web and mobile development, React, Node.js, TypeScript, APIs, databases and Docker.

### Certifications

**X-Road — 2024**

- X-Road Fundamentals
- Central Server Administrator
- Service Developer

### Technical Skills

Organise skills into appropriate groups:

**Programming**
- JavaScript
- TypeScript
- Python
- Java

**Frontend**
- React
- Next.js
- HTML5
- CSS3
- Tailwind CSS

**Mobile**
- React Native
- Expo

**Backend and APIs**
- Node.js
- Express
- REST APIs
- Prisma
- Zod

**Databases**
- PostgreSQL
- MySQL
- SQLite
- SQL
- Relational data modelling

**Communication and Integration**
- TCP Sockets
- WebSocket
- CORBA

**Systems and Networking**
- Linux
- Windows Server
- Active Directory
- Cisco networking
- Bash

**Tools**
- Docker
- Git
- GitHub
- Maven
- Postman
- Insomnia

Do not imply equal proficiency across all technologies. Avoid arbitrary skill percentages and progress bars.

### Languages

- Portuguese — Fluent
- English — Intermediate

---

## 7. Verified Projects

The following projects are the initial portfolio selection. Verify implementation details against their repositories before writing detailed technical claims.

### 7.1 BoraPassar!

**Category:** Full-stack web application  
**Description:** Educational platform for exams and public notices.

Verified scope:
- Frontend and backend development.
- REST API.
- Authentication and role-based access control.
- Input validation.
- Content management for documents and images.
- Search, sorting and pagination.
- Relational database integration using Prisma.

Technologies:
- Next.js
- React
- Zustand
- Node.js
- Express
- TypeScript
- Prisma
- Zod

Position this as a primary full-stack project because it demonstrates work across the application stack.

### 7.2 Lava Já

**Category:** Digital car wash platform  
**Context:** Moza xLab × UEM Hackathon, October 2026. Third-place team.

Verified scope:
- Participation in product and technical decisions.
- Team coordination and activity organisation.
- Contribution to feature definition and implementation.
- Work on business and technical considerations.

Technologies:
- Next.js
- React
- TypeScript
- NestJS
- Prisma
- PostgreSQL

Present it as a hackathon project and product concept. Do not claim commercial deployment, adoption or scalability without evidence.

### 7.3 SocketHub

**Category:** Real-time communication application

Verified scope:
- Client-server communication using TCP Sockets.
- Definition of communication rules and message formats.
- WebSocket gateway.
- JSON validation.
- SQLite persistence.
- Failure detection and reconnection.

Technologies:
- Node.js
- TypeScript
- React
- Electron
- TCP Sockets
- WebSocket
- SQLite
- Zod

Emphasise its communication architecture and technical depth.

### 7.4 MediSync

**Category:** Distributed hospital appointment and queue management system

Verified scope:
- Java and Python client-server communication through CORBA.
- Patient, appointment and queue management.
- SQLite persistence.

Technologies:
- Java
- JacORB
- SQLite
- Maven
- Python
- PySide6
- OmniORB
- Docker

Emphasise distributed systems and interoperability.

### 7.5 EduAcademy

**Category:** Educational landing page

Verified scope:
- Responsive interface.
- Educational programme presentation.
- Reusable UI components.

Technologies:
- React
- Next.js
- TypeScript
- Tailwind CSS

Use this project to demonstrate frontend implementation and interface development.

### Project presentation rules

Suggested initial order:

1. BoraPassar!
2. Lava Já
3. SocketHub
4. MediSync
5. EduAcademy

This order is a narrative choice, not a ranking of technical quality.

For each project:
- Explain what it is and what problem or need motivated it, when verified.
- Describe actual implementation and technical decisions.
- Identify the technologies used.
- Include genuine screenshots or diagrams when available.
- Link to the repository and live demo only when the links are valid.
- Distinguish individual contributions from team contributions.
- Avoid fabricated challenges, results, metrics or user feedback.

Do not use generic placeholder screenshots as if they were real product interfaces.

---

## 8. Project Detail Pages

Create dedicated project pages when they add meaningful technical context.

A project page may include:

1. Overview
2. Context and motivation
3. Objectives
4. Architecture
5. Technical approach
6. Implementation details
7. Verified technical challenges
8. Technologies
9. Screenshots or diagrams
10. Repository and demo links

Do not force every project to have all sections. The depth of each page should reflect the actual work and available evidence.

Prioritise clear technical explanations over unnecessary length.

---

## 9. Component and CSS Architecture

Before creating new components or restructuring styles:

1. Inspect the current repository structure.
2. Identify existing reusable components.
3. Understand the current styling strategy.
4. Reuse existing patterns when they are appropriate.
5. Refactor only when there is a concrete benefit.

### Component principles

- Prefer small, reusable components with clear responsibilities.
- Avoid premature abstraction.
- Avoid creating components for trivial one-off markup without a clear reason.
- Keep content, presentation and business logic appropriately separated.
- Use semantic HTML.
- Keep component APIs simple and predictable.
- Avoid unnecessary dependencies.

### Styling principles

- Use centralised design tokens.
- Keep global styles focused on global concerns.
- Avoid duplicated CSS rules and arbitrary values.
- Use responsive styles consistently.
- Prefer maintainable CSS over unnecessarily complex utility combinations.
- Preserve the existing framework and styling conventions unless a change is justified.

Do not rewrite the entire architecture merely to achieve a preferred folder structure.

---

## 10. Responsive Design

The portfolio must work across:

- Large desktop screens.
- Standard desktop and laptop screens.
- Tablets.
- Mobile devices.

Requirements:

- No horizontal overflow.
- Appropriate typography scaling.
- Consistent spacing and alignment.
- Functional navigation on mobile.
- Readable project descriptions.
- Adapted image and media composition.
- Accessible interactive elements.
- No reliance on hover for essential information or actions.

Do not treat mobile as a compressed desktop layout. Reconsider composition where necessary.

---

## 11. Interaction and Motion

Interactions should feel deliberate, responsive and consistent.

Suggested transition durations:

- Fast: 100ms
- Standard: 150ms
- Moderate: 200ms
- Emphasis: 250ms

Use motion for feedback and orientation, not decoration.

Requirements:
- Clear hover, focus, active and disabled states.
- Subtle transitions.
- Consistent interaction patterns.
- Functional links and buttons.
- Respect `prefers-reduced-motion`.

Avoid:
- Scroll hijacking.
- Heavy parallax.
- Excessive entrance animations.
- Gratuitous scaling and transforms.
- Animations that delay access to content.

---

## 12. Accessibility

Accessibility is a requirement, not a final visual enhancement.

Ensure:
- Semantic HTML.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Sufficient colour contrast.
- Accessible form labels.
- Descriptive link text.
- Appropriate alternative text for meaningful images.
- Reduced-motion support.
- Interactive elements have clear accessible names.

Do not use colour as the only way to communicate meaning.

---

## 13. Performance

The portfolio should remain fast and lightweight.

Priorities:
- Optimise images and media.
- Avoid unnecessary client-side JavaScript.
- Prefer server components when appropriate in Next.js.
- Use client components only when interaction or browser APIs require them.
- Avoid unnecessary dependencies.
- Prevent layout shifts.
- Use appropriate font loading strategies.
- Avoid excessive animations and expensive rendering effects.

Do not sacrifice performance for purely decorative effects.

---

## 14. Engineering Constraints

- Inspect before modifying.
- Preserve existing functionality unless a change is explicitly required.
- Do not replace the framework or rebuild the project unnecessarily.
- Do not introduce dependencies without justification.
- Do not make unrelated changes.
- Do not fabricate content or project evidence.
- Follow existing naming and architectural conventions where appropriate.
- Keep changes focused and reviewable.
- Do not delete assets or existing functionality without verifying their purpose.
- Do not assume that a visually similar implementation is functionally equivalent.

When a requirement is ambiguous and could lead to a major architectural or destructive change, ask for clarification instead of guessing.

---

## 15. Implementation Workflow

Work incrementally. Do not attempt to redesign the entire portfolio in one unreviewed change.

Recommended phases:

### Phase 1 — Audit and Design Foundation
- Inspect the existing application.
- Review routes, components, assets and dependencies.
- Identify outdated content and inconsistencies.
- Establish design tokens and global visual foundations.
- Report important findings before major structural changes.

### Phase 2 — Homepage
- Implement the homepage narrative.
- Refine navigation and hero.
- Build the selected projects presentation.
- Implement About, expertise, education, contact and footer.
- Preserve the established design system.

### Phase 3 — Project Presentation
- Improve project previews.
- Implement project detail pages where justified.
- Verify descriptions, technologies and links.
- Use genuine project assets.

### Phase 4 — GitHub Activity Integration
- Implement the scheduled and manually triggered statistics collection described in Section 18.
- Validate aggregation, anonymisation, generated JSON and workflow independence from deployment.
- Add the frontend data-access layer and presentation without making the static portfolio depend on GitHub availability.

### Phase 5 — Refinement
- Validate responsive behaviour.
- Review interaction states.
- Check accessibility.
- Optimise performance.
- Remove inconsistencies and unnecessary code.

At the end of each phase, report:
- What was inspected.
- What was changed.
- Important decisions.
- Validation performed.
- Remaining issues.

Do not claim that a test passed unless it was actually executed.

---

## 16. Acceptance Criteria

The portfolio is considered aligned with this specification when:

- Professional identity is clear and credible.
- Software development is the primary positioning.
- The visual direction balances Framer-inspired composition with Linear-inspired precision.
- The design is consistent and uses reusable tokens.
- Projects are presented with accurate technical information.
- The layout is responsive.
- Navigation and interactions work correctly.
- Accessibility has been considered.
- Performance has not been unnecessarily compromised.
- No fabricated experience, results or project evidence is present.
- GitHub Activity is integrated consistently with the portfolio design.
- Private contribution information is published only in aggregated, anonymised form.
- No private repository identifiers or metadata are exposed.
- No credentials are included in public artifacts.
- The integration remains compatible with static export and GitHub Pages.
- The portfolio remains functional when GitHub statistics cannot be loaded.
- The implementation remains maintainable and consistent with the existing architecture.

---

## 17. Final Instruction

Treat this document as the permanent project guideline.

For each new task, inspect the relevant parts of the repository, follow these principles and make only the changes required by the task.

Use engineering judgement rather than applying the specification mechanically. If an existing implementation is better than a proposed change, preserve it and explain why.

The objective is not simply to make the portfolio visually attractive. It is to build a coherent, credible and technically sound representation of the developer and their work.

---

## 18. GitHub Activity Integration

### Objective

Display real development activity from GitHub, including public activity and authorised private contributions only in aggregated and anonymised form.

The portfolio continues to use GitHub Pages and must not introduce a permanent backend server.

### Architecture

Use this data flow:

1. **GitHub API:** source of public data and authorised contribution statistics.
2. **GitHub Actions:** automated scheduled collection, preferably once per day, with support for manual execution.
3. **Collection script:** fetches, processes, aggregates and anonymises the data.
4. **Static JSON:** publishes selected results to `public/data/github-stats.json`.
5. **Next.js:** consumes the static JSON and renders the information.
6. **GitHub Pages:** continues hosting the static portfolio.

The statistics workflow and deployment workflow must remain independent. Maintain Next.js static export (`output: 'export'`) and do not introduce a permanent backend.

### Planned data

The integration may display the following, only when the data can be retrieved and verified.

**General statistics**
- Total contributions over the last year.
- Daily contribution history.
- Aggregated public and private contributions.
- Number of public repositories.
- Total public repository stars.
- Programming language distribution.

**Activity**
- Contribution history.
- Recent public commits and activity.
- Contribution distribution over time.

**Public repositories**
- Selected public repositories.
- Verified descriptions.
- Primary programming language.
- Stars and forks.
- Direct repository links.

Never fabricate statistics or activity. Do not display a metric that cannot be retrieved and verified.

### Privacy and security

- Include private contributions only as aggregated and anonymised statistics.
- Never publish private repository names or URLs.
- Never publish private commit messages.
- Never publish private source code, branches or identifiable repository metadata.
- Never expose tokens or credentials in frontend code, static JSON, logs or public artifacts.
- Store `GH_PRIVATE_TOKEN` exclusively in GitHub Actions Secrets.
- Use the minimum API permissions required.
- Perform anonymisation before generating the public JSON.
- Treat the generated JSON as entirely public.

Enable the GitHub profile setting `Include private contributions on my profile` where appropriate, but do not assume this setting alone grants API access to every required field.

During implementation, verify the actual GitHub GraphQL API fields, permissions and availability of contribution data.

### Technical structure

Use this as an initial reference and adapt it to existing repository conventions when implementation begins:

```text
portfolio/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── github-stats.yml
├── public/
│   └── data/
│       └── github-stats.json
├── scripts/
│   └── github/
│       └── fetch-stats.ts
└── src/
    └── ...
```

This is a proposed structure, not a requirement to create every file immediately.

- `deploy.yml` builds and deploys the static portfolio.
- `github-stats.yml` schedules and manually triggers statistics collection.
- `fetch-stats.ts` retrieves, aggregates, validates and anonymises GitHub data.
- `github-stats.json` contains only the public, sanitised data required by the frontend.

### Frontend requirements

- Keep data collection independent from presentation.
- Do not call authenticated GitHub APIs directly from the browser.
- Consume the static JSON through a dedicated data-access layer.
- Keep UI components independent of the GitHub API response structure.
- Support loading, unavailable and error states where appropriate.
- Ensure missing or outdated statistics never break the rest of the portfolio.
- Use the static JSON as a cacheable data source.
- Display only verified public repository information.
- Integrate the visual presentation with the existing design system.
- Avoid generic dashboard layouts and excessive statistic cards.

### Planned visual elements

The section may include:

- A contribution graph similar to GitHub's contribution calendar.
- Total contribution statistics.
- Public/private contribution aggregation.
- Programming language distribution.
- Public repositories in focus.
- Recent public activity.

Decide the final composition during homepage implementation. Do not force every planned metric into the interface.

### Implementation order

1. Enable `Include private contributions on my profile` where appropriate.
2. Define the minimum required token permissions.
3. Configure `GH_PRIVATE_TOKEN` in GitHub Actions Secrets.
4. Implement the collection script.
5. Implement the scheduled and manually triggered workflow.
6. Validate the generated JSON and privacy filtering.
7. Integrate the data-access layer and frontend presentation.
8. Test static export and GitHub Pages deployment.
9. Verify the portfolio remains functional when statistics are unavailable.
