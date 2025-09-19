# Portfolio Website - Modern Bento Layout# Astro Starter Kit: Basics

Portfolio website modern dengan fixed layout menggunakan Astro dan TailwindCSS. Website ini menggunakan bento-style grid layout dengan 4 section utama yang tetap fixed di halaman, sementara konten di dalam card dapat berinteraksi dan berubah secara dinamis.```sh

npm create astro@latest -- --template basics

## ✨ Fitur Utama```

- **Fixed Bento Layout**: Layout grid 2x2 yang tetap di satu halaman, tidak bergeser> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- **Smooth Navigation**: Navbar sticky dengan smooth scroll ke setiap section

- **Interactive Cards**: Konten di dalam card dapat diganti secara dinamis## 🚀 Project Structure

- **Modal Views**: Modal untuk menampilkan semua projects dan certificates

- **Responsive Design**: Otomatis menyesuaikan dari desktop (2x2) ke mobile (1 kolom)Inside of your Astro project, you'll see the following folders and files:

- **Modern Styling**: TailwindCSS dengan warna biru-putih yang clean & modern

- **Scroll Animations**: Animasi smooth saat scroll dan hover effects```text

/

## 🏗️ Struktur Project├── public/

│ └── favicon.svg

````├── src

src/│   ├── assets

├── components/│   │   └── astro.svg

│   ├── Navbar.astro          # Navigation dengan smooth scroll│   ├── components

│   ├── Footer.astro          # Footer dengan social links│   │   └── Welcome.astro

│   ├── Card.astro            # Komponen card reusable│   ├── layouts

│   ├── ProjectsModal.astro   # Modal untuk semua projects│   │   └── Layout.astro

│   └── CertificatesModal.astro # Modal untuk semua certificates│   └── pages

├── data/│       └── index.astro

│   ├── projects.ts           # Data projects dengan interface TypeScript└── package.json

│   └── certificates.ts      # Data certificates dengan interface TypeScript```

├── layouts/

│   └── Layout.astro         # Layout utama dengan TailwindCSSTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

├── pages/

│   └── index.astro          # Halaman utama dengan bento layout## 🧞 Commands

├── styles/

│   └── global.css           # TailwindCSS importsAll commands are run from the root of the project, from a terminal:

````

| Command | Action |

## 🎨 Layout Structure| :------------------------ | :----------------------------------------------- |

| `npm install` | Installs dependencies |

### Desktop (2x2 Grid):| `npm run dev` | Starts local dev server at `localhost:4321` |

```| `npm run build`          | Build your production site to`./dist/` |

┌─────────────────┬─────────────────┐| `npm run preview` | Preview your build locally, before deploying |

│ Profile │ Projects │| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

│ │ (scrollable) │| `npm run astro -- --help` | Get help using the Astro CLI |

├─────────────────┼─────────────────┤

│ Certificates │ Contact │## 👀 Want to learn more?

│ (scrollable) │ │

└─────────────────┴─────────────────┘Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```

### Mobile (1 Column):
```

┌─────────────────┐
│ Profile │
├─────────────────┤
│ Projects │
│ (scrollable) │
├─────────────────┤
│ Certificates │
│ (scrollable) │
├─────────────────┤
│ Contact │
└─────────────────┘

````

## 🚀 Cara Menjalankan

1. **Install Dependencies**
   ```bash
   npm install
````

2. **Development Server**

   ```bash
   npm run dev
   ```

   Website akan berjalan di `http://localhost:4321`

3. **Build untuk Production**

   ```bash
   npm run build
   ```

4. **Preview Build**
   ```bash
   npm run preview
   ```

## 🛠️ Teknologi yang Digunakan

- **Astro** - Static site generator dengan komponen modern
- **TailwindCSS** - CSS framework untuk styling yang efisien
- **TypeScript** - Type safety untuk data structures
- **Inter Font** - Google Font untuk typography yang clean

## 🎯 Kustomisasi

### Mengubah Data Personal

Edit file berikut untuk menyesuaikan dengan data Anda:

1. **Profile Information**: `src/pages/index.astro` (bagian Profile Card)
2. **Projects Data**: `src/data/projects.ts`
3. **Certificates Data**: `src/data/certificates.ts`
4. **Contact Information**: `src/components/Footer.astro` dan Contact Card
5. **Social Media Links**: `src/components/Footer.astro`

### Mengubah Warna Theme

Edit `tailwind.config.mjs` untuk mengubah color palette:

```javascript
colors: {
  primary: {
    // Ganti dengan warna pilihan Anda
    500: '#your-color',
    600: '#your-darker-color',
    // dst...
  }
}
```

## 📱 Responsif Breakpoints

- **Mobile**: < 768px (1 kolom)
- **Tablet**: 768px - 1024px (2 kolom dengan spacing)
- **Desktop**: > 1024px (2x2 grid dengan max-width)

## ⚡ Performance Features

- **Lazy Loading**: Images dimuat sesuai kebutuhan
- **Smooth Animations**: CSS transitions yang optimal
- **Minimal JavaScript**: Hanya untuk interactivity essential
- **Static Generation**: Build menjadi static files untuk performance terbaik

## 🤝 Kontribusi

Feel free untuk fork project ini dan menyesuaikan dengan kebutuhan Anda!

## 📄 License

MIT License - bebas digunakan untuk personal maupun komersial.
