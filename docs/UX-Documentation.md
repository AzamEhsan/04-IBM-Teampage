# Team Page & Login Restyling

**UX Deliverables | Team 04 | Sprint 1**

| | | | |
|---|---|---|---|
| **Author** | Jessica Giacometti (UX)| **Sprint** | Sprint 1 |
| **Audience** | BA, PM, Developers | **Status** | Passed Review |

---

## 1. Purpose

This document outlines the stylistic choices for the mockups for the Team page and Login pages, where the design choices adhere to the BA's given requirements and allow the developers to know exact information for the restyling. For convenience, all measurements are in pixels (px) as used in Figma. Additionally, the reasoning behind design choices is explained to ensure adherence to certain systems and standards.

---

## 2. Team Page

### Typography

**Fonts**

| Font | Uses |
|---|---|
| IBM Plex Sans | Used for the majority of all text: site name, member names, member roles, member blurbs |
| IBM Plex Mono | Used only for the Team Name heading "04-IBM Team" |

**Weights**

| Weight | Uses |
|---|---|
| Bold | Used for the site name, team page heading and roles (for contrast purposes) |
| SemiBold | Used for the member names |
| Medium | Used for the blurb text |

**Text sizes**

| Size | Uses |
|---|---|
| 48 | The largest text size, reserved for the website name |
| 36 | Used for the team page subheading |
| 24 | Used for all member names |
| 18 | The smallest size, used for both the blurb text and the role name |

### Colour palette

| Colour | Uses |
|---|---|
| 0080F8 | Main accent colour (used for subheadings such as roles, and as an accent for the team's name underline) |
| B1D5FF | Secondary accent colour (used for the title background + broken images background) |
| FFFFFF | Neutral background colour |
| 000000 | Neutral text colour |

### Padding and gaps

- In the member cards, the gaps between the names, roles and blurbs are 32, whilst the side padding is 24.

### Card information

- All cards are the same width and height: 363 x 676.
- The pictures are sized at 363 x 363 to fit in the rounded square. The radius for the corners is 16. Placeholder images created using Figma's AI have been used at this stage to allow visualisation.
- All cards have a drop shadow to differentiate them from the background.

### Edge case designs

| Edge case | Design choice |
|---|---|
| Broken photo | Illustrated in Love Kumar's card, simply with the second accent colour background and initials "LK" |
| Square cards and photos | All photos are squares, rounded with a 16 corner radius |
| Long role names | Roles are kept to one line and not shrunk |
| Long member names | Illustrated in Rowena Marie Cyrelle Ferareza's card and wraps to a second line as suggested |
| Long blurbs | Set to 150 characters as placeholders for this edge case and cut off |

---

## 3. Login Page

### Typography

**Fonts**

| Font | Uses |
|---|---|
| IBM Plex Sans | Used for the majority of all text: site name, all input (email and password) and submission fields (sign in and Google sign in) |
| IBM Plex Mono | Used only for the login page heading "Login" |

**Weights**

| Weight | Uses |
|---|---|
| Bold | Used for the site name, login page heading, enter credentials prompt and the later half of the create an account prompt |
| SemiBold | Used for the input fields email and password |
| Medium | Used for the sample texts in the input fields, the inside text for the submission buttons, and the first half of the create an account prompt |

**Text sizes**

| Size | Uses |
|---|---|
| 48 | The largest text size, reserved for the website name |
| 36 | Used for the login page subheading |
| 24 | Used for the field names email and password, and the enter credentials prompt |
| 18 | The smallest size, used for the email and password input fields and the optional "OR" to sign in using Google |

### Padding and gaps

- Padding and gaps on the login page are all 24.

### Colour palette

| Colour | Uses |
|---|---|
| 0080F8 | Main accent colour (used to direct attention such as to create an account, to outline focus states, and to create spaces between information) |
| B1D5FF | Secondary accent colour (used only for the title background) |
| FFFFFF | Neutral background colour → main page background + default textbox backgrounds |
| 000000 | Neutral text colour |
| EFEFEF | Neutral background colour for submission fields |
| 7C7C7C | Outlines the textbox and submission fields in default states |

### States

| State | Design choice |
|---|---|
| Default | As seen in the mockups, the default textbox has a background of FFFFFF, and an outline of 7C7C7C at weight 2. The sample text before entering anything is also 7C7C7C. |
| Disabled | When a submission box is disabled (Sign in), the outline should turn 000000 at weight 2 and should also have a drop shadow. A disabled submission box should appear until both Email and Password fields are entered. |
| Hover | When a submission box is hovered over (Sign in or Continue with Google), the outline should turn 000000 at weight 2 and should also have a drop shadow. |
| Focused | When a textbox is focused, the background remains FFFFFF and the outline turns 0080F8 at weight 3. |
| Error | When a textbox has an error after attempting submission, the textbox's outline will be FF0000, and a message "* This is a required field" will appear next to the field in the same colour. |

---

## 4. Title Bar

### Title bar design choices

| Design choice | Use |
|---|---|
| Colour | The title bar's background should be B1D5FF, the secondary accent colour |
| Height | The title bar's height is 100 in both the desktop and tablet versions, and 80 on phone |
| Typography | IBM Plex Sans in Bold at size 48 |
| Logged in user email display | IBM Plex Sans in Medium at size 20. This only displays if the user has logged in, which would have been prompted before. |

---

## 5. Navigation Sidebar

### Sidebar design choices

| Design choice | Use |
|---|---|
| Colour | The sidebar's background should be FFFFFF, except for the active page which should be B1D5FF, the secondary accent colour |
| Width | The sidebar's width is exactly 240, and goes to the bottom of the page |
| Typography | IBM Plex Sans in SemiBold at size 24 |
| Padding | 16 top and bottom gaps (with the exception of the first option "Dashboard," which was 24 to differentiate from the title bar), side padding of 24, and the same gap between the icons and the page name |

---

## 6. Design Choice Reasoning

### 8 point grid system

With padding choices, the decision to utilise 24 and 32 was to adhere to the 8 point grid system. This was to ensure consistency across cards, input and submission fields, and overall cleanliness of the design.

### AA contrast standards (WCAG)

This standard entails that text written should contrast its background so that it is easily readable by those with low vision, and ensures accessibility. The minimum requirement for normal text is 4.5:1, which is achieved wherever black text is written over a white background, with a contrast ratio of 21:1. For bold text the minimum requirement is 3:1, which is achieved even when 0080F8 is bold against a white background with a ratio of 3.85:1 on the login page, as well as the error state FF0000 which has a ratio of 3.99:1.

### Information hierarchy

By utilising different size and weight choices, the bold, semibold, and medium weights create a clear hierarchy of information to direct the user's attention.

---

*Any questions on the above, message me on the team chat.*