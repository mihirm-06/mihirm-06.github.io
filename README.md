# mihirm-06.github.io

This repository contains the personal website of Mihir Mankikar. The website uses Astro and is hosted on Github Pages.

## 1. Contents of the repository

| Folder or file | Contents |
|---|---|
| `src/content/projects/` | One Markdown file for each project |
| `src/data/experience.ts` | The entries of the Experience and Research sections |
| `src/data/gallery.ts` | The list of photos on the Gallery page |
| `src/data/education.ts` | The Education section |
| `src/data/site.ts` | Your name, the typed phrases, and your links |
| `src/assets/covers/` | The images on the project cards |
| `src/assets/gallery/` | The photos for the Gallery page |
| `public/assets/` | The résumé PDF and the site icon |
| `public/research/` | Your posters and papers (PDF) |
| `src/pages/` | The pages. Each file is one URL |
| `src/components/`, `src/layouts/` | The parts that the pages use |
| `src/styles/global.css` | The colors, fonts, and shared styles |
| `.github/workflows/deploy.yml` | The instructions that publish the website |

For most changes, you change only the files in `src/content/`, `src/data/`, and `src/assets/`.

## 2. Start the website on your computer

1. Install Node.js 22.12 or a later version.
2. Open a terminal in the repository folder.
3. Type `npm install`. Do this step only one time.
4. Type `npm run dev`.
5. Open `http://localhost:4321` in a browser.

The page updates when you save a file.

NOTE: Sometimes the page does not update after a change. If this occurs, push Ctrl+C in the terminal. Then type `npm run dev` again.

To make sure that the website has no errors, type `npm run build`. If a file has an error, the build stops and shows the file name.

## 3. Projects

Each project is one Markdown (`.md`) file in `src/content/projects/`. The file name becomes the URL. For example, `hyperion.md` becomes `/projects/hyperion`.

### 3.1 Parts of a project file

A project file has two parts:

- The top part, between the two `---` lines. This part controls the card.
- The bottom part, below the second `---` line. This part is the write-up page.

Example:

```md
---
title: Hyperion
summary: Multi-target tracking system that keeps persistent object identities.
type: [Simulation]
tags: [C++, Eigen, Python]
featured: true
order: 4
cover: hyperion.svg
---

# Hyperion

The text of the write-up starts here.
```

### 3.2 Fields in the top part

| Field | Necessary | What it does |
|---|---|---|
| `title` | Yes | The name on the card and in the browser tab. |
| `summary` | Yes | The one-line description on the card. |
| `type` | Yes | The kind of project, for example `[Game, AI]`. It shows as the small blue label above the title. Write it in square brackets. |
| `tags` | No | The orange tags on the card. Write them in square brackets. |
| `featured` | No | Set to `true` to show the card on the Home page. |
| `order` | No | The position of the card. A higher number comes first. |
| `status` | No | Set to `in progress` to add "· In progress" after the type. |
| `cover` | No | The file name of the card image in `src/assets/covers/`. |

The build stops if a necessary field is missing. The build also stops if you write a field name incorrectly.

### 3.2.1 Filters on the Projects page

The Projects page has two filter boxes: Type and Tags. Each box shows a list of all the values in the project files. You do not add the values manually.

Use the same spelling and capital letters in all files. For example, do not write `ML` in one file and `Machine Learning` in a different file. If you do, the page shows two different filters.

### 3.3 Add a project

1. Copy one of the files in `src/content/projects/`.
2. Give the copy a new name, for example `new-project.md`. Use lowercase letters and hyphens only.
3. Change the fields in the top part.
4. Set `order` to one more than the highest `order` in the other files. The new card then shows first.
5. Write the write-up below the second `---` line.
6. Save the file.

### 3.4 Remove a project

1. Delete the file of the project from `src/content/projects/`.
2. If the project has a card image, delete the image from `src/assets/covers/`.

### 3.5 Change the order of the cards

The cards show from the highest `order` to the lowest `order`. To move a card, change its `order` number.

A project with no `order` shows last. Do not give two projects the same number.

### 3.6 Set a project as featured

Featured projects show in the "Selected projects" section of the Home page. They also show on the Projects page. On the Home page, the cards do not show the card image.

