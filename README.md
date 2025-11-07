# pruebasAutomatizadas

Proyecto de automatización de pruebas utilizando Cypress para probar funcionalidades de login y compra completa en la aplicación SauceDemo.

## Descripción

Este proyecto contiene pruebas automatizadas end-to-end (E2E) escritas en Cypress para validar el flujo de login y el proceso completo de compra en la plataforma SauceDemo (https://www.saucedemo.com/).

## Pruebas Implementadas

### 1. Inicio de Sesión (`iniciar-sesion.cy.js`)
- **Objetivo**: Validar el proceso de autenticación de usuarios.
- **Escenario**: Inicio de sesión con usuario estándar.
- **Pasos**:
  - Navegar a la página de login.
  - Ingresar credenciales válidas (usuario: `standard_user`, contraseña: `secret_sauce`).
  - Verificar redirección a la página de inventario.

### 2. Compra Completa (`compra-completa.cy.js`)
- **Objetivo**: Validar el flujo completo de compra desde login hasta confirmación.
- **Escenario**: Compra de productos con usuario autenticado.
- **Pasos**:
  1. Login automático.
  2. Agregar productos al carrito (Sauce Labs Backpack y Sauce Labs Bike Light).
  3. Navegar al carrito y verificar productos.
  4. Proceder al checkout.
  5. Completar formulario de envío.
  6. Confirmar la compra.
  7. Validar mensaje de confirmación.

## Configuración del Entorno

### Prerrequisitos
- Node.js instalado
- npm o yarn

### Instalación
```bash
npm install
```

### Variables de Entorno
Las credenciales y URLs se configuran en `cypress.env.json`:
```json
{
  "urlPagina": "https://www.saucedemo.com/",
  "urlHome": "https://www.saucedemo.com/inventory.html",
  "userStandard": "standard_user",
  "password": "secret_sauce"
}
```

## Ejecución de Pruebas

### Ejecutar todas las pruebas
```bash
npx cypress run
```

### Ejecutar pruebas en modo interactivo
```bash
npx cypress open
```

### Ejecutar una prueba específica
```bash
npx cypress run --spec "cypress/e2e/1-getting-started/iniciar-sesion.cy.js"
npx cypress run --spec "cypress/e2e/1-getting-started/compra-completa.cy.js"
```

## Estructura del Proyecto

```
pruebasCypress/
├── cypress/
│   ├── e2e/
│   │   └── 1-getting-started/
│   │       ├── iniciar-sesion.cy.js
│   │       └── compra-completa.cy.js
│   ├── fixtures/
│   ├── support/
│   └── downloads/
├── cypress.config.js
├── cypress.env.json
├── package.json
└── README.md
```

## Tecnologías Utilizadas
- **Cypress**: Framework de testing E2E
- **JavaScript**: Lenguaje de programación
- **Node.js**: Entorno de ejecución

## Licencia
Este proyecto es de uso educativo y no tiene licencia específica.
