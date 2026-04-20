# 🪖 MIL-SPEC CIPHER PRO v2.0
> **Terminal Táctica de Generación de Entropía Criptográfica**

[![Status](https://img.shields.io/badge/STATUS-OPERATIVE-success?style=for-the-badge&logo=target)]()
[![Security](https://img.shields.io/badge/SECURITY-LOCAL_ONLY-orange?style=for-the-badge&logo=shield)]()
[![License](https://img.shields.io/badge/LICENSE-MIT-yellow?style=for-the-badge)]()

**MIL-SPEC CIPHER PRO** es una extensión de navegador de alto rendimiento diseñada para operadores que requieren seguridad absoluta. Utiliza algoritmos criptográficos de para generar secuencias de acceso impredecibles, integrando además telemetría en tiempo real.

---

## 🛠️ Capacidades de la Unidad

### 🔐 Motor de Encriptación
* **Web Crypto API:** Generación de números aleatorios mediante `window.crypto.getRandomValues()`, garantizando entropía real.
* **Soporte Multi-Alfabeto:**
    * **Latino:** Estándar con soporte para Ñ.
    * **Кириллица (Cirílico):** Para operaciones en regiones orientales.
    * **中文 (Chino) & 日本語 (Japonés):** Soporte completo para caracteres Unicode complejos.
* **Mezcla Segura:** Algoritmo de barajado compatible con caracteres de 16-bit para evitar corrupción de datos.

### 🛰️ Telemetría y Reconocimiento
* **BTC Market Intel:** Seguimiento en tiempo real del precio de Bitcoin/EUR vía Coindesk API.
* **Radar Meteorológico:** Obtención de temperatura local mediante geolocalización y Open-Meteo API.
* **Zulu Time:** Reloj de referencia universal (UTC) para coordinación de operaciones.

### 🎨 Interfaz de Comando
* **Diseño MIL-SPEC:** Paleta de colores de alta visibilidad (Naranja de Seguridad, Verde Oliva y Bronce Coyote).
* **Feedback Táctico:** Indicadores visuales de copia en portapapeles y estados de conexión.

---

## 🚀 Instalación en la Base (Navegador)

Para desplegar esta unidad en su navegador (Chrome, Edge, Brave o Firefox):

1.  **Descarga:** Clona este repositorio o descarga el archivo `.zip`.
2.  **Modo Desarrollador:**
    * Vaya a `chrome://extensions/`.
    * Active el interruptor **"Modo de desarrollador"** (esquina superior derecha).
3.  **Despliegue:**
    * Haga clic en **"Cargar descomprimida"**.
    * Seleccione la carpeta que contiene los archivos del proyecto.
4.  **Activación:** Fije la extensión en su barra de herramientas para acceso rápido.

---

## 📂 Estructura del Proyecto

| Archivo | Función |
| :--- | :--- |
| `manifest.json` | Protocolo de configuración y permisos de la extensión. |
| `popup.html` | Estructura del panel de control táctico. |
| `popup.js` | Cerebro lógico, manejo de criptografía y telemetría. |
| `style.css` | Capa estética con diseño industrial y efectos visuales. |
| `index.html` | Dossier técnico y documentación de la unidad. |

---

## ⚠️ Protocolo de Seguridad

* **Local-First:** Esta extensión **no envía** tus contraseñas a ningún servidor externo. Todo el proceso ocurre en la memoria local de tu navegador.
* **Privacidad:** La geolocalización se utiliza exclusivamente para el módulo meteorológico y no se almacena.
* **Uso:** El operador es el único responsable de la custodia de las claves generadas.

---

## 🎖️ Créditos y Licencia

Desarrollado con ❤️ en Colombia por **ELBUHO89™** bajo la **Licencia MIT**. 
Inspirado en estándares de seguridad de código abierto.

> *"En la criptografía confiamos, en el código verificamos."*

---
**[SISTEMA MIL-SPEC CIPHER // FIN DE LA TRANSMISIÓN]**
