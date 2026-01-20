# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a poet portfolio website built with Astro 5, based on the Dante theme. It showcases Barbara Carlson's books, poems, translations, essays, press/reviews, interviews, and events.

## Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally

## Architecture

### Content Collections (src/content.config.ts)

The site uses Astro's content collections with the glob loader pattern. Collections defined:

- **hero** - Homepage hero section
- **book** - Published books with title, publisher, year, description, image, linkUrl
- **poem** - Individual poems or poem collections with title, publication, year, optional poems array
- **translation** - Translated works with title, author, description, publication, year, optional linkUrl and poems array
- **essay** - Essays with title, year, optional publication and linkUrl
- **press** - Reviews/press items with title, date, optional description and linkUrl
- **interview** - Interviews with title, date, optional description and linkUrl
- **event** - Events with title, date, optional description and linkUrl

Content files are markdown stored in `src/content/{collection-name}/`.

### Pages Structure

- `/` - Homepage with hero section
- `/about/` - About page
- `/works/` - Works listing with dynamic single views
- `/events/` - Events with pagination (`[page].astro`)
- `/contact` - Contact page

### Styling

- This website was originally built with Tailwind CSS, but should primarily be styled with CSS and CSS variables from here on out.
- Custom fonts: Inter (sans), Newsreader (serif)
- Custom color tokens via CSS variables: `--color-text-main`, `--color-bg-main`, `--color-bg-muted`, `--color-border-main`
- Typography plugin with custom "dante" prose variant
