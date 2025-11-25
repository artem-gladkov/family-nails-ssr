# Family Nails - Codebase Guide for AI Assistants

## Project Overview

**Family Nails** is a nail salon website built with Next.js 12, TypeScript, and SCSS. The site showcases services, portfolio, team members, and pricing for a nail salon business located in Orel, Russia.

**Production URL**: https://family-nails.ru
**Tech Stack**: Next.js 12.3.1, React 18, TypeScript 4.8, SCSS
**Architecture**: Hybrid approach combining FSD (Feature-Sliced Design) with Next.js Pages Router

---

## Architecture & Project Structure

### High-Level Overview

The project uses a **hybrid architecture** combining:
1. **Modified FSD (Feature-Sliced Design)** - Only `shared` and `widgets` layers are used
2. **Next.js Pages Router** - Traditional file-based routing in `/pages`
3. **Component-based structure** - Reusable UI components and complex widgets

```
family-nails-ssr/
├── app/                    # Global styles and fonts
│   ├── fonts/             # Custom fonts (OrchideaPro, Raleway)
│   └── styles/            # Global SCSS (variables, mixins, reset, etc.)
├── pages/                 # Next.js pages (routing)
│   ├── service/          # Service detail pages
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # HTML document structure
│   ├── index.tsx         # Homepage
│   └── [other pages]
├── shared/                # Shared/reusable components (FSD layer)
│   └── ui/               # UI components (Button, Logo, Nav, etc.)
├── widgets/               # Complex page sections (FSD layer)
│   ├── advantages/       # Advantages section
│   ├── benefits/         # Benefits section
│   ├── contacts/         # Contacts section
│   ├── header/           # Header widget
│   ├── footer/           # Footer widget
│   ├── offer/            # Special offers section
│   ├── portfolio/        # Portfolio gallery
│   ├── preview/          # Hero/preview section
│   ├── priceList/        # Price list with constants
│   ├── service/          # Services overview
│   ├── team/             # Team members section
│   └── [other widgets]
├── public/                # Static assets
│   └── images/           # Images, favicons, portfolio
├── next.config.js        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

---

## Technology Stack

### Core Technologies
- **Next.js 12.3.1** - React framework with SSR/SSG
- **React 18.2.0** - UI library
- **TypeScript 4.8.4** - Type safety
- **SCSS** - Styling with CSS Modules

### Key Dependencies
- **classnames** - Conditional CSS class management
- **@pbe/react-yandex-maps** - Yandex Maps integration
- **react-slick / swiper** - Carousels and sliders
- **viewerjs** - Image zoom/viewer functionality
- **next-sitemap** - Automatic sitemap generation

### Development Tools
- **ESLint** - Code linting (next/core-web-vitals)
- **@svgr/webpack** - SVG to React component conversion

---

## Path Aliases (TypeScript)

The project uses TypeScript path aliases for clean imports:

```typescript
{
  "@entities/*": ["entities/*"],    // Not used in this project
  "@features/*": ["features/*"],    // Not used in this project
  "@pages/*": ["pages/*"],
  "@shared/*": ["shared/*"],
  "@widgets/*": ["widgets/*"]
}
```

**Usage Example**:
```typescript
import { Button, Logo } from "@shared/ui";
import { Preview } from "@widgets/preview";
```

---

## Coding Conventions

### Component Structure

#### 1. Widget Components
Widgets are complex, self-contained page sections located in `/widgets`.

**Structure**:
```
widgets/
└── priceList/
    ├── index.ts                    # Barrel export
    ├── constants/                  # Constants and data
    │   ├── priceList.ts
    │   └── index.ts
    └── ui/                         # UI components
        ├── PriceList/
        │   ├── PriceList.tsx
        │   ├── PriceList.module.scss
        │   └── index.ts
        └── PriceItem/
            ├── PriceItem.tsx
            ├── PriceItem.module.scss
            └── index.ts
```

**Example Widget** (`widgets/preview/ui/Preview/Preview.tsx`):
```typescript
import { FC } from "react";
import styles from "./Preview.module.scss";
import { Container, Section } from "@shared/ui";