1. Open the file of the project.
2. Add the line `featured: true` to the top part.
3. To remove the project from the Home page, delete the line. You can also set it to `featured: false`.

The Home page shows two cards in each row. Use an even number of featured projects, for example two or four.

### 3.7 Add a card image

1. Put the image in `src/assets/covers/`. Use PNG, JPG, WebP, AVIF, or SVG.
2. In the project file, add the line `cover: file-name.png`. Use the name of your image file.

The card crops the image from the center to fill a wide frame. The best size is 1120 × 600 pixels. An image with a different shape loses some of its edges.

### 3.8 Write the write-up

The write-up page shows only the bottom part of the file. The page does not show the card fields. Thus, start the write-up with a title line, for example `# Hyperion`.

Use standard Markdown:

| To add | Write |
|---|---|
| A title | `# Title` |
| A section heading | `## Heading` |
| A link | `[GitHub →](https://github.com/...)` |
| Bold text | `**text**` |
| A list item | `- item` |

To add an image:

1. Put the image in `src/assets/`. For example, use a folder for each project.
2. Write `![Description of the image](../../assets/folder/image.png)`. The path starts from the project file.

To add a video file:

1. Put the video in `public/videos/`.
2. Write `<video src="/videos/demo.mp4" controls></video>` on a separate line.

To add a YouTube video, copy the embed code from YouTube. Then put the `<iframe>` code on a separate line.

## 4. Education, Experience, and Research

The Home page shows these sections in this order: Education, Experience, Research, and Selected projects.

The data for Education is in `src/data/education.ts`. The data for Experience and Research is in `src/data/experience.ts`.

### 4.0 Education

Education entries use the same fields as Experience and Research (section 4.1). Set `section` to `'education'`. Set `tags` to an empty list (`[]`). Keep the bullets short, for example `'GPA: 3.9'`.

### 4.1 Parts of an entry

```ts
{
  section: 'research',
  role: 'Price Forecasting Researcher',
  org: 'Texas A&M University',
  dates: 'May 2025 – May 2026',
  bullets: [
    'First bullet.',
    'Second bullet.',
  ],
  tags: ['Python', 'statsmodels'],
  links: [
    { label: 'Poster', href: '/research/calf-price-poster.pdf' },
  ],
},
```

| Field | Necessary | What it does |
|---|---|---|
| `section` | Yes | The section of the entry. Write `'experience'` or `'research'`. |
| `role` | Yes | The bold title on the left. |
| `org` | Yes | The organization, below the title. |
| `dates` | Yes | The blue dates, below the organization. |
| `bullets` | Yes | The list on the right. Use two or three bullets. |
| `tags` | Yes | The orange tags below the bullets. |
| `links` | No | Green links below the tags, for example a poster or a paper. |
| `paper` | No | A paper for a research entry. See section 4.4. |

If no entry has `section: 'research'`, the Research section does not show.

### 4.2 Change or add an entry

1. Open `src/data/experience.ts`.
2. To change an entry, change the text between the quotation marks.
3. To add an entry, copy a full entry from `{` to `},`. Put the copy in the list.
4. Set `section` to `'experience'` or `'research'`.
5. In each section, keep the newest entry at the top. Each section shows its entries in the order of the list.
6. Save the file.

CAUTION: Put each text between single quotation marks (`'`). If the text contains an apostrophe, write `\'` or use the character `’`. If you do not do this, the build stops.

Use one format for all dates. For example, use `January 2026`, not `Jan 2026`.

### 4.3 Add a poster or a paper

Put your own PDF files in `public/research/`. Then link them with a path that starts with `/research/`.

1. Put the PDF in `public/research/`. Use lowercase letters and hyphens in the file name, for example `calf-price-poster.pdf`.
2. Open `src/data/experience.ts`.
3. In the entry, add a `links` list:

   ```ts
   links: [
     { label: 'Poster', href: '/research/calf-price-poster.pdf' },
   ],
   ```

4. Save the file.

The link opens the PDF in a new browser tab. The browser shows the PDF.

If a journal or a conference publishes your paper, do not put the PDF in the repository. Link to the official page (the DOI link or the arXiv link) instead:

