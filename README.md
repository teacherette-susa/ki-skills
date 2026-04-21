# 📚 OER-Skills-Bibliothek für das Schul-KI-Portal

Eine offene Sammlung von KI-Skills für den Einsatz im Unterricht — erstellt von Lehrkräften, für Lehrkräfte.

> **[🔍 Skills durchsuchen & herunterladen →](https://teacherette-susa.github.io/ki-skills/)**

---

## Was ist ein Skill?

Ein Skill besteht aus zwei Teilen:

| Teil | Datei | Beschreibung |
|------|-------|--------------|
| **Skill-Anweisung** | `SKILL.md` | Erklärt der KI, wie sie sich verhalten soll |
| **Hintergrundwissen** | `knowledge/` | Dateien, die die KI als Kontext nutzt (PDFs, Markdown, etc.) |

Ein fertiger Skill kann direkt in das Schul-KI-Portal importiert werden.

---

## Schnellstart

### Skill finden & herunterladen

1. Die **[Suchseite](https://teacherette-susa.github.io/ki-skills/)** öffnen
2. Suchbegriff eingeben (z.B. „Mathematik", „Feedback", „Deutsch")
3. Skill auswählen und als `.zip` herunterladen
4. Im Schul-KI-Portal unter *Skills → Importieren* hochladen

### Skill beitragen

Zwei Wege stehen offen:

**Weg A – GitHub Pull Request** *(für technisch Versierte)*
```bash
git clone https://github.com/teacherette-susa/ki-skills
cd oer-skills-bibliothek
cp -r skill-template skills/mein-neuer-skill
# SKILL.md und knowledge/ befüllen
git add . && git commit -m "Skill: Mein neuer Skill"
git push origin main  # → dann Pull Request stellen
```

**Weg B – GitHub Issue** *(für alle)*  
→ [Neuen Skill einreichen](../../issues/new?template=skill-einreichen.yml)  
Das Team hilft beim Anlegen der Dateien.

---

## Repository-Struktur

```
oer-skills-bibliothek/
│
├── skills/                        # Alle Skills
│   ├── beispiel-skill/
│   │   ├── SKILL.md               # Skill-Anweisung (Pflicht)
│   │   └── knowledge/             # Hintergrundwissen (optional)
│   │       ├── lehrplan.pdf
│   │       └── beispiele.md
│   └── ...
│
├── skill-template/                # Vorlage für neue Skills
│   ├── SKILL.md
│   └── knowledge/
│
├── docs/                          # GitHub-Pages-Suchoberfläche
│   └── index.html
│
├── scripts/
│   └── generate-index.js          # Erzeugt skills-index.json
│
└── .github/
    ├── ISSUE_TEMPLATE/
    │   └── skill-einreichen.yml
    └── workflows/
        └── update-index.yml       # Aktualisiert Index bei jedem Merge
```

---

## SKILL.md-Format

Jede `SKILL.md` beginnt mit einem YAML-Frontmatter-Block:

```yaml
---
name: mein-skill-name
title: Menschenlesbarer Titel
description: >
  Kurze Beschreibung, wann und wofür dieser Skill gedacht ist.
  Wird in der Suche angezeigt.
category: Mathematik          # Fach oder Kategorie
level: Sekundarstufe I        # Schulstufe
tags: [brüche, rechnen, üben] # Schlüsselwörter für die Suche
author: Vorname Nachname
license: CC BY 4.0
---

# Mein Skill

Hier kommen die Anweisungen für die KI...
```

---

## Lizenz

Alle Skills in diesem Repository stehen unter **CC BY 4.0** — sofern in der `SKILL.md` nicht anders angegeben. Das bedeutet: frei nutzbar, anpassbar und weiterteilbar mit Namensnennung.

---

## Mitmachen

Fragen, Ideen, Fehler? → [Issue öffnen](../../issues/new)  
Direkt beitragen? → [CONTRIBUTING.md](CONTRIBUTING.md) lesen