interface IPreviewProps {
  previewTitle: React.ReactNode;
}

export const Preview: FC<IPreviewProps> = ({ previewTitle }) => {
  return (
    <Section className={styles.preview}>
      <Container>
        <h1>{previewTitle}</h1>
      </Container>
    </Section>
  );
};
```

#### 2. Shared UI Components
Simple, reusable components in `/shared/ui`.

**Example** (`shared/ui/Button/Button.tsx`):
```typescript
import { ButtonHTMLAttributes, FC, useCallback, MouseEvent } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  skin?: 'primary' | 'ghost' | 'text';
  size?: 'big' | 'default' | 'small';
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const Button: FC<IButtonProps> = ({
  className,
  skin = 'primary',
  onClick,
  href,
  target = "_self",
  children,
  ...otherProps
}) => {
  const classes = classNames(styles.button, styles[skin], className);

  const onClickButton = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    if (href !== undefined) {
      window.open(href, target);
    }
    onClick && onClick(event);
  }, [href]);

  return (
    <button className={classes} onClick={onClickButton} {...otherProps}>
      {children}
    </button>
  );
};
```

#### 3. Page Components
Next.js pages import and compose widgets.

**Example** (`pages/index.tsx`):
```typescript
import type { NextPage } from 'next';
import { PageLayout } from "@shared/ui";
import { Preview } from "@widgets/preview";
import { Service } from "@widgets/service";
import { Advantages } from "@widgets/advantages";
import { PriceList } from "@widgets/priceList";

const Home: NextPage = () => {
  return (
    <PageLayout
      pageTitle='Салон маникюра и педикюра "Family Nails" г Орел'
      description='Наша студия расположена в самом центре...'
    >
      <Preview previewTitle={<>Ногтевая студия <br/> Family Nail&apos;s</>} />
      <Service type='short' />
      <Advantages />
      <PriceList />
    </PageLayout>
  );
};

export default Home;
```

### TypeScript Patterns

1. **Interface Naming**: Use `I` prefix for interfaces (e.g., `IButtonProps`, `IHeaderProps`)
2. **Export Types**: Export interfaces from components for reusability
3. **Strict Mode**: TypeScript strict mode is enabled
4. **FC Type**: Use `FC<Props>` from React for functional components
5. **Props Spreading**: Use `extends HTMLAttributes` for native element props

### Barrel Exports

Use `index.ts` files for clean exports:

```typescript
// shared/ui/index.ts
export * from './Button';
export * from './Logo';
export * from './Container';
export * from './Icon';
```

---

## Styling Conventions

### SCSS Architecture

**Global Styles** (`app/styles/`):
- `index.scss` - Main entry point (imports all other styles)
- `variables.scss` - Design tokens (colors, fonts, breakpoints)
- `mixins.scss` - Reusable SCSS mixins
- `extends.scss` - SCSS placeholder selectors
- `fonts.scss` - Font-face declarations
- `reset.scss` - CSS reset
- `common.scss` - Common/utility classes
- `utils.scss` - Utility classes

**Component Styles**:
- Use **CSS Modules** (`.module.scss`)
- Co-located with components
- Import as `styles` object

### Design Tokens (variables.scss)

#### Colors
```scss
$primary-color-1: #E1C06F;  // Gold
$primary-color-2: #9FAB7C;  // Green
$dark-gray-color: #303030;
$white: #fff;
```

#### Responsive Breakpoints
```scss
$desktop-width: 1260px;
$laptop-width: 1024px;
$tablet-width: 768px;
$mobile-width: 480px;
```

#### Typography
```scss
$main-font-stack: 'Raleway', sans-serif;
$secondary-font-stack: 'Orchidea Pro', serif;

$h1-font-size: 84px;
$h1-font-size-t: 56px;  // Tablet
$h1-font-size-m: 36px;  // Mobile
```

### CSS Module Usage

```typescript
import styles from "./Component.module.scss";
import classNames from "classnames";

