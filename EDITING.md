# How to publish on Freedom Beagle (no Claude needed)

## The newsroom (easiest way — use this)

**Where:** https://jagar05.github.io/freedom-beagle/admin/

**One-time setup (about 2 minutes):**
1. Go to https://github.com/settings/personal-access-tokens/new (sign in as Jagar05 if asked)
2. Name it something like `freedom-beagle-newsroom`, set **Expiration** to 1 year
3. Under **Repository access**, choose **Only select repositories** → pick `freedom-beagle`
4. Under **Permissions → Repository permissions**, set **Contents** to **Read and write**
5. Click **Generate token** and copy it (long string starting with `github_pat_`)
6. Open the newsroom link above, choose the **token** sign-in option, and paste it in

Keep the token somewhere safe (password manager, or a note only you can see). The newsroom remembers it on your computer, so this is a one-time thing per device.

**Publishing an article:**
1. Open the newsroom → **Articles** → **New Article**
2. Fill in: Headline, Publish date, Section (dropdown), Teaser (the 1–2 sentences shown on the homepage)
3. Write the article in the big editor. Toolbar has bold/italic/headings/links.
4. **Photos:** click the image button in the toolbar and upload from your computer — it handles everything.
5. Click **Save** (top right). The live site updates itself about a minute later.

**Editing an existing article:** newsroom → Articles → click it → make changes → Save.

## Videos

GitHub can't host large video files, so do what every news site does — embed:
1. Upload the video to the Freedom Beagle YouTube or Rumble channel
2. On the video page, click **Share → Embed** and copy the code (starts with `<iframe`)
3. In the newsroom editor, paste that code where you want the video (use the editor's code/HTML view if it has one — otherwise just paste it on its own line)

The site already styles embedded videos to fit the page.

## Backup option: editing directly on GitHub

If the newsroom is ever down: go to https://github.com/Jagar05/freedom-beagle/tree/main/_posts — each article is one file. Click a file → pencil icon → edit → **Commit changes**. To add a new article, click **Add file → Create new file**, name it `YYYY-MM-DD-short-title.md`, and copy the top section (between the `---` lines) from an existing article as a starting pattern.

## Who can edit

Only the Jagar05 GitHub account can change the site — that's you, and Claude (using the credentials stored on your PC). Anyone else can read the site's code (it's public hosting) but cannot touch it.

## Rules of the road

- The **Section** dropdown controls where an article appears — the homepage shows everything automatically.
- End investigative pieces with a `---` line and a **Sources:** list of links. It's the house style.
- Photos you upload land in `assets/img/uploads/` — don't worry about it, it's automatic.