```ts
{ label: 'Paper', href: 'https://doi.org/10.xxxx/xxxxx' },
```

This has three advantages:

- The publisher can own the copyright of the final PDF.
- Readers find the official version, which they can cite.
- The repository stays small.

Before you publish a poster or a paper about the Space Force work, get approval from your advisor.

### 4.4 Show the status of a paper

Add a `paper` field to a research entry:

```ts
paper: {
  status: 'Paper under review',
  href: 'https://doi.org/10.xxxx/xxxxx',
},
```

| Field | Necessary | What it does |
|---|---|---|
| `status` | Yes | A gray line below the dates. |
| `href` | No | Adds a green "Paper ↗" link. Use the DOI link or the arXiv link. |

Change `status` when the paper moves to the next stage:

| Stage | `status` |
|---|---|
| You write the paper | `'Paper in progress'` |
| A journal reviews the paper | `'Paper under review'` |
| A journal accepts the paper | `'Accepted, Journal Name 2027'` |
| The journal publishes the paper | `'Published, Journal Name 2027'`. Also add `href`. |

Do not write the name of the journal before it accepts the paper.

To link an abstract, put the PDF in `public/research/`. Then add it to `links` (section 4.3), for example `{ label: 'Abstract', href: '/research/abstract.pdf' }`.

## 5. Gallery

The Gallery page shows the photos in `src/data/gallery.ts`. The page shows the photos in the order of the list.

### 5.1 Add a photo

1. Put the photo in `src/assets/gallery/`. Use JPG for photos. Use PNG for screenshots.
2. Open `src/data/gallery.ts`.
3. Add a line to the `photos` list:

   ```ts
   { file: 'test-fire.jpg', alt: 'Engine test fire at night', caption: 'RED hot fire, March 2026' },
   ```

4. Save the file.

| Field | Necessary | What it does |
|---|---|---|
| `file` | Yes | The file name in `src/assets/gallery/`. |
| `alt` | Yes | A short description of the photo for screen readers. Tell what the photo shows. |
| `caption` | No | The text that shows on the photo and in the photo viewer. |

A photo that is not in the list does not show on the page. If the `file` name is incorrect, the build stops and shows the name.

### 5.2 Photo formats

Do not use HEIC files. Astro cannot read HEIC files. Change them to JPG before you add them.

To change all the HEIC files in a folder to JPG on a Mac, type this command in that folder:

```bash
mkdir -p jpg && for f in *.HEIC *.heic; do [ -e "$f" ] && sips -s format jpeg -s formatOptions 85 "$f" --out "jpg/${f%.*}.jpg"; done
```

The command puts the JPG files in a `jpg/` folder. The command does not change the HEIC files.

Git keeps all versions of all files. Thus, a deleted photo stays in the repository. Before you add a very large photo, make it smaller. A width of approximately 2000 pixels is sufficient.

## 6. Other text and links

All of this text is in `src/data/site.ts`.

| Field | What it does |
|---|---|
| `taglines` | The phrases that the Home page types below your name. |
| `resume` | The path of the résumé file. |
| `links` | Your LinkedIn, GitHub, and email address. |
| `description` | The text that search engines and link previews show. |

### 6.1 Replace the résumé

1. Put the new PDF in `public/assets/`.
2. Give it the same name as the old file: `Mihir_Mankikar_resume.pdf`.

If you use a different name, change `resume` in `src/data/site.ts` to the new name.

## 7. Colors

Each accent color has one function. Keep these functions when you change the website.

| Color | Function |
|---|---|
| Green | Items that you can click. The typing cursor also uses green. |
| Blue | Dates, labels, bullet markers, and chart highlights. |
| Orange | Tags. |

The color values are at the top of `src/styles/global.css`.

## 8. Publish the website

GitHub publishes the website automatically when you push to the `main` branch.

Do this step one time before the first publication:

1. On GitHub, open the repository.
2. Go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.

To publish a change:

1. Type `npm run build` to make sure that the website has no errors.
2. Commit the change.
3. Push the commit to `main`.
4. On GitHub, open the **Actions** tab. Wait for the "Deploy to GitHub Pages" workflow to complete.

The website is at `https://mihirm-06.github.io`.
