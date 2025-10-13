# 🔌 Connexion au Backend API

Ce portfolio est maintenant connecté au backend pour charger dynamiquement les projets et compétences.

## ✅ Modifications effectuées

### 1. Dépendances ajoutées
- `axios` - Pour les requêtes HTTP
- `@tanstack/react-query` - Pour la gestion du cache et de l'état

### 2. Fichiers modifiés

**src/main.jsx**
- Ajout du `QueryClientProvider` pour gérer les requêtes

**src/components/Projects.jsx**
- Récupère les projets depuis l'API au lieu des données statiques
- Affiche un état de chargement
- Gère les erreurs de connexion

**src/components/Skills.jsx**
- Récupère les compétences depuis l'API
- Groupées automatiquement par catégorie
- États de chargement et d'erreur

### 3. Nouveaux fichiers

**src/lib/api.js**
- Configuration centralisée de l'API
- Fonctions pour récupérer projets et compétences

**.env.example**
- Template pour la configuration

## 🚀 Configuration

### 1. Installer les nouvelles dépendances

```bash
cd Portfolio
npm install
```

### 2. Configurer l'URL de l'API

Créez un fichier `.env` à la racine :

```env
VITE_API_URL=http://localhost:3001
```

### 3. Démarrer le backend

```bash
cd ../Portfolio-Backend
npm run start:dev
```

Le backend doit être sur `http://localhost:3001`

### 4. (Optionnel) Peupler la base de données

```bash
cd Portfolio-Backend
npm run seed
```

### 5. Démarrer le portfolio

```bash
cd Portfolio
npm run dev
```

Ouvrir http://localhost:5173

## 📊 Comment ça fonctionne

### Chargement des projets

```javascript
// Le composant Projects.jsx récupère les données
const { data: projects, isLoading, isError } = useQuery({
  queryKey: ['projects'],
  queryFn: () => projectsApi.getAll().then(res => res.data),
})
```

- ✅ Chargement automatique au montage du composant
- ✅ Cache des données pendant 5 minutes
- ✅ Retry automatique en cas d'échec
- ✅ États de chargement et d'erreur

### Chargement des compétences

```javascript
// Le composant Skills.jsx récupère et groupe par catégorie
const { data: skillsData, isLoading, isError } = useQuery({
  queryKey: ['skills-by-categories'],
  queryFn: () => skillsApi.getByCategories().then(res => res.data),
})
```

## 🎯 Avantages

### ✅ Données dynamiques
- Mettez à jour les projets depuis le dashboard
- Les changements apparaissent immédiatement sur le portfolio
- Pas besoin de redéployer le code

### ✅ Performance
- Cache intelligent avec React Query
- Pas de re-fetch inutile
- Optimisation automatique

### ✅ Expérience utilisateur
- États de chargement élégants
- Gestion des erreurs
- Fallback gracieux

## 🔧 Personnalisation

### Modifier l'URL de l'API

Dans `.env` :
```env
# Développement local
VITE_API_URL=http://localhost:3001

# Production
VITE_API_URL=https://api.votredomaine.com
```

### Ajuster le cache

Dans `src/main.jsx` :
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})
```

## 🐛 Dépannage

### Le portfolio ne charge pas les données

1. **Vérifier que le backend est démarré**
   ```bash
   # Dans Portfolio-Backend
   npm run start:dev
   ```

2. **Vérifier l'URL dans .env**
   ```bash
   cat .env
   # Doit contenir: VITE_API_URL=http://localhost:3001
   ```

3. **Tester l'API directement**
   ```bash
   curl http://localhost:3001/api/projects
   curl http://localhost:3001/api/skills
   ```

4. **Vérifier la console du navigateur**
   - Ouvrir les DevTools (F12)
   - Onglet Console pour les erreurs
   - Onglet Network pour voir les requêtes

### Erreur CORS

Si vous voyez une erreur CORS dans la console :

1. Vérifier la configuration CORS dans `Portfolio-Backend/src/main.ts`
2. L'URL du frontend doit être autorisée :
   ```typescript
   app.enableCors({
     origin: 'http://localhost:5173',
     credentials: true,
   })
   ```

### Les données ne s'affichent pas

1. **Vérifier qu'il y a des données dans la BDD**
   ```bash
   cd Portfolio-Backend
   npm run seed
   ```

2. **Tester avec Swagger**
   - Ouvrir http://localhost:3001/api/docs
   - Tester les endpoints GET /projects et GET /skills

## 📈 Évolutions futures

### 1. Ajouter d'autres sections dynamiques
- Expériences
- Timeline
- À propos

### 2. Optimisations
- Prefetch des données
- Infinite scroll pour les projets
- Lazy loading des images

### 3. Fonctionnalités avancées
- Recherche de projets
- Filtrage par technologie
- Mode offline avec cache

## 🎉 Résumé

Votre portfolio est maintenant :
- ✅ Connecté au backend
- ✅ Données dynamiques
- ✅ Performance optimisée
- ✅ Gestion d'erreurs robuste
- ✅ Prêt pour la production

**Prochaine étape** : Gérez facilement vos projets et compétences depuis le dashboard sur http://localhost:5174
