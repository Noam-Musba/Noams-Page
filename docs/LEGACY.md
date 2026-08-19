# Legacy site archive

## Purpose

The original 2023 portfolio is preserved as a frozen static snapshot at `/legacy/`. It exists for comparison with the refactored portfolio and is not part of the active React application.

Do not refactor, format, or share code between the archived snapshot and the active application.

## Provenance

- Source tag: `legacy-v1`
- Source commit: `1ad8528`
- Original build tool: Create React App (`react-scripts` 5.0.1)
- Public path used for the archive build: `.`
- Source maps: disabled
- Generated output: `public/legacy/`

The snapshot was built once from an exported copy of the tagged commit. Future application builds copy the already-generated files without installing or executing the legacy toolchain separately.

Only files required to run the archived page are retained. Create React App's build manifest, default Progressive Web App manifest and icons, nested `robots.txt`, and unreachable Web Vitals chunk were removed from the generated output. This keeps the snapshot self-contained without carrying deployment metadata or starter assets that the page does not use.

## Documented archival differences

The original header hotlinked a guitar image from an external commercial website. That resource no longer loads reliably, so the archive uses `archive-logo.png`, a 160 × 80 metadata-free PNG derived from the project-owned `src/NoamLogo.jpg` image.

The original Pokémon image remains an external reference. Its ownership is unclear, so the asset was not copied into this repository. The external Pokémon destination and GitHub profile links also remain unchanged.

The original tracked JPEG remains in Git history and retains its historical metadata. No Git history rewrite was performed. Only the image deployed in the static archive was re-encoded without the original EXIF metadata.

## Preserved limitations

The archive intentionally preserves the original application behavior, layout, accessibility limitations, and responsive issues. Its production build completes with the original lint warnings:

- Two external links use `target="_blank"` without an explicit `rel` value.
- The like/dislike reducer has no default case.
- The sign-up form effect has a missing dependency warning.

These concerns will be addressed in the new application where relevant. They are not patched inside the archive because it is a historical artifact rather than maintained application code.
