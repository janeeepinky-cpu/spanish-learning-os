# Learning Design Constitution

This Spanish Learning App must not generate lessons from unconstrained model improvisation.

## Frameworks

- Use CEFR Companion Volume 2020 and the CEFR action-oriented approach for Can-Do design.
- Use ACTFL Proficiency Guidelines / Can-Do Statements for performance evidence and proficiency framing.
- Use Instituto Cervantes Plan Curricular (PCIC) as the primary Spanish curriculum reference for language content.

## PCIC Categories To Consider

- Objectives
- Grammar
- Pronunciation and Prosody
- Orthography
- Functions
- Pragmatic Strategies
- Discourse Genres
- General Notions
- Specific Notions
- Sociocultural Knowledge

## Learning Mechanisms

Lessons must combine meaningful/comprehensible input, interaction, meaningful output, noticing, retrieval practice, spaced practice, feedback, and repeated use across contexts.

No single theory, including Krashen i+1, may be treated as the only learning theory.

## Lexical Selection

Vocabulary and chunks should be selected by communicative utility, frequency, relevance to the current Can-Do, reuse potential, and prerequisite value.

When modern Spanish frequency needs verification, prefer RAE CORPES XXI. If frequency is not verified, do not claim a precise frequency rank.

## Regional Spanish

Core lessons should use broadly understandable Latin American Spanish.

Mexico-specific expressions must be marked with `variant: "mexico"` and checked against reliable Mexican Spanish resources such as Diccionario del Español de México before inclusion.

Spain-specific expressions must be marked with `variant: "spain"`.

Do not label a normal regional variant as incorrect Spanish.

## Pronunciation Teaching

The goal is not native-like accent. Track intelligibility, sound articulation, word stress, rhythm, prosody, and learner-specific problematic sounds.

## Lesson Pipeline

Can-Do -> real-life scenario -> required communicative functions -> required language -> prerequisite check -> vocabulary/chunks -> pronunciation target -> comprehensible input -> noticing -> guided practice -> retrieval -> production -> interaction -> feedback -> spaced review -> later transfer to a different context.

## Required Lesson Fields

Each lesson must include:

- `id`
- `level`
- `canDo`
- `realLifeTask`
- `pcicFunctions`
- `grammarTargets`
- `lexicalTargets`
- `chunks`
- `pronunciationTargets`
- `prerequisites`
- `inputActivities`
- `noticingActivities`
- `retrievalActivities`
- `productionActivities`
- `interactionActivities`
- `assessment`
- `reviewTargets`
- `regionalVariant`
- `sourceBasis`

If CEFR/PCIC level placement is uncertain, mark `sourceBasis.needsReview: true`.

Completing one lesson must not mark a Can-Do as mastered. Mastery requires repeated successful completion across time, content, and contexts.

New knowledge must be mixed with old knowledge.

Expansion order: high utility -> lower utility; concrete -> abstract; here-and-now -> past/future -> narration/opinion; formulaic chunks -> productive patterns; supported comprehension -> less supported comprehension; guided production -> independent production.

Lessons should develop listening, reading, speaking, writing, and interaction.
