# Skills beitragen

Herzlich willkommen! Diese Anleitung erklärt Schritt für Schritt, wie du einen eigenen Skill einreichen kannst.

---

## Qualitätskriterien

Ein guter Skill in dieser Bibliothek …

- **hat ein klares Ziel**: Was soll die KI damit tun? Für wen?
- **ist direkt einsetzbar**: Schüler:innen oder Lehrkräfte können ihn ohne Anpassung nutzen
- **nennt die Zielgruppe**: Schulstufe, Fach, Kontext
- **ist datenschutzkonform**: Kein Hintergrundwissen mit personenbezogenen Daten
- **steht unter CC BY 4.0** (oder kompatibler offener Lizenz)

---

## Schritt-für-Schritt: Skill per Pull Request einreichen

### 1. Repository forken

Klicke oben rechts auf **Fork** → du erhältst eine eigene Kopie.

### 2. Skill-Ordner anlegen

```bash
cd oer-skills-bibliothek/skills/
cp -r ../skill-template mein-skill-name
```

Der Ordnername wird als technische ID verwendet — nur Kleinbuchstaben, Bindestriche, keine Leerzeichen.

### 3. `SKILL.md` ausfüllen

Öffne `mein-skill-name/SKILL.md` und fülle alle Felder im YAML-Frontmatter aus:

```yaml
---
name: mein-skill-name          # muss mit dem Ordnernamen übereinstimmen
title: Lesbarer Titel
description: >
  Was tut dieser Skill? Wann sollte er eingesetzt werden?
  (Dieser Text erscheint in der Suche.)
category: Deutsch              # Pflichtfeld
level: Grundschule             # Schulstufe
tags: [lesen, verstehen, text] # mind. 2 Tags
author: Dein Name
license: CC BY 4.0
---

# Anweisungen für die KI

Schreibe hier, wie sich die KI verhalten soll...
```

**Pflichtfelder**: `name`, `title`, `description`, `category`, `level`, `tags`, `author`, `license`

### 4. Hintergrundwissen hinzufügen (optional)

Lege Dateien in `mein-skill-name/knowledge/` ab:
- Erlaubte Formate: `.md`, `.txt`, `.pdf`
- Maximale Dateigröße: 5 MB pro Datei
- Keine personenbezogenen Daten!

### 5. Pull Request stellen

```bash
git add skills/mein-skill-name/
git commit -m "Skill hinzufügen: [Titel des Skills]"
git push origin main
```

Dann auf GitHub → **Pull Request** → **New Pull Request**.

---

## Skill per Issue einreichen

Wenn du kein GitHub-Konto nutzen möchtest oder unsicher bist:

1. [Issue öffnen](../../issues/new?template=skill-einreichen.yml)
2. Das Formular ausfüllen
3. Ein Maintainer hilft dir beim Upload

---

## Review-Prozess

1. Automatische Prüfung (GitHub Actions): Ist das Format korrekt?
2. Menschliches Review durch ein Maintainer-Team (≤ 7 Tage)
3. Feedback als Kommentar im PR
4. Merge → Skill erscheint automatisch in der Suche

---

## Kategorien

Bitte eine der folgenden Kategorien verwenden (oder neue vorschlagen):

`Deutsch` · `Mathematik` · `Englisch` · `Sachunterricht` · `Geschichte` · `Biologie` · `Physik` · `Chemie` · `Kunst` · `Musik` · `Sport` · `Informatik` · `Ethik/Religion` · `Differenzierung` · `Feedback` · `Unterrichtsplanung` · `Sonstiges`

---

## Häufige Fragen

**Darf ich Skills anderer verändern?**  
Ja, unter CC BY 4.0 gerne — bitte reiche die veränderte Version als neuen Skill mit Hinweis auf das Original ein.

**Was passiert mit meinen Daten?**  
Dein GitHub-Username wird im Commit-Verlauf sichtbar. Im Frontmatter gibst du deinen Namen selbst an.

**Wie aktualisiere ich einen eigenen Skill?**  
Pull Request mit den Änderungen stellen — einfach die bestehenden Dateien bearbeiten.
