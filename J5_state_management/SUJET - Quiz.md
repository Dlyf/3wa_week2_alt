# Créez une application de type "Quiz" en utilisant React

## Objectifs :

- Comprendre les concepts de base de React, tels que les composants, les props et les hooks.

- Utiliser les hooks `useState` et `useEffect` pour gérer l'état de l'application.

- Utiliser `useContext` pour gérer les informations partagées entre les composants.

## Instructions

1. Créez un nouveau projet React en utilisant **ViteJS**.
  (pour des raisons pratiques, vous supprimerez le composant `<React.StrictMode>` dans `main.jsx`)

2. Créez un composant `Quiz` qui affiche le titre du quiz, une question et une liste de réponses possibles. Utilisez des props pour passer les informations de titre, question et réponses à ce composant.

3. Créez un composant `Question` qui affiche la question actuelle et les réponses possibles. Utilisez des props pour passer les informations de question et de réponses à ce composant.

4. Utilisez `useState` pour gérer l'état de l'application. Créez une variable d'état pour stocker la réponse sélectionnée par l'utilisateur, et une autre pour stocker l'index de la question actuelle.

5. Utilisez `useEffect` pour mettre à jour l'affichage de la question actuelle et de la réponse sélectionnée lorsque l'utilisateur sélectionne une réponse.

6. Créez un composant `QuizContext` qui utilise `useContext` pour gérer les informations partagées entre les composants. Stocker les informations de question et de réponses dans ce contexte, et utilisez-les dans les composants `Quiz` et `Question`.

7. Ajoutez une logique pour gérer les boutons de navigation "suivant" et "précédent" pour naviguer entre les questions.

8. Ajoutez une logique pour afficher un message de félicitations lorsque l'utilisateur a répondu à toutes les questions.

9. Stylez l'application en utilisant CSS.

## Remarques

- Pour simplifier vous pouvez utiliser un tableau d'objet pour stocker les questions et les réponses.

- Vous pouvez utiliser un fichier JSON ou un fichier d'import pour stocker les données de question et de réponse.

- Utilisez des composants fonctionnels.

**Bonne chance !**

-----

#### Annexe - Schéma indicatif

Voici un schéma qui peut vous aider à comprendre la structure des composants pour cet exercice:

```jsx
<Quiz />
  |- title (props)
  |- questions (props)
  |- currentIndex (state)
  |- selectedAnswer (state)
  |
  <Question />
     |- question (props)
     |- answers (props)
     |- selectedAnswer (props)
     |- onAnswerSelected (props)
```

Le composant principal `Quiz` prend en entrée les propriétés `title` et `questions` qui sont passées depuis le composant parent. Il utilise également les états `currentIndex` et `selectedAnswer` pour gérer l'index de la question actuelle et la réponse sélectionnée.

A l'intérieur de `Quiz`, il y a un composant `Question` qui prend en entrée les propriétés `question`, `answers`, `selectedAnswer` et `onAnswerSelected`. Ce composant est responsable de l'affichage de la question courante et des réponses possibles, ainsi que de la gestion de la sélection de la réponse de l'utilisateur.