const classes = classNames(styles.button, styles.primary, className);
```

### Custom Fonts

**OrchideaPro** (Light, Medium, Regular) - Primary display font
**Raleway** (Regular) - Body text font

Fonts are located in `app/fonts/` with `.ttf`, `.woff`, and `.woff2` formats.

---

## Data Management

### Constants Pattern

Business data (prices, services, etc.) is stored in `constants/` directories within widgets.

**Example** (`widgets/priceList/constants/priceList.ts`):
```typescript
import { PriceListGroupProps } from "@widgets/priceList";

export const PRICE_LIST: PriceListGroupProps[] = [{
  key: '2',
  title: 'Маникюр',
  items: [{
    key: '1',
    name: 'Комбинированный маникюр (обработка без покрытия)',
    price: '700 ₽'
  }, {
    key: '2',
    name: 'Обработка + покрытие гель-лак в один тон',
    price: '1300 ₽'
  }]
}];
```

**Important**: When updating prices or services, modify these constant files.

---

## Development Workflow

### Available Scripts

```bash
# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Generate sitemap (runs automatically after build)
npm run postbuild
```

### Development Process

1. **Start Development Server**: `npm run dev`
2. **Make Changes**: Edit components, styles, or pages
3. **Test Locally**: Hot reload is enabled
4. **Build for Production**: `npm run build`
5. **Check Build**: `npm start` to test production build

### Git Workflow

- **Main Branch**: Production-ready code
- **Feature Branches**: Use `claude/` prefix for AI-assisted development
- **Commit Messages**: Clear, descriptive messages in Russian or English
- Always test build before committing

---

## Common Development Tasks

### Adding a New Page

1. Create page file in `/pages` (e.g., `new-page.tsx`)
2. Import and use `PageLayout` from `@shared/ui`
3. Compose widgets as needed
4. Add corresponding styles if needed (`.module.scss`)
5. Update navigation in `shared/ui/Nav` if needed

**Example**:
```typescript
import type { NextPage } from 'next';
import { PageLayout } from "@shared/ui";
import { Preview } from "@widgets/preview";

const NewPage: NextPage = () => {
  return (
    <PageLayout pageTitle="New Page Title" description="Page description">
      <Preview previewTitle="New Page" />
    </PageLayout>
  );
};

