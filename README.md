# UBER Clone (React Native + Expo)

Application mobile d'apprentissage inspirée d'Uber, construite avec **React Native**, **Expo Router** et **NativeWind**.

## Aperçu du projet

Ce repository contient une base d'application de type VTC avec :

- un flux d'onboarding (swiper) ;
- des écrans d'authentification (`sign-in` / `sign-up`) ;
- une navigation par onglets pour les sections principales (`Home`, `Rides`, `Chat`, `Profile`) ;
- une base de composants réutilisables (`InputField`, bouton custom, OAuth UI).

> ⚠️ Le projet est en cours de construction : certaines actions (authentification, logique métier) sont encore des placeholders.

## Stack technique

- **Expo**
- **React Native**
- **Expo Router** (routing basé sur les fichiers)
- **TypeScript**
- **NativeWind + TailwindCSS**
- **React Navigation** (tabs)

## Structure principale

```text
app/
  (auth)/
    welcome.tsx
    sign-in.tsx
    sign-up.tsx
  (root)/(tabs)/
    home.tsx
    rides.tsx
    chat.tsx
    profile.tsx
components/
constants/
assets/
```

## Prérequis

- **Node.js** (LTS recommandé)
- **npm**
- **Expo CLI** (via `npx expo`)
- Émulateur Android/iOS ou application **Expo Go** sur mobile

## Installation

```bash
npm install
```

## Lancer le projet

Démarrer le serveur Expo :

```bash
npm run start
```

Lancer sur les différentes plateformes :

```bash
npm run android
npm run ios
npm run web
```

## Scripts disponibles

- `npm run start` : démarre Expo
- `npm run android` : lance l'app sur Android
- `npm run ios` : lance l'app sur iOS
- `npm run web` : lance la version web
- `npm run lint` : exécute le linting
- `npm run reset-project` : réinitialise le projet de base Expo

## Fonctionnalités actuelles

- Onboarding en 3 étapes avec pagination.
- Écrans d'inscription / connexion avec composants de formulaire.
- Bouton OAuth (UI).
- Navigation par onglets (écrans placeholder).

## Améliorations possibles

- Intégration d'une vraie authentification (Firebase, Supabase, Clerk, etc.).
- Gestion de l'état global (Zustand/Redux).
- Intégration cartographique (Google Maps / Mapbox).
- Réservation de trajet, estimation de prix et historique.
- Chat en temps réel et notifications push.

## Contribution

Les contributions sont bienvenues :

1. Fork du repo
2. Création d'une branche feature (`git checkout -b feature/ma-feature`)
3. Commit (`git commit -m "feat: ..."`)
4. Push et ouverture d'une Pull Request

## Licence

Projet à but éducatif.
