# Examenopdracht: MiniShop (Expo React Native)

**Course:** Mobile Applications 2  
**Student:** Voornaam Achternaam  
**Status:** PLACEHOLDER – assignment specifications

---

## Verplicht te gebruiken
- Expo + React Native  
- TypeScript  
- TanStack Query  
- Redux Toolkit  
- Navigatie: React Navigation **of** Expo Router

---

## MUST (minimum)

### 1. Navigatie
- Tabs (3): Home, Cart, Profile  
- Home stack: ProductList → ProductDetail  
- Routes/params **typed** in TypeScript

### 2. Data (DummyJSON) – TanStack Query
- Product list: https://dummyjson.com/products  
- Product detail: https://dummyjson.com/products/{id}  
- Duidelijke loading / error / empty states

### 3. Redux Toolkit (global state)
**cartSlice**
- Add to cart (vanuit detail)
- Quantity + / -
- Remove item

**Selectors (verplicht)**
- Totaal items (sum quantities)
- Subtotal (sum price × qty)

### 4. Profile (cross-tab bewijs)
- Toon item count + subtotal (via selectors)
- Knop: **Go to Cart**

### 5. Theme
- Light / Dark toggle
- Theme zichtbaar toegepast (background / tekst / cards)

### 6. UI / UX
- Nette product cards en layout
- UI states duidelijk zichtbaar

---

## EXTRA PUNTEN (max. 2)
Kies max. 2:
- Search met debounce  
- Load more pagination  
- Favorites (toggle + lijst op Profile)  
- Extra setting (grid/list of show ratings)  
- AsyncStorage persist (theme + cart)

---

## Werkwijze (verplicht)
- Werk in GitHub repository  
- Regelmatige commits met duidelijke messages

---

## Indienen (verplicht)
- Project zippen **zonder** `node_modules`  
- Bestandsnaam: `Voornaam_Achternaam.zip`  
- In app/projectnaam: **Voornaam Achternaam** zichtbaar  
  (bv. Profile header of app title)