export default NewPage;
```

### Adding a New Widget

1. Create directory in `/widgets/new-widget/`
2. Create structure:
   ```
   new-widget/
   ├── index.ts
   ├── constants/ (if needed)
   └── ui/
       └── NewWidget/
           ├── NewWidget.tsx
           ├── NewWidget.module.scss
           └── index.ts
   ```
3. Export from `widgets/new-widget/index.ts`
4. Use in pages with `@widgets/new-widget`

### Adding a New Shared Component

1. Create directory in `/shared/ui/ComponentName/`
2. Create:
   - `ComponentName.tsx` - Component logic
   - `ComponentName.module.scss` - Styles
   - `index.ts` - Export
3. Add export to `/shared/ui/index.ts`

### Updating Prices

1. Navigate to `widgets/priceList/constants/priceList.ts`
2. Modify the `PRICE_LIST` array
3. Each service group has `title` and `items` array
4. Each item has `key`, `name`, and `price`

### Adding Images

1. Place images in `/public/images/`
2. Use subdirectories for organization (e.g., `/public/images/portfolio/`)
3. Reference in components: `/images/your-image.jpg`
4. Optimize images before adding (use WebP when possible)

---

## Key Files Reference

### Configuration Files

| File | Purpose |
|------|---------|
| `next.config.js` | Next.js configuration (React strict mode, SWC minify) |
| `tsconfig.json` | TypeScript config with path aliases |
| `next-sitemap.config.js` | Sitemap generation config (site URL) |
| `.eslintrc.json` | ESLint configuration (extends next/core-web-vitals) |
| `package.json` | Dependencies and scripts |

### Important Source Files

| File | Purpose |
|------|---------|
| `pages/_app.tsx` | Next.js app wrapper (imports global styles) |
| `pages/_document.tsx` | Custom HTML document structure |
| `pages/index.tsx` | Homepage |
| `app/styles/index.scss` | Main SCSS entry point |
| `app/styles/variables.scss` | Design system tokens |
| `shared/ui/PageLayout/PageLayout.tsx` | Page wrapper with Header/Footer |
| `widgets/header/ui/Header.tsx` | Site header with navigation |
| `widgets/footer/ui/Footer.tsx` | Site footer |

---

## Special Features

### Yandex Maps Integration

The project uses `@pbe/react-yandex-maps` for map display in the contacts section.

### Image Viewer

Uses `viewerjs` library for portfolio image zoom functionality.

### Carousels

Uses `react-slick` and `swiper` for image carousels.

### SEO

- Sitemap automatically generated via `next-sitemap`
- Meta tags managed through `PageLayout` component
- OG image: `/public/images/og-image.jpg`

---

## Important Notes for AI Assistants

### When Making Changes

1. **Always Read Before Modifying**: Never modify files without reading them first
2. **Maintain Consistency**: Follow existing patterns and conventions
3. **Use Path Aliases**: Always use `@shared`, `@widgets`, `@pages` imports
4. **TypeScript Strict Mode**: Ensure all code passes TypeScript checks
5. **CSS Modules**: Always use CSS Modules for component styles
6. **Barrel Exports**: Update `index.ts` files when adding new components
7. **Russian Content**: Most user-facing text is in Russian - maintain language consistency

### Code Quality Standards

1. **No Unused Imports**: Remove unused imports
2. **Proper Types**: Always define proper TypeScript interfaces
3. **Accessibility**: Maintain semantic HTML and ARIA attributes
4. **Responsive Design**: Use defined breakpoints from `variables.scss`
5. **Performance**: Optimize images, lazy load when appropriate
6. **SEO**: Maintain proper meta tags and semantic structure

### Testing Before Committing

1. Run `npm run build` to ensure production build works
2. Check for TypeScript errors
3. Test responsive behavior at different breakpoints
4. Verify all links and navigation work
5. Check console for errors/warnings

### Common Pitfalls to Avoid

1. **Don't use entities/ or features/**: Project only uses `shared` and `widgets`
2. **Don't skip barrel exports**: Always update `index.ts` files
3. **Don't hardcode breakpoints**: Use SCSS variables
4. **Don't mix import styles**: Use consistent path aliases
5. **Don't forget mobile styles**: Always implement responsive design
6. **Don't remove WhatsApp integration**: It's the primary contact method

### File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `PriceList.tsx`)
- **Styles**: Same as component + `.module.scss` (e.g., `Button.module.scss`)
- **Pages**: kebab-case (e.g., `about-us.tsx`)
- **Constants**: camelCase (e.g., `priceList.ts`)
- **Index files**: Always lowercase `index.ts` or `index.tsx`

---

## Project Context

### Business Domain
Family Nails is a nail salon offering:
- Manicure services
- Pedicure services
- Nail extensions
- Nail art/designs
- Repair services
- Combo services (4-hand treatments)

### Target Audience
Primary customers are women seeking professional nail care services in Orel, Russia.

### Key Business Logic
- Pricing structure in rubles (₽)
- WhatsApp as primary contact method (+7-953-476-21-21)
- Portfolio showcase is critical for attracting customers
- Service descriptions must be clear and detailed
- Location and contact information are essential

### Future Considerations
- The project structure supports easy addition of new services
- Constants-based approach allows quick price updates
- Component architecture enables feature expansion
- SEO is important for local business discovery

---

## Quick Reference

### Most Common Commands
```bash
npm run dev          # Start development
npm run build        # Build for production
npm run lint         # Check code quality
```

### Most Edited Files
- `widgets/priceList/constants/priceList.ts` - Price updates
- `pages/index.tsx` - Homepage structure
- `app/styles/variables.scss` - Design tokens
- `widgets/portfolio/` - Portfolio images and layout

### Quick Navigation
- Pages: `/pages`
- Components: `/shared/ui`
- Widgets: `/widgets`
- Styles: `/app/styles`
- Images: `/public/images`

---

## Version Information

- **Next.js**: 12.3.1
- **React**: 18.2.0
- **TypeScript**: 4.8.4
- **Node**: Requires Node 14.6.0+

Last Updated: 2025-11-25
