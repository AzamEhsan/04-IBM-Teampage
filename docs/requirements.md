# Team Page & Login Restyling

**Requirements | Team 04 | Sprint 1**

| | | | |
|---|---|---|---|
| **Author** | Sahil (Business Analyst) | **Sprint** | Sprint 1 |
| **Audience** | UX, PM, Developers | **Status** | Ready for review |

---

## 1. Purpose

This document sets out what the team page needs to contain and what the login restyling work covers. I have written this such that UX can start on designs without needing to ask what data is available, and so developers know exactly which parts of the login page they are allowed to touch.

There are two pieces of work in this sprint:

- Team page: a new page showing the team's name and the five members of Team 04.
- Login page: a visual refresh only. No behaviour changes.

---

## 2. Scope

### In scope

- Built on the existing RMIT Garage boilerplate. No new frameworks or UI component libraries.
- Building the team page and its member cards.
- Team member content stored in code (`src/data/team.ts`). No database or CMS.
- Adding a sidebar navigation link to the team page, labelled "Team info".
- Restyling the login page: colours, spacing, typography, buttons, input styling, layout and responsive behaviour.

### Out of scope (not allowed)

- Any change to authentication logic, Firebase Auth calls or session handling.
- Redirect behaviour after a successful or failed login.
- Adding, removing or renaming login form fields.
- Password reset, sign-up or "remember me" flows.
- Admin screens or any way to edit team members from the UI.

---

## 3. Team page content fields

Each member card shows four fields. The table below gives the rules for each one.

| Field | Type | Required | Validation rule | Display rule |
|---|---|---|---|---|
| Name | Text | Yes | 2 to 40 characters. Letters, spaces, hyphens and apostrophes only. | Shown in full as the card heading. Wraps to a maximum of two lines. |
| Photo | Image | Yes | A real photo of the member, supplied by them. JPG, PNG or WebP. Square, minimum 200x200px. Under 300KB. Stored in `/public/team/`. | Displayed as a circle or rounded square, cropped from the centre. Falls back to initials if the file is missing or fails to load. |
| Role | Text | Yes | 2 to 30 characters. Must match one of the agreed team roles. | Shown directly under the name in a smaller, lighter style. Single line. |
| Blurb | Text | Yes | Maximum 150 characters. Plain text, no HTML or line breaks. | Shown under the role. Up to three lines, then truncated with an ellipsis. |

### Page heading

- The page shows the team name as its main heading, above the member cards.
- Value: "Team 04". Stored in `src/data/team.ts` alongside the member list, not hardcoded in the page component.
- Maximum 30 characters. Plain text, single line.
- An optional one-line subheading may sit under it, up to 80 characters. If it is empty, the heading sits directly above the cards with no gap left behind.

### Layout

- Exactly five cards. All cards are the same height regardless of blurb length.
- Desktop: three cards per row, the remaining two centred underneath.
- Tablet: two per row. Mobile: one per row, full width.
- Cards are display only. They are not clickable and do not link anywhere.

### Photos

We are using real photos of each team member, not placeholder avatars. Everyone supplies their own photo to Dev. The initials fallback in section 5 still needs designing, as cover for a photo arriving late or a file path being wrong.

### Navigation

- The team page is linked from the sidebar navigation.
- The sidebar label is "Team info".
- The link uses the same styling and active state as the existing sidebar items.

---

## 4. Login page: styling only

**The login page already works. This sprint changes how it looks, not what it does.**

### What can change

- Colours, background, borders and shadows.
- Typography: font sizes, weights, heading and label styles.
- Spacing, alignment and overall page layout.
- Button and input field appearance, including hover, focus and disabled states.
- The visual treatment of error and loading messages, but not their wording or when they appear.
- Responsive behaviour across mobile, tablet and desktop.

### What must not change

- Existing auth logic and any Firebase Auth calls.
- Session behaviour, including how a session is created, stored or expired.
- Where the user is sent after logging in or after a failed attempt.
- Form field names, IDs and the order fields are submitted in.
- Client-side validation rules and the conditions that trigger each error.
- The number of form fields on the page.

*If a design change would need any of the above to be modified, raise it with the PM before starting rather than changing it.*

---

## 5. Edge cases

These need a designed state, not just a code fallback. UX should provide a treatment for each.

| Case | What happens | Expected handling |
|---|---|---|
| Photo fails to load | The file path is wrong or the image is broken. | Show an initials avatar using the first letters of the first and last name, on a neutral background. Same size and shape as a real photo. No broken image icon and no layout shift. |
| Photo not square | Image is portrait or landscape. | Centre crop to a square. Do not stretch or squash the image. |
| Blurb over 150 characters | Content is longer than the agreed limit. | Truncate at 150 characters and add an ellipsis. Card height stays the same. |
| Long name | Name is close to the 40 character limit. | Wrap to a second line. If it still does not fit, truncate with an ellipsis. |
| Long role | Role label is close to the 30 character limit. | Keep to one line and truncate with an ellipsis. Do not shrink the font. |
| Slow image loading | Photos load after the page. | Reserve the image space so the card does not jump once photos appear. |

---

## 6. Acceptance criteria

The work is done when all of the following are true.

- The team page shows the team name as a heading above the cards.
- The team page shows five cards, each with a name, photo, role and blurb.
- All content comes from `src/data/team.ts`. Nothing is fetched from a database.
- Every edge case in section 5 has a designed state and behaves as described.
- Cards are equal height and the grid works on mobile, tablet and desktop.
- All five cards use a real photo. No placeholder avatars are left in the final build.
- A sidebar link labelled "Team info" opens the team page and shows an active state while on it.
- The login page looks new but logs in exactly as it did before, with the same errors and the same redirect.
- No file relating to auth logic or session handling has been modified.
- Text has enough colour contrast to be readable on both pages.

---

## 7. What UX needs to deliver

- A page heading treatment for the team name, including how it sits above the card grid at each screen width.
- Team page mockups at mobile, tablet and desktop widths.
- A single member card component with all four fields.
- Card states covering: a broken photo, a truncated blurb, a long name and a long role.
- Login page mockup with button and input styling, including hover, focus, disabled and error states.
- A colour palette for the project. There is no existing one, so UX defines it this sprint and it applies to both pages.
- Colours, fonts and spacing values written out, so developers do not have to guess from the image.

---

*Any questions on the above, message me on the team chat.*