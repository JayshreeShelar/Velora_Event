# Velora Events website
Open this folder in VS Code, right-click index.html > Open with Live Server (opening index.html directly also works). Internet is needed for Tailwind CDN, fonts and Unsplash images.

## Images
The included .jpg images are original generated artwork (not photos). Every image tag loads `assets/images/<name>.jpg` first and falls back to the `.svg` placeholder. To use real photos, just drop JPGs with these exact names into `assets/images/` (no code change needed):
hero1, hero2, hero3, wedding, corporate, birthday, social, engagement, destination, about, anniversary, expo (recommended 1600x1000 for hero*, 800x1000 for the rest).

## Home page video
`assets/video/decor.mp4` (poster: `decor-poster.jpg`) opens from the Watch Video button. Replace the file with your own decoration reel using the same name.
