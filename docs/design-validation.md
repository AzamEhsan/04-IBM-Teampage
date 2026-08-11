# Design Validation

**Team page & login restyling | Team 04 | Sprint 1**

| | |
|---|---|
| **Validated by** | Sahil Chetankumar Patel (Business Analyst) |
| **Designs by** | Jessica Giacometti (UX Designer) |
| **Date** | 8 August 2026 |
| **Outcome** | Approved |

---

## 1. What was checked

The UX mockups and the accompanying design document were checked against `requirements.md`. The purpose was to confirm three things before development starts:

- Every field listed in the requirements is represented in the design
- The login work stays within styling only
- Each documented edge case has a visible design treatment

**Artifacts reviewed**

- Team page mockups (desktop, tablet, mobile)
- Login page mockups (default and error state)
- Sidebar mockup (added during validation)
- UX deliverables document covering typography, colour, spacing and design reasoning

---

## 2. Team page fields

| Field | Present | Notes |
|---|---|---|
| Team name heading | Yes | Shown above the card grid |
| Name | Yes | Card heading, wraps to two lines where needed |
| Photo | Yes | Square, rounded corners, consistent sizing |
| Role | Yes | Sits under the name, single line, lighter treatment |
| Blurb | Yes | Under the role, truncates at the agreed limit |

All five member cards are present. Card dimensions are fixed so heights stay equal regardless of blurb length.

---

## 3. Layout

| Requirement | Design | Result |
|---|---|---|
| Desktop: three per row, remaining two centred | Matches | Pass |
| Tablet: two per row | Matches | Pass |
| Mobile: one per row, full width | Matches | Pass |
| Cards equal height | Fixed card dimensions specified | Pass |
| Cards not clickable | No link or hover affordance shown | Pass |

---

## 4. Edge cases

| Case | Design treatment | Result |
|---|---|---|
| Photo fails to load | Initials avatar on a neutral background, same size and shape as a real photo | Pass |
| Photo not square | Square crop specified | Pass |
| Blurb over the character limit | Truncated with an ellipsis, card height unchanged | Pass |
| Long name | Wraps to a second line | Pass |
| Long role | Single line | Pass |
| Slow image loading | Fixed image dimensions reserve the space | Pass |

---

## 5. Login page scope

The login work was confirmed as styling only.

**Changed** — colours, typography, spacing, layout, button and input styling, hover and focus states, error state styling, responsive behaviour.

**Unchanged** — auth logic, Firebase Auth calls, session behaviour, post-login redirect, form field names and IDs, number of form fields, the Google sign-in option and the account creation link.

No design element required a change to authentication or session handling.

---

## 6. Gap raised and resolved

**Gap — no sidebar design**

Both sets of mockups showed the navigation menu closed, so there was no design for the sidebar itself. The requirements specify that the team page is linked from the sidebar under the label "Team info", with the same styling and active state as existing sidebar items. Without a design, the active state would have been left to the developer to invent.

Raised with UX on 8 August 2026.

**Resolution**

UX supplied an additional mockup showing the sidebar open, including the "Team info" link and its active state, and updated the design document to match. Re-checked and confirmed as covering the requirement.

---

## 7. Outcome

**Approved.** The designs match the requirements and are ready for development.

**For the development team**

- Build to the Figma file as supplied
- Login page is styling only — do not modify auth logic, session behaviour or existing form validation
- The sidebar link label is "Team info", with the active state shown in the sidebar mockup
- Colour, typography and spacing values are in the UX deliverables document

No open questions from the BA side.

---

## Related documents

- `requirements.md` — team page and login restyling requirements
- UX deliverables document — design specifications and reasoning
