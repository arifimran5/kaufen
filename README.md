# Kaufen - Angular 18+ Shopping Cart Demo

A modern shopping cart application showcasing the latest Angular features and best practices, particularly focusing on the new Signals API and reactive patterns.

## Key Features

- 🎯 Built with Angular 18+
- 📡 Uses the new Resource API for data fetching
- 💡 Signal-based state management
- 🎨 Brutalist design system
- 🛒 Shopping cart functionality
- 🔄 Reactive UI updates

## Technical Highlights

### Signals

- Cart state management using `signal()` and `computed()`
- Reactive product listing with signal-based data store
- Two-way state synchronization with localStorage

### Resource API

```typescript
productResource = resource({
  loader: async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.products;
  }
}).asReadonly();
```

### Modern Angular Patterns

- Standalone Components
- Input Signals (`input()`)
- Output Events (`output()`)
- Dependency Injection with `inject()`
- Template Control Flow (`@if`, `@for`)

### Component Architecture

- Reusable Sidebar Component
- Skeleton Loading UI
- Cart Service with Signal-based state
- Product Service with Resource API

## Project Structure

```
src/
├── app/
│   ├── cart/                 # Cart components and service
│   ├── productlisting/       # Product listing components
│   ├── shared/
│   │   ├── sidebar/         # Reusable sidebar component
│   │   └── skeletonloader/  # Loading skeleton components
│   └── app.ts               # Root component
```


## Learning Points

- Using Signals for state management instead of BehaviorSubject
- Resource API for data fetching instead of HttpClient
- New template syntax for control flow
- Standalone components and simplified imports
- Signal-based inputs instead of traditional @Input()
- Modern dependency injection with inject()

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `ng serve`
4. Open browser at `http://localhost:4200`

## Requirements

- Node.js 18+
- Angular CLI 18+